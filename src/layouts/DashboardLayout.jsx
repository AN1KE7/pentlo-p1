import { Outlet } from 'react-router-dom'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'

export default function DashboardLayout() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden">
      {/* ── Pentlo animated gradient background ── */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      {/* ── Sidebar ── */}
      <Sidebar />

      {/* ── Right column: TopBar + Content ── */}
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />
        <Outlet />
      </div>
    </div>
  )
}
