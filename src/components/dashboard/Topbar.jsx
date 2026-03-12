import ProfileDropdown from './ProfileDropdown'

export default function Topbar() {
  return (
    <header
      className="h-16 shrink-0 flex items-center justify-between px-6
                 backdrop-blur-xl bg-white/10 border-b border-white/20 z-20"
    >
      {/* Search */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search events ..."
          className="w-full px-4 py-2 rounded-xl text-sm text-white placeholder-white/40
                     bg-white/10 border border-white/20 backdrop-blur-md
                     outline-none focus:ring-2 focus:ring-white/30 transition duration-200"
        />
      </div>

      {/* Profile */}
      <ProfileDropdown />
    </header>
  )
}
