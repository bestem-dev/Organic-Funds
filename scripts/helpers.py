from os import link
from brownie import (accounts, interface, network, config, Contract)
from web3 import Web3


LOCAL_BLOCKCHAIN_ENVIRONMENTS = ["development", "ganache-local"]
FORKED_LOCAL_ENVIRONMENTS = ["mainnet-fork"]


def get_account(index=None, id=None):

    if index:
        return accounts[index]
    if id:
        return accounts.load(id)

    if (
        network.show_active() in LOCAL_BLOCKCHAIN_ENVIRONMENTS
        or network.show_active() in FORKED_LOCAL_ENVIRONMENTS
    ):
        return accounts[0]

    # Testnet with account manager for real accounts
    # return accounts.load("test-wallet")
    return accounts.add(config["wallets"]["from_key"])

