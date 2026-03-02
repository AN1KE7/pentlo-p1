import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Lander from './pages/marketing/LandingPage'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './pages/auth/SignIn'
import MarketingLayout from './layouts/MarketingLayout'
import ProtectedRoute from './routes/ProtectedRoute'


function PlaceholderPage({ title, description }) {
  return (
    <section className="relative z-10 w-full min-h-screen flex items-center justify-center px-5">
      <div className="glass-nav rounded-3xl px-8 py-10 text-center max-w-xl">
        <h1 className="text-4xl sm:text-5xl text-black font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 text-black/70 text-base sm:text-lg">{description}</p>
      </div>
    </section>
  )
}

function App() {
  return (
    <Routes>
      {/* ── Marketing (public) ── */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Lander />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      {/* ── Auth ── */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
      </Route>

      {/* ── Dashboard (protected) ── */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <PlaceholderPage title="Dashboard" description="Welcome to your Pentlo dashboard." />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard/create"
        element={
          <ProtectedRoute>
            <PlaceholderPage title="Create Event" description="Create a new event for your audience." />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
