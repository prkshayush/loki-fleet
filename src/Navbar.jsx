import { React, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Navbar() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
    return (
        <motion.div style={{
            opacity: opacity
        }} ref={ref} className="fixed z-40 min-h-screen w-full px-10 py-2 flex justify-between">
            <div id="logo">
                <img src="/" alt="logo-not-found" />
            </div>
            <div id="nav">
                <ul className='flex items-center justify-between gap-5 text-xl cursor-pointer rounded-3xl backdrop-blur-3xl p-5'>
                    <li>Home</li>
                    <li>Vehicles</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>

        </motion.div>
    )
}

export default Navbar