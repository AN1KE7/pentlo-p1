import './index.css'
import Nav from './components/nav'
import Lander from './components/lander'
import Footer from './components/footer'

function App() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Navbar */}
      <Nav />

      {/* Rainbow Glow Background */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      {/* Landing Hero */}
      <Lander />

      {/* Footer */}
      <Footer />

    </main>
  )
}

export default App