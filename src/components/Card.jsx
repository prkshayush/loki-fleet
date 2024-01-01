import React, {useRef} from 'react'
import { vehicles } from '../vehicle-data'
import { motion, useScroll, useTransform} from 'framer-motion'

function Card() {
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'start start']
  })
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1.2, 1])
  const scaleContainer = useTransform(scrollYProgress, [0, 1], [1.1, 0.9])
  return (
    <div className='w-full min-h-screen pt-5 bg-gradient-to-b  from-background to-background-two' id="vehicles">

      { 
        vehicles.map((vehicle, index) => {
          return (
            <div ref={ref} className='grid place-items-center gap-5 text-center h-screen sticky top-10' id="cardContainer">
              <motion.div style={{
                scale: scaleContainer
              }} key={index} className="md:w-3/5 md:h-[30rem] w-[22rem] h-[22rem] flex rounded-3xl justify-center md:gap-10 md:pt-5 md:p-8 p-3 gap-3 bg-gray-900 flex-col">
                <h2 className='md:text-5xl text-2xl font-bold flex-1 uppercase mt-5' >{vehicle.title}</h2>
                <div className='flex-1 flex justify-between items-center md:gap-5 gap-2'>
                  <div className='flex-1 flex flex-col gap-2 p-2'>
                    <p className='md:font-semibold md:text-base text-sm md:text-justify text-slate-200'>{vehicle.description}</p>
                    <p className='text-left md:text-base text-sm font-light text-cyan-400'>"{vehicle.avaiability}"</p>
                    <button className='bg-red-500 text-slate-300 text-sm md:text-xl font-light md:font-semibold p-2 w-20 md:w-32 rounded-lg'>Book Now</button>
                  </div>
                  <div className='w-[30rem] md:h-56 h-40 relative flex-1 overflow-hidden drop-shadow-xl rounded-2xl'>
                    <motion.div style={{ scale: scaleImage}} className='w-full h-full' id="inner">
                      <img className='object-cover' src={vehicle.image} alt="error" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

          )
        })
      }

    </div>
  )
}

export default Card


