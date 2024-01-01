import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Parallax from './components/Parallax'
import TextBlock from './components/TextBlock'

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
