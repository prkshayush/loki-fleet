import React, { useRef } from 'react'
import { testimonials } from '../testimonials'
import { motion, useScroll, useTransform } from 'framer-motion'


function TextBlock() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })
    const progress = useTransform(scrollYProgress, [0, 1], ["90%", "-850%"])

    return (
        <div className='text-center w-full min-h-screen flex flex-col items-center justify-between md:gap-8 gap-3 relative z-40' id="about">
 
            {/* Text section */}

            <div className='leading-relaxed p-5' id='text'>
                <p className='font-semibold md:text-lg text-xs'>Plan a trip now</p>
                <p className='uppercase md:text-5xl text-3xl font-bold mb-3'>Welcome Earthly species!</p>
                <p className='text-slate-400 md:text-xl text-xs'> Want to go on an adventure trip & explore the Multiverse?
                    <br />Choose from my fleet of vehicles & let the fun begin!
                </p>
                <p className='md:text-xl text-sm font-semibold md:mt-8 mt-5'>
                    <span>24/7</span> support (across <span>Galaxies</span>) | Reliable Vehicles | Cross Galaxy Drive
                </p>

            </div>

            
            {/* Card Slider section */}

            <div ref={ref} className='h-[200vh] w-full relative' id="mainContainer">
                <div className='sticky top-24 h-screen flex items-center overflow-hidden' id="testimonials">
                    <p className='uppercase md:text-2xl text-lg text-slate-300 font-semibold m-3'>my incredible Team</p>
                    <div className="flex gap-10">
                        {
                            testimonials.map((testimonial, index) => {
                                return (
                                    <motion.div style={{
                                        x: progress
                                    }} key={index} className='flex flex-col h-64 w-56 md:h-72 md:w-64 bg-slate-300 drop-shadow-xl rounded-2xl text-gray-950'>
                                        <h2 className='flex-1 px-4 py-2 text-base md:text-lg text-left'>"{testimonial.description}"</h2>
                                        <div className="flex-1 flex items-center gap-2 px-4 text-left">
                                            <img className='md:w-20 md:h-20 w-16 h-16 rounded-full bg-red-500' src={testimonial.src} alt="not-found" />
                                            <p className='font-semibold text-base md:text-lg'>{testimonial.name} <br /> <span className='text-sm font-extralight md:font-light'>"{testimonial.place}"</span></p>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>



                </div>
            </div>


        </div>
    )
}

export default TextBlock