// import { useRef, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
// import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import TextBlock from './components/TextBlock'

function App() {
  return (
    <main>
      <section className='bg-background' id='hero'>
        {/* Navbar Section */}
        <Navbar />

        {/* parallax section */}
        <Parallax />

        {/* Textsection */}
        <TextBlock />
      </section>

      {/* Card Stack section */}
      <Card />

      {/* Footer Section */}
      
      <Footer />

    </main>
  )
}

export default App
