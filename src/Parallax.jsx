import { React, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Parallax() {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

    const scaleTitle = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
    const scaleLoki = useTransform(scrollYProgress, [0, 1], [0.9, 1.05])

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])
    const spiderY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
    const lokiY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"])
    const bottomY = useTransform(scrollYProgress, [0.3, 1], ["0%", "-48%"])


    return (
        <div ref={ref} className="w-full h-[120vh] relative grid place-items-center overflow-hidden">

            <motion.div className='block absolute inset-0 z-0 h-[120vh]'
                style={{
                    backgroundImage: `url(./src/assets/tree-yggdrassil.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY
                }} >
            </motion.div>

            <motion.div className='block fixed z-[15] pb-[75vh]' id='title'
                style={{
                    opacity: opacity,
                    scale: scaleTitle
                }}>
                <h1 className='text-8xl font-extrabold'>LOKI'S FLEET</h1>
            </motion.div>

            <motion.div className='absolute inset-0 h-[120vh] z-10'
                style={{
                    backgroundImage: `url(./src/assets/spidert-tree.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: spiderY,
                    opacity: "28%",
                }} ></motion.div>


            <motion.div className='absolute inset-x-0 inset-y-5 z-20'
                style={{
                    backgroundImage: `url(./src/assets/intro-loki-bg.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: lokiY,
                    scale: scaleLoki
                }} ></motion.div>


            <motion.div className='absolute z-30 mt-[700px]' 
            style={{
                y: bottomY
            }}>
                <img src="./src/assets/bottom.png" alt="error" />
            </motion.div>

        </div>
    )
}

export default Parallax