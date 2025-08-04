import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import About from './Components/About'
import Achievements from './Components/Achievements'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import Footer from './Components/footer'
function App() {

  return (
     <div className="bg-white">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
