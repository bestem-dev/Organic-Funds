// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts v4.4.1 (token/ERC1155/IERC1155.sol)

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Project is ERC1155 {
    uint256 public constant PROJECT = 0;
    uint256 public constant TOKEN = 1;
    uint256 public minContribution = 1;

    address private whitelistedFundingToken;

    uint256[] public milestoneAmounts;
    uint256 public currentMilestone = 0;

    address public projectOwner;

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

    function fund(uint256 _amount) external {
        IERC20 token = IERC20(whitelistedFundingToken);
        require(
            token.allowance(msg.sender, address(this)) >= _amount,
            "Amount not approved"
        );
        require(_amount > minContribution, "Contributed less than minimum");

        token.transferFrom(msg.sender, address(this), _amount);
        _mint(msg.sender, TOKEN, _amount, ""); // Our approve token will be a stable coin for the MVP
    }

    function withdrawMilestoneFunds() public {
        require(votingOpen == false, "Voting is still open");
        IERC20 token = IERC20(whitelistedFundingToken);
        require(
            token.balanceOf(address(this)) > milestoneAmounts[currentMilestone],
            "Milestone not reached"
        );
        currentMilestone++;

        token.transfer(projectOwner, milestoneAmounts[currentMilestone]);
    }

    uint256[][] public nextMilestones;
    mapping(address => mapping(uint256 => uint256))
        public votesPerUserPerMilestone;
    bool votingOpen = false;
    uint256 votingOpenTime;

    function submitMilestone(
        string memory _milestoneMetadataURI,
        uint256 nProposals,
        uint256[][] memory _nextMilestones,
        string[] memory nextMilestonesURIs
    ) public {
        if (nProposals > 1) {}
        votingOpen = true;
    }

    function vote(uint256 proposalIndex) public {
        require(
            balanceOf(msg.sender, TOKEN) > minContribution,
            "You don't have enough stake to vote"
        );
        require(votingOpen, "Voting is closed");
        votesPerUserPerMilestone[msg.sender][currentMilestone] = proposalIndex;
    }

    function closeVoting() public {
        votingOpen = false;
    }
}
