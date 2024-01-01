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

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
    const spiderY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
    const lokiY = useTransform(scrollYProgress, [0, 1], ["2%", "-10%"])
    const bottomY = useTransform(scrollYProgress, [0.3, 1], ["0%", "-28%"])


    return (
        <div ref={ref} className="w-full md:h-[120vh] h-[75vh] relative grid place-items-center overflow-hidden">

            <motion.div className='block absolute inset-0 z-[1] md:h-[120vh] h-[65vh] '
                style={{
                    backgroundImage: `url(./src/assets/tree-yggdrassil.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY
                }} >
            </motion.div>
            <div className="block absolute inset-0 z-0 md:h-[120vh] h-[70vh]" style={{
                backgroundImage: `url(./src/assets/sacred-timeline.png)`,
                backgroundPosition: "bottom",
                backgroundSize: "cover",
                opacity: "0.7"
            }} ></div>

            <motion.div className='block fixed z-[15] top-32' id='title'
                style={{
                    opacity: opacity,
                    scale: scaleTitle
                }}>
                <h1 className='md:text-8xl text-5xl md:font-extrabold font-bold'>LOKI'S FLEET</h1>
            </motion.div>

            <motion.div className='absolute inset-0 md:h-[120vh] h-[65vh] z-10'
                style={{
                    backgroundImage: `url(./src/assets/spidert-tree.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: spiderY,
                    opacity: "0.4",
                }} ></motion.div>


            <motion.div className='absolute md:inset-x-0 md:inset-y-5 inset-0 md:h-[120vh] h-[75vh] z-20'
                style={{
                    backgroundImage: `url(./src/assets/intro-loki-bg.png)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: lokiY,
                    scale: scaleLoki
                }} ></motion.div>


            <motion.div className='absolute z-30 mt-[550px] md:mt-[700px]' 
            style={{
                y: bottomY
            }}>
                <img src="./src/assets/bottom.png" alt="error" />
            </motion.div>
            <motion.div className='absolute z-[29] mt-[500px] md:mt-[600px]' 
            style={{
                y: bottomY,
                opacity: "75%"
            }}>
                <img src="./src/assets/bottom-layer.png" alt="error" />
            </motion.div>

        </div>
    )
}

export default Parallax