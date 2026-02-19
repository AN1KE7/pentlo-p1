import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Events', href: '/events' },
  { label: 'Calender', href: '/calender' },
]

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[80%]"
    >
      <div className="glass-nav flex items-center justify-between px-3 py-2 sm:px-6 sm:py-2.5 rounded-full">
        {/* ── Left: Nav Links ── */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-base font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon (visible < md) */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          aria-label="Menu"
        >
          <span className="block w-5 h-[2px] rounded-full bg-white/70 transition-colors group-hover:bg-white" />
          <span className="block w-4 h-[2px] rounded-full bg-white/70 transition-colors group-hover:bg-white" />
          <span className="block w-5 h-[2px] rounded-full bg-white/70 transition-colors group-hover:bg-white" />
        </button>

        {/* ── Center: Brand ── */}
        <span className="absolute left-1/2 -translate-x-1/2 text-2xl font-bold tracking-widest text-white select-none">
          Pentlo
        </span>

        {/* ── Right: CTA ── */}
        <a
          href="/signin"
          className="nav-cta relative text-sm font-semibold text-white px-5 py-2 rounded-full transition-all duration-300
                     hover:brightness-110 hover:scale-[1.04] hover:shadow-lg hover:shadow-purple-500/25
                     active:brightness-90 active:scale-[0.97]"
        >
          Sign In
        </a>
      </div>
    </motion.nav>
  )
}
