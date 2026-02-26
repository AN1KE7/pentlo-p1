import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Events', href: '/events' },
  { label: 'Calendar', href: '/calendar' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[80%]"
    >
      <div className="glass-nav flex items-center justify-between px-3 py-2 sm:px-6 sm:py-2.5 rounded-full">
        {/* ── Left: Nav Links (desktop) ── */}
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

        {/* Mobile burger / X toggle (visible < md) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 p-2 group"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span
            className={`block w-5 h-[2px] rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white
                        ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}
          />
          <span
            className={`block w-4 h-[2px] rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white mt-[5px]
                        ${mobileOpen ? 'opacity-0 scale-0' : ''}`}
          />
          <span
            className={`block w-5 h-[2px] rounded-full bg-white/70 transition-all duration-300 group-hover:bg-white mt-[5px]
                        ${mobileOpen ? '-rotate-45 -translate-y-[8.5px]' : ''}`}
          />
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

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden mt-3 mx-2 glass-nav rounded-2xl px-5 py-4 flex flex-col gap-3"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-white/70 transition-colors duration-300 hover:text-white py-2"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
