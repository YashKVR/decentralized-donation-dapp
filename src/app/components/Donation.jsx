"use client"
import React from 'react';
import { motion } from "framer-motion";
import { ethers } from "ethers";

const Donation = () => {
    const contractAddress = "0x3f8Af6934614f304B701eB513949d438c8957c8C"
    const abi = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Attest",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_fromTokenId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_toTokenId",
                    "type": "uint256"
                }
            ],
            "name": "BatchMetadataUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "MetadataUpdate",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Revoke",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "bronzeDonor",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "bronzeRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "bronzeURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "burn",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "goldDonor",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "goldRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "goldURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "revoke",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "name": "setBronzeURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "name": "setGoldURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_uri",
                    "type": "string"
                }
            ],
            "name": "setSilverURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                }
            ],
            "name": "silverDonor",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "silverRate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "silverURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdraw",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        }
    ]

    const bronzeRate = "0.005";
    const silverRate = "0.01";
    const goldRate = "0.02";

    let provider, signer;

    const donateBronze = async () => {
        if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults")
            provider = ethers.getDefaultProvider()
        }
        else {
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer)

            try {
                const tx = await contract.bronzeDonor(signer.address, { value: ethers.parseEther(bronzeRate) });
                tx.wait();
                console.log("SBT Minted successfully => ", tx);
                alert("SBT Minted Successfully");
            } catch (error) {
                console.log("Error -> ", error);
            }
        }
    }

    const donateSilver = async () => {
        if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults")
            provider = ethers.getDefaultProvider()
        }
        else {
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer)

            try {
                const tx = await contract.silverDonor(signer.address, { value: ethers.parseEther(silverRate) });
                tx.wait();
                console.log("SBT Minted successfully => ", tx);
                alert("SBT Minted Successfully");
            } catch (error) {
                console.log("Error -> ", error);
            }
        }
    }

    const donateGold = async () => {
        if (window.ethereum == null) {
            console.log("MetaMask not installed; using read-only defaults")
            provider = ethers.getDefaultProvider()
        }
        else {
            provider = new ethers.BrowserProvider(window.ethereum)
            signer = await provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer)

            try {
                const tx = await contract.goldDonor(signer.address, { value: ethers.parseEther(goldRate) });
                tx.wait();
                console.log("SBT Minted successfully => ", tx);
                alert("SBT Minted Successfully");
            } catch (error) {
                console.log("Error -> ", error);
            }
        }
    }



    return (
        <div name='donation' className="flex flex-col items-center w-full h-screen">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 underline py-10">Donation</h2>
            {/* For Desktop only */}
            <div className="hidden lg:flex lg:flex-row space-x-5">

                <div className="bg-[#eeecff] border-[#eeecff] rounded-3xl drop-shadow-lg flex flex-col items-center w-[30vw] h-[70vh] justify-between">
                    <img src="https://imgur.com/hcme2tO.png" alt="" className="h-[300px]" />
                    <h3 className="text-2xl font-semibold pb-3">Bronze Donator</h3>
                    <ul className="space-y-3">
                        <li className="list-disc">
                            Donation Price: 5 Matic
                        </li>
                        <li className="list-disc">
                            SBT Mint: Yes
                        </li>
                    </ul>
                    <motion.button
                        onClick={donateBronze}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] cursor-pointer mb-10">Become Bronze Donator</motion.button>
                </div>

                <div className="bg-[#eeecff] border-[#eeecff] rounded-3xl drop-shadow-lg flex flex-col items-center w-[30vw] h-[70vh] justify-between">
                    <img src="https://imgur.com/2R8AAo6.png" alt="" className="h-[300px]" />
                    <h3 className="text-2xl font-semibold pb-3">Gold Donator</h3>
                    <ul className="space-y-3">
                        <li className="list-disc">
                            Donation Price: 100 Matic
                        </li>
                        <li className="list-disc">
                            SBT Mint: Yes
                        </li>
                    </ul>
                    <motion.button
                        onClick={donateGold}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] cursor-pointer mb-10">Become Gold Donator</motion.button>
                </div>

                <div className="bg-[#eeecff] border-[#eeecff] rounded-3xl drop-shadow-lg flex flex-col items-center w-[30vw] h-[70vh] justify-between">
                    <img src="https://imgur.com/zFLNG6f.png" alt="" className="h-[300px]" />
                    <h3 className="text-2xl font-semibold pb-3">Silver Donator</h3>
                    <ul className="space-y-3">
                        <li className="list-disc">
                            Donation Price: 50 Matic
                        </li>
                        <li className="list-disc">
                            SBT Mint: Yes
                        </li>
                    </ul>
                    <motion.button
                        onClick={donateSilver}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] cursor-pointer mb-10">Become Silver Donator</motion.button>
                </div>
            </div>

            {/* For Mobile and Tablet only */}
            <div className="lg:hidden flex flex-col space-y-5">

                <div className="bg-[#eeecff] border-[#eeecff] rounded-xl drop-shadow-md flex items-center w-[90vw] h-[25vh] justify-between md:p-10 p-2">
                    <img src="https://imgur.com/2R8AAo6.png" alt="" className="w-[100px] md:w-[200px]" />
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold pb-3">Gold Donator</h3>
                        <ul className="space-y-3">
                            <li className="list-disc">
                                Donation Price: 100 Matic
                            </li>
                            <li className="list-disc">
                                SBT Mint: Yes
                            </li>
                        </ul>
                        <motion.button
                            onClick={donateGold}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-md md:text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] cursor-pointer mt-5">Become Gold Donator</motion.button>
                    </div>
                </div>

                <div className="bg-[#eeecff] border-[#eeecff] rounded-xl drop-shadow-md flex items-center w-[90vw] h-[25vh] justify-between md:p-10 p-2">
                    <img src="https://imgur.com/zFLNG6f.png" alt="" className="w-[100px] md:w-[200px]" />
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold pb-3">Silver Donator</h3>
                        <ul className="space-y-3">
                            <li className="list-disc">
                                Donation Price: 50 Matic
                            </li>
                            <li className="list-disc">
                                SBT Mint: Yes
                            </li>
                        </ul>
                        <motion.button
                            onClick={donateSilver}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-md md:text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] cursor-pointer mt-5">Become Silver Donator</motion.button>
                    </div>
                </div>

                <div className="bg-[#eeecff] border-[#eeecff] rounded-xl drop-shadow-md flex items-center w-[90vw] h-[25vh] justify-between md:p-10 p-2">
                    <img src="https://imgur.com/hcme2tO.png" alt="" className="w-[100px] md:w-[200px]" />
                    <div>
                        <h3 className="text-xl md:text-2xl font-semibold pb-3">Bronze Donator</h3>
                        <ul className="space-y-3">
                            <li className="list-disc">
                                Donation Price: 5 Matic
                            </li>
                            <li className="list-disc">
                                SBT Mint: Yes
                            </li>
                        </ul>
                        <motion.button
                            onClick={donateBronze}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-md md:text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] cursor-pointer mt-5">Become Bronze Donator</motion.button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Donation