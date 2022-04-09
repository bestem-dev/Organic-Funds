import os
import requests

PINATA_BASE_URL = "https://api.pinata.cloud"
# https://docs.pinata.cloud/api-pinning/pin-file
PIN_FILE_ENDPOINT = "/pinning/pinFileToIPFS"

headers = {
    "Authorization": f"Bearer {os.getenv('PINATA_JWT')}"
} 


def pin_to_pinata(filepath):
    with open(filepath, "rb") as f:
        file_bin = f.read()

    filename = filepath.split("/")[-1]

    response = requests.post(
        PINATA_BASE_URL + PIN_FILE_ENDPOINT, files={"file": (filename, file_bin)},
        headers=headers
    )

    ipfs_hash = response.json()["IpfsHash"]
    return f"https://ipfs.io/ipfs/{ipfs_hash}?filename={filename}"
