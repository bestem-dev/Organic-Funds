// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC1155/IERC1155.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Project is ERC1155 {
    // Constants
    uint256 public constant PROJECT = 0;
    uint256 public constant TOKEN = 1;
    uint256 public minContribution = 1;
    uint256 public votingTime = 10000; //10 * 24 * 3600 * 1000; // Ten days
    address public whitelistedFundingToken;
    address public projectOwner;

    // Global State
    uint256[] public milestoneAmounts;
    uint256 public currentMilestone = 0;
    bool public active = true;
    uint256 public tokenSupply;

    // Milestone voting vars
    uint256[][] public nextProposedMilestones;
    string[] public nextProposedMetadata;
    uint256 public openMilestoneProposals;
    mapping(address => mapping(uint256 => bool)) public votedOnMilestone;
    mapping(uint256 => mapping(uint256 => uint256)) public roundToOptionToVotes;
    bool public votingOpen = false;
    uint256 public votingOpenTime;

    modifier onlyActive() {
        require(active, "Funding campaign is inactive");
        _;
    }
    modifier onlyProjectOwner() {
        require(msg.sender == projectOwner, "Only project owner");
        _;
    }

    constructor(
        string memory _metadata,
        address _owner,
        address _whitelistedFundingToken,
        uint256[] memory _milestoneAmounts
    ) ERC1155(_metadata) {
        projectOwner = _owner;
        whitelistedFundingToken = _whitelistedFundingToken;
        milestoneAmounts = _milestoneAmounts;
        _mint(_owner, PROJECT, 1, "");
    }

    function fund(uint256 _amount) external onlyActive {
        IERC20 token = IERC20(whitelistedFundingToken);
        require(
            token.allowance(msg.sender, address(this)) >= _amount,
            "Amount not approved"
        );
        require(_amount > minContribution, "Contributed less than minimum");

        token.transferFrom(msg.sender, address(this), _amount);
        tokenSupply = tokenSupply + _amount; // add this to built in method
        _mint(msg.sender, TOKEN, _amount, ""); // Our approve token will be a stable coin for the MVP
    }

    function fundStream(uint256 _amount) external onlyActive {
        // TO-DO:
        // - figure out how to make Native ERC1155 superToken
        //   creating a flow in pure solidity
        // - Start flow from user to contract of erc20 token
        // - Start from from contract to user of erc1155 token
        return;
    }

    function withdrawMilestoneFunds() external onlyProjectOwner {
        require(votingOpen == false, "Voting is still open");
        IERC20 token = IERC20(whitelistedFundingToken);
        require(
            token.balanceOf(address(this)) > milestoneAmounts[currentMilestone],
            "Milestone not reached"
        );

        token.transfer(projectOwner, milestoneAmounts[currentMilestone]);
    }

    // string currentMilestoneMetadataURI;

    function submitMilestone(
        string[] memory _nextProposedMetadata,
        uint256[][] memory _proposedMilestones
    ) external onlyProjectOwner {
        // TO-DO: Handle Metadata
        // For now we only handle the immediate next milestone
        nextProposedMilestones = _proposedMilestones; // We are not checking if previous milestones were modified. Should we?
        // currentMilestoneMetadataURI = _milestoneMetadataURI;
        votingOpenTime = block.timestamp;
        votingOpen = true;
        nextProposedMetadata = _nextProposedMetadata;
        openMilestoneProposals = _proposedMilestones.length + 1; // we add the "cease funding" as 0
    }

    function vote(uint256 proposalIndex) public {
        require(votingOpen, "Voting is closed");
        require(
            votedOnMilestone[msg.sender][currentMilestone] == false,
            "You've already voted on this"
        );
        require(
            block.timestamp < votingOpenTime + votingTime,
            "Voting time is over"
        );
        require(
            balanceOf(msg.sender, TOKEN) > minContribution,
            "You don't have enough stake to vote"
        );
        votedOnMilestone[msg.sender][currentMilestone] = true;
        roundToOptionToVotes[currentMilestone][proposalIndex]++;
    }

    function getRoundVote(uint256 round, uint256 proposalIndex)
        public
        view
        returns (uint256)
    {
        return roundToOptionToVotes[round][proposalIndex];
    }

    function closeVoting() public onlyProjectOwner returns (uint256) {
        // require(
        //     block.timestamp > votingOpenTime + votingTime,
        //     "Voting time not is over"
        // );
        // count votes
        uint256 winner;
        uint256 maxVotes;
        for (uint256 i; i < openMilestoneProposals; i++) {
            uint256 votes = roundToOptionToVotes[currentMilestone][i];
            if (votes >= maxVotes) {
                // Terminate is 0, so in a Tie between 0 and other option, the other option wins
                winner = i;
                maxVotes = votes;
            }
        }

        votingOpen = false;
        currentMilestone++;

        if (winner == 0) {
            active = false;
        } else {
            _setURI(nextProposedMetadata[winner - 1]);
            milestoneAmounts = nextProposedMilestones[winner - 1];
        }
        return winner;
    }

    function withdraw()
        public
        returns (
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        require(active == false, "Only available after financing ends");
        IERC20 token = IERC20(whitelistedFundingToken);
        uint256 balance = balanceOf(msg.sender, TOKEN);
        require(balance > 0, "You don't own a stake in this project");

        uint256 oldTS = tokenSupply;
        uint256 oldBal = token.balanceOf(address(this));

        uint256 portion = (balance * token.balanceOf(address(this))) /
            tokenSupply;

        tokenSupply = tokenSupply - balance; // add this to built in method
        _burn(msg.sender, TOKEN, balance);
        token.transfer(msg.sender, portion);
        return (portion, balance, oldTS, oldBal);
    }
}
