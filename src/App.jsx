import { useRef, useState } from 'react'
import './App.css'
import { motion, useScroll, useTransform } from 'framer-motion'

function App() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [1, 0])
  const lokiY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-12%", "-16%"])

  return (
    <main>

      {/* parallax section */}
      <div ref={ref} className="w-full h-[180vh] relative grid place-items-center overflow-y-auto overflow-x-hidden">
        <motion.div className='block relative z-10 pb-[125vh]' id='logo'
        style={{
          opacity: opacity,
        }}>
          <h1 className='text-9xl font-extrabold'>Loki's Fleet</h1>
        </motion.div>
        <div className='absolute inset-0 z-0'
          style={{
            backgroundImage: `url(./src/assets/tree-yggdrassil.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }} ></div>

        <motion.div className='absolute inset-0 z-20'
          style={{
            backgroundImage: `url(./src/assets/intro-loki-bg.png)`,
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: lokiY,
          }} ></motion.div>

      </div>


      <div id="textblock">
        <p>Welcome Earthly species!
          <br />Looking for a vehicle to travel & explore the Multiverse.
          <br />Well, Lucky you cause I've got a fleet of my own!
        </p>
        <p>
          There's no term & conditions! <br />I know <span>everything..</span>
        </p>
      </div>
      <div id="scaletext">
        <p>GOD of MULTIVERSE</p>
      </div>

    </main>
  )
}

export default App
