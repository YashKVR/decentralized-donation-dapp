import React from 'react'

const Hero = () => {
    return (
        <div name='hero' className="flex flex-col lg:flex-row items-center justify-center w-full h-screen p-5">
            <div className="p-5 lg:w-[40vw]">
                <img src="https://imgur.com/9rKqJi7.png" alt="hero img" />
            </div>
            <div className="lg:w-[60vw] lg:h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 underline">Donation For Strays</h2>
                <p className="text-lg lg:text-xl py-2 px-5 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nisi iure repellat animi quam necessitatibus, ut eaque. Eum cum sapiente quas voluptates veritatis nostrum, in neque itaque quaerat quasi animi.</p>
                <button className="text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] m-3">Donate Now</button>
            </div>
        </div>
    )
}

export default Hero