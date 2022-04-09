import json
import os
"""
Exports abi and deployments for current chain
"""

from brownie import Project, ProjectFactory, network

EXPORT_FOLDER = "frontend/src/smartContracts"
DEPLOY_FILE = f"{EXPORT_FOLDER}/DeployedContracts.json"


os.makedirs(EXPORT_FOLDER, exist_ok=True)


def export_contract_data(contract):
    """ Can receive any contract, be it locally deployed contracts, initialized interfaces, and from_abi contracts"""
    contract_name = contract._build['contractName']

    with open(f"{EXPORT_FOLDER}/{contract_name}ABI.json", "w") as fp:
        json.dump(contract.abi, fp, indent=4)

    if os.path.exists(DEPLOY_FILE):
        with open(DEPLOY_FILE, "r") as fp:
            deployments = json.load(fp)
    else:
        deployments = {}

    if not deployments.get(contract_name):
        deployments[contract_name] = {}
    deployments[contract_name][network.show_active()] = contract.address

    with open(DEPLOY_FILE, "w") as fp:
        json.dump(deployments, fp, indent=4)


def main():

    # For locally deployed contracts
    for C in [Project, ProjectFactory]:
        if not C:
            raise Exception(
                f"No contract deployed for {C.get_verification_info()['contract_name']}")
        contract = C[-1]
        export_contract_data(contract)
