import { useState } from 'react'

export default function ToggleSwitch({ label, enabled, onToggle }) {
  return (
    <div className="flex items-center justify-between">
      {label && (
        <span className="text-gray-900 text-sm font-medium">{label}</span>
      )}
      <button
        type="button"
        onClick={() => onToggle(!enabled)}
        className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full
                    border border-white/20 transition-colors duration-300 ease-in-out
                    focus:outline-none focus:ring-2 focus:ring-white/30
                    ${enabled ? 'bg-purple-500/60' : 'bg-white/10'}`}
        role="switch"
        aria-checked={enabled}
      >
        <span
          className={`pointer-events-none inline-block h-5 w-5 rounded-full
                      bg-white shadow-lg transform transition-transform duration-300 ease-in-out
                      translate-y-[3px]
                      ${enabled ? 'translate-x-[22px]' : 'translate-x-[3px]'}`}
        />
      </button>
    </div>
  )
}
