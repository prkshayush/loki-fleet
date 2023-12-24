// import { useRef, useState } from 'react'
import './App.css'
// import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './Navbar'
import Parallax from './Parallax'

function App() {
  return (
    <main>
      <section className='bg-background' id='hero'>
        {/* Navbar Section */}
        <Navbar />

        {/* parallax section */}
        <Parallax />

        {/* Textsection */}

        <div className='text-center p-20 w-full max-h-screen flex justify-evenly gap-8' id="textblock">
          <div className='flex-1'>
            <h2>Testimonials</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat quibusdam recusandae itaque ipsam beatae repellendus expedita veniam incidunt labore sit! Eaque, quo provident obcaecati repellat iure, consectetur at nihil aperiam soluta eum mollitia repudiandae illo numquam sit labore rem ratione similique dolore ipsa saepe atque amet. Non cum nam cupiditate?</p>
          </div>
          <div className='flex-1'>
            <p className='uppercase text-4xl font-bold'>Welcome Earthly species!</p>
            <br />Looking for a vehicle to travel & explore the Multiverse.
            <br />Well, Lucky you cause I've got a fleet of my own!

            <p>
              There's no term & conditions! <br />I know <span>everything..</span>
            </p>
          </div>
        </div>
      </section>

      <div className='w-full min-h-screen text-center bg-gradient-to-b from-background to-background-two text-gray-200' id="scaletext">
        <p className='text-5xl'>GOD of MULTIVERSE</p>
      </div>

    </main>
  )
}

export default App
