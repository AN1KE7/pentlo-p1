import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export default function ProfileDropdown() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const firstName = user?.name?.split(' ')[0] ?? 'User'

  const handleLogout = () => {
    logout()
    setOpen(false)
    navigate('/')
  }

  return (
    <div ref={ref} className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl
                   bg-white/10 border border-gray-300 backdrop-blur-md
                   text-black font-medium text-sm
                   transition duration-200 hover:bg-white/15 hover:scale-105 cursor-pointer"
      >
        {/* Avatar circle */}
        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6B5CFF] to-[#FF4D9D] flex items-center justify-center text-xs font-bold text-white">
          {firstName[0]}
        </span>
        {firstName}
        {/* Drop arrow */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-44 rounded-xl
                     bg-white/10 border border-white backdrop-blur-xl
                     shadow-xl overflow-hidden z-50"
        >
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-3 text-sm font-medium text-black
                       bg-white cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  )
}
