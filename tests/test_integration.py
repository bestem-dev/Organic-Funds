import time

from brownie import (accounts, exceptions)
import pytest

from scripts.deploy_mocks import main as deploy_mocks
from scripts.deploy_project import main as deploy_project
from scripts.helpers import get_account


ACCEPTABLE_MARGIN = 10**6  # A millionth of a millionth


@pytest.fixture(scope="session")
def mock_token():
    return deploy_mocks()["mock_token"]


@pytest.fixture(scope="session")
def project(mock_token):
    return deploy_project()


@pytest.fixture(scope="session")
def projectOwner():
    return get_account()


@pytest.fixture(scope="session")
def users(mock_token):
    users = accounts[1:]
    for user in users:
        mock_token.mint(1000e18, {"from": user})
    return users

# We are testing just the happy path :). We don't want to discover security vulneabilities or bugs and have to waste time fixing them.
# I'm assuming pytest runs these tests secuentially


def test_funding(project, mock_token, users):
    for i, user in enumerate(users):
        amount = 10e18 * (i+1)
        mock_token.approve(project.address, amount, {"from": user})
        project.fund(amount, {"from": user})

    total_investment = sum([10e18 * i for i in range(1, 10)])
    assert mock_token.balanceOf(project.address) == total_investment


def test_start_work(project, mock_token, projectOwner):
    project.withdrawMilestoneFunds({"from": projectOwner})
    first_milestone_amount = project.milestoneAmounts(0)
    PO_balance = mock_token.balanceOf(projectOwner.address)

    assert first_milestone_amount == PO_balance


def test_submit_work(project, projectOwner):
    project.submitMilestone([
        [10e18, 20e18, 30e18, 40e18],
        [10e18, 5e18, 20e18, 30e18, 40e18]],
        {"from": projectOwner})

    assert project.votingOpen()
    assert project.openMilestoneProposals() == 3


def test_vote(project, users, projectOwner):
    votes = [0, 0, 0, 1, 1, 2, 2, 2, 2]  # 2 wins

    for i, user in enumerate(users):
        project.vote(votes[i], {"from": user})

    # time.sleep(10)

    project.closeVoting({"from": projectOwner})

    # The value from the new proposal (see test_submit_work)
    assert project.milestoneAmounts(1) == 5e18


def test_start_last_milestone(project, users, projectOwner):
    project.withdrawMilestoneFunds({"from": projectOwner})
    project.submitMilestone([
        [10e18, 5e18, 40e18, 60e18, 100e18]  # They get greedy, all or nothing
    ],
        {"from": projectOwner})

    votes = [0, 0, 0, 1, 1, 0, 0, 0, 0]  # 0 wins

    for i, user in enumerate(users):
        project.vote(votes[i], {"from": user})

    assert project.roundToOptionToVotes(project.currentMilestone(), 0) == 7
    assert project.roundToOptionToVotes(project.currentMilestone(), 1) == 2

    # time.sleep(10)

    w = project.closeVoting({"from": projectOwner}).return_value

    assert w == 0

    assert project.active() == False


def test_user_withdraw(users, project, mock_token):
    total_supply = sum([10e18 * i for i in range(1, 10)])

    assert total_supply == project.tokenSupply()

    token_balance = total_supply - 10e18 - 5e18

    assert token_balance == mock_token.balanceOf(project.address)

    for i, user in enumerate(users):
        print(f"\nUser N°{i+1}")
        initial_amount = 10e18 * (i+1)

        print(mock_token.balanceOf(project.address))
        print(total_supply)
        print(project.balanceOf(user.address, project.TOKEN()))

        old_balance = mock_token.balanceOf(user.address)
        expected_return = (initial_amount/total_supply) * token_balance
        portion = project.withdraw({"from": user}).return_value
        new_balance = mock_token.balanceOf(user.address)
        withdrawn_amount = new_balance - old_balance

        print(portion)
        print(new_balance)
        print(old_balance)

        assert project.balanceOf(user.address, project.TOKEN()) == 0

        total_supply -= initial_amount
        token_balance -= withdrawn_amount

        assert total_supply == project.tokenSupply()
        assert abs(token_balance -
                   mock_token.balanceOf(project.address)) < ACCEPTABLE_MARGIN

        assert abs(withdrawn_amount - expected_return) < ACCEPTABLE_MARGIN
