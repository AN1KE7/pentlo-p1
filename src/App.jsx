import { useState } from 'react'
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import './index.css'
import Nav from './components/nav'
import Lander from './components/lander'
import Footer from './components/footer'
import AuthLayout from './components/AuthLayout'
import AuthModal from './components/AuthModal'
import SignIn from './components/SignIn'

function MarketingLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [pendingPath, setPendingPath] = useState(null)

  const handleProtectedClick = (path) => {
    if (user) {
      navigate(path)
    } else {
      setPendingPath(path)
      setShowAuthModal(true)
    }
  }

  const handleAuthSuccess = () => {
    setShowAuthModal(false)
    if (pendingPath) {
      navigate(pendingPath)
      setPendingPath(null)
    }
  }

  const handleModalClose = () => {
    setShowAuthModal(false)
    setPendingPath(null)
  }

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <Nav onProtectedClick={handleProtectedClick} />

      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      <Outlet context={{ onProtectedClick: handleProtectedClick }} />

      <Footer />

      <AuthModal
        isOpen={showAuthModal}
        onClose={handleModalClose}
        onSuccess={handleAuthSuccess}
      />
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
      <Route element={<MarketingLayout />}>
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
