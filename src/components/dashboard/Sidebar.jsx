import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Overview',  icon: '📊', path: '/dashboard' },
  { label: 'Events',    icon: '🎉', path: '/events' },
  { label: 'Calendar',  icon: '📅', path: '/calendar' },
  { label: 'Invites',   icon: '✉️', path: '/invites' },
  { label: 'Settings',  icon: '⚙️', path: '/settings' },
]

export default function Sidebar() {
  const location = useLocation()

  return (
    <aside
      className="w-64 shrink-0 h-full flex flex-col
                 backdrop-blur-xl bg-white/10 border-r border-white/20 shadow-xl
                 py-6 px-4 z-20"
    >
      {/* Brand */}
      <Link
        to="/dashboard"
        className="text-2xl font-bold tracking-widest text-white select-none mb-10 px-2"
      >
        Pentlo
      </Link>

      {/* Create Event CTA */}
      <Link
        to="/dashboard/create"
        className="nav-cta flex items-center justify-center gap-2
                   text-sm font-semibold text-white px-5 py-3 rounded-xl
                   transition-all duration-300
                   hover:brightness-110 hover:scale-[1.04] hover:shadow-lg hover:shadow-purple-500/25
                   active:brightness-90 active:scale-[0.97]
                   mb-8"
      >
        <span className="text-lg">＋</span>
        Create Event
      </Link>

      {/* Nav Items */}
      <nav className="flex flex-col gap-1.5 flex-1">
        {navItems.map(({ label, icon, path }) => (
          <Link
            key={label}
            to={path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                        transition duration-200 cursor-pointer no-underline
                        ${
                          location.pathname === path
                            ? 'bg-white/20 text-white scale-[1.02]'
                            : 'text-white hover:bg-white/15 hover:scale-105'
                        }`}
          >
            <span className="text-base">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
