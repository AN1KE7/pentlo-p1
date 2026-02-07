import './index.css'

function App() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Rainbow Glow Background */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      {/* YOUR CONTENT GOES HERE */}
      <div className="relative z-10">
        {/* Build your UI here */}
      </div>

    </main>
  )
}

export default App