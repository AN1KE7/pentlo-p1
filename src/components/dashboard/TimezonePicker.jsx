import { useState, useRef, useEffect, useMemo } from 'react'
import moment from 'moment-timezone'

/* ── helpers ── */
function formatOffset(zone) {
  const offset = moment.tz(zone).utcOffset()
  const sign = offset >= 0 ? '+' : '-'
  const abs = Math.abs(offset)
  const h = String(Math.floor(abs / 60)).padStart(2, '0')
  const m = String(abs % 60).padStart(2, '0')
  return `GMT${sign}${h}:${m}`
}

function formatLabel(zone) {
  const city = zone.split('/').pop().replace(/_/g, ' ')
  return `${city}  (${formatOffset(zone)})`
}

function detectTimezone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (tz && moment.tz.zone(tz)) return tz
  } catch { /* ignore */ }
  return 'Asia/Kolkata'
}

/* ── component ── */
export default function TimezonePicker({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef(null)

  /* set default on mount */
  useEffect(() => {
    if (!value) onChange(detectTimezone())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /* click‑outside */
  useEffect(() => {
    function handler(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* filtered list */
  const zones = useMemo(() => {
    const all = moment.tz.names()
    if (!search.trim()) return all
    const q = search.toLowerCase()
    return all.filter(z => z.toLowerCase().includes(q))
  }, [search])

  const display = value ? formatLabel(value) : 'Select timezone'

  return (
    <div ref={containerRef} className="relative w-full">
      {/* trigger */}
      <button
        type="button"
        onClick={() => { setOpen(o => !o); setSearch('') }}
        className="w-full flex items-center justify-between gap-2
                   bg-white/10 backdrop-blur-md border border-gray-300 rounded-xl
                   px-4 py-3 text-sm text-gray-600
                   hover:bg-white/15 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-purple-400/40"
      >
        <span className="truncate">{display}</span>
        <svg
          className={`w-4 h-4 shrink-0 text-gray-400 transition-transform duration-200
                      ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* dropdown */}
      {open && (
        <div
          className="absolute left-0 mt-2 w-full max-h-80 z-[9999]
                     bg-white border border-gray-300
                     rounded-xl shadow-2xl overflow-hidden
                     flex flex-col animate-in"
        >
          {/* search */}
          <div className="p-2">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search for a timezone"
              autoFocus
              className="w-full bg-gray-100 border border-gray-300
                         rounded-lg px-3 py-2 text-sm text-gray-900
                         placeholder:text-gray-400
                         focus:outline-none focus:ring-2 focus:ring-purple-400/40"
            />
          </div>

          {/* list */}
          <ul className="overflow-y-auto flex-1 py-1 custom-scrollbar">
            {zones.length === 0 && (
              <li className="px-4 py-3 text-sm text-gray-400 text-center">
                No timezones found
              </li>
            )}
            {zones.map(zone => (
              <li
                key={zone}
                onClick={() => { onChange(zone); setOpen(false) }}
                className={`px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150
                           flex items-center justify-between
                           hover:bg-gray-100
                           ${value === zone ? 'bg-purple-50 text-purple-700 font-medium' : 'text-gray-700'}`}
              >
                <span className="truncate">
                  {zone.split('/').pop().replace(/_/g, ' ')}
                </span>
                <span className="text-xs text-gray-400 shrink-0 ml-2">
                  {formatOffset(zone)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
