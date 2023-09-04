"use client"
import React from 'react';
import { motion } from "framer-motion";

const Donation = () => {
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