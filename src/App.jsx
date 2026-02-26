import './index.css'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Nav from './components/nav'
import Lander from './components/lander'
import Footer from './components/footer'

function ShellLayout() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Nav />

      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      <Outlet />

      <Footer />
    </main>
  )
}

function PlaceholderPage({ title, description }) {
  return (
    <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-5">
      <div className="glass-nav rounded-3xl px-8 py-10 text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl text-white font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-white/70 text-base sm:text-lg">{description}</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route path="/" element={<Lander />} />
        <Route
          path="/events"
          element={<PlaceholderPage title="Events" description="Events route wired with React Router." />}
        />
        <Route
          path="/calendar"
          element={<PlaceholderPage title="Calendar" description="Calendar route wired with React Router." />}
        />
        <Route
          path="/create"
          element={<PlaceholderPage title="Create" description="Create route wired with React Router." />}
        />
        <Route
          path="/signin"
          element={<PlaceholderPage title="Sign In" description="Sign-in route wired with React Router." />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
