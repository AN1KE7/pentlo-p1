import { Navigate, Route, Routes } from 'react-router-dom'
import './index.css'
import Lander from './pages/marketing/LandingPage'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './pages/auth/SignIn'
import MarketingLayout from './layouts/MarketingLayout'
import DashboardLayout from './layouts/DashboardLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import Dashboard from './pages/dashboard/Dashboard'
import CreateEvent from './pages/dashboard/CreateEvent'
import Events from './pages/dashboard/Events'
import Calendar from './pages/dashboard/Calendar'
import Invites from './pages/dashboard/Invites'
import Settings from './pages/dashboard/Settings'

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
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create" element={<CreateEvent />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/invites" element={<Invites />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  )
}

export default App

