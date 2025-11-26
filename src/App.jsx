import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Members from './components/Members'
import Music from './components/Music'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <Music />
      </main>
      <Footer />
    </div>
  )
}

export default App
