import React, { useEffect, useRef } from 'react'
import { testimonials } from '../testimonials'

// import { motion, useScroll, useTransform } from 'framer-motion'

function TextBlock() {



    return (
        <div className='text-center p-10 w-full min-h-screen flex justify-between gap-8' id="textblock">

            {/* Card Slider section */}

            <div className='flex-1 grid place-items-center gap-10 p-2 bg-red-300' id="testimonials">
                <p className='uppercase text-2xl text-slate-300 font-semibold mb-3'>my Team</p>
                {
                    testimonials.map((testimonial, index) => {
                        return (
                            <div key={index} className='flex flex-col h-72 w-64 bg-slate-300 drop-shadow-xl rounded-2xl text-gray-950'>
                                <h2 className='flex-1 px-4 py-2 text-lg text-left'>"{testimonial.description}"</h2>
                                <div className="flex-1 flex items-center gap-2 px-4 text-left">
                                    <img className='w-20 h-20 rounded-full bg-red-500' src={testimonial.src} alt="not-found" />
                                    <p className='font-semibold text-lg'>{testimonial.name} <br /> <span className='text-sm font-light'>"{testimonial.place}"</span></p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            {/* Text section */}

            <div className='flex-1 leading-relaxed' id='text'>
                <p className='font-semibold text-lg'>Plan a trip now</p>
                <p className='uppercase text-4xl font-bold mb-3'>Welcome Earthly species!</p>
                <p className='text-slate-200'> I am Loki, God of Mischief <span>MULTIVERSE</span> <br />
                    Want to go on an adventure trip & explore the Multiverse?
                    <br />Choose from my fleet of vehicles & let the fun begin!
                </p>
                <p className='text-xl font-semibold mt-8'>
                    <span>24/7</span> support (across <span>Galaxies</span>) | Reliable Vehicles | Cross Galaxy Drive
                </p>
            </div>
        </div>
    )
}

export default TextBlock