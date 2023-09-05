import React from 'react'

const About = () => {
    return (
        <div name='about' className="flex flex-col lg:flex-row items-center justify-center w-full h-screen p-5 bg-[#F9F3EE]">
            <div className="p-5 lg:w-[40vw]">
                <img src="https://imgur.com/GwwrX0a.png" alt="About Us Image" />
            </div>
            <div className="lg:w-[60vw] lg:h-[60vh] flex flex-col items-center justify-center space-y-2 lg:space-y-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 underline">About Us</h2>
                <p className="text-lg lg:text-xl py-2 px-5 text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsa ullam omnis minus soluta esse vitae, qui, quo, impedit beatae fugit voluptatibus. Hic quod explicabo molestias porro amet labore magnam temporibus ullam voluptatem tenetur, repellat dolor, officiis blanditiis quas similique veritatis autem expedita cupiditate, adipisci nulla culpa numquam! Repellendus, necessitatibus.</p>
            </div>
        </div>
    )
}

export default About