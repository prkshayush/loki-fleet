import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import Lenis from '@studio-freight/lenis'
import TextBlock from './components/TextBlock'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {
  return (
    <main>
      <section className='bg-background' id='hero'>
        {/* Navbar Section */}
        <Navbar />
        <Menu />

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
