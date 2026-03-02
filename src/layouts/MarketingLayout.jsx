import { useRef, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Nav from '../components/navigation/Nav'
import Footer from '../components/navigation/Footer'
import AuthModal from '../components/ui/AuthModal'

export default function MarketingLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [pendingPath, setPendingPath] = useState(null)

  // Refs for scroll targets
  const eventsRef = useRef(null)
  const calendarRef = useRef(null)

  const handleProtectedClick = (path) => {
    if (user) {
      navigate(path)
    } else {
      setPendingPath(path)
      setShowAuthModal(true)
    }
  }

  // Programmatic smooth scroll
  const handleScroll = (section) => {
    if (section === 'events') {
      eventsRef.current?.scrollIntoView({ behavior: 'smooth' })
    } else if (section === 'calendar') {
      calendarRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleAuthSuccess = () => {
    setShowAuthModal(false)
    if (pendingPath) {
      navigate(pendingPath)
      setPendingPath(null)
    } else {
      navigate('/dashboard')
    }
  }

  const handleModalClose = () => {
    setShowAuthModal(false)
    setPendingPath(null)
  }

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden">
      <Nav onProtectedClick={handleProtectedClick} onScrollRequest={handleScroll} />

      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      <Outlet context={{ onProtectedClick: handleProtectedClick, eventsRef, calendarRef }} />

      <Footer />

      <AuthModal
        isOpen={showAuthModal}
        onClose={handleModalClose}
        onSuccess={handleAuthSuccess}
      />
    </main>
  )
}