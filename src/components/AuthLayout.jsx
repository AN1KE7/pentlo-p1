import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Pentlo glow background — fixed, full-screen */}
      <div className="fixed inset-0 w-screen h-screen pointer-events-none flex items-center justify-center">
        <div className="pentlo-glow w-[150vmax] h-[150vmax] opacity-50" />
      </div>

      {/* Auth content — centered */}
      <Outlet />
    </main>
  )
}
