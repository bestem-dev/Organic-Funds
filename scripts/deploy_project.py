from brownie import Project, MockERC20, config, network

from scripts.helpers import get_account


def main():
    account = get_account()
    ProjectContract = Project.deploy(
        "metadataURL",
        account.address,
        MockERC20[-1],
        [10e18, 20e18, 30e18, 40e18],
        {"from": account},
        publish_source=config["networks"][network.show_active()].get(
            "verify", False))
    return ProjectContract
