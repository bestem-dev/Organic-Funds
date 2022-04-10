from brownie import MockERC20, config, network

from scripts.helpers import get_account


def main():
    account = get_account()
    TokenContract = MockERC20.deploy(
        {"from": account},
        publish_source=config["networks"][network.show_active()].get(
            "verify", False))
    return {"mock_token": TokenContract}
