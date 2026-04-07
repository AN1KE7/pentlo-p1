import { useState } from 'react'
import TimeBlock from './TimeBlock'
import ToggleSwitch from './ToggleSwitch'

const inputClass = `w-full bg-white/10 backdrop-blur-md border border-gray-300 rounded-xl
                    px-4 py-3 text-sm text-black
                    placeholder:text-gray-600
                    focus:outline-none focus:ring-2 focus:ring-purple-400/40
                    transition-colors duration-200`

export default function CreateEventForm() {
  const [eventName, setEventName] = useState('')
  const [startDate, setStartDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endDate, setEndDate] = useState('')
  const [endTime, setEndTime] = useState('')
  const [timezone, setTimezone] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [requireApproval, setRequireApproval] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // UI only — no backend logic
    console.log({
      eventName, startDate, startTime,
      endDate, endTime, timezone,
      location, description, requireApproval,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ── Event Name ── */}
      <div>
        <input
          type="text"
          value={eventName}
          onChange={e => setEventName(e.target.value)}
          placeholder="Event Name"
          className="w-full bg-white/10 backdrop-blur-md border border-gray-300 rounded-xl
                     px-5 py-4 text-3xl font-semibold text-gray-700
                     placeholder:text-gray-500 placeholder:text-2xl placeholder:font-semibold
                     focus:outline-none focus:ring-2 focus:ring-purple-400/40
                     transition-colors duration-200"
        />
      </div>

      {/* ── Date / Time / Timezone block ── */}
      <div className="bg-white/5 backdrop-blur-sm border border-gray-300 rounded-2xl p-5 relative z-20 overflow-visible">
        <TimeBlock
          startDate={startDate}
          startTime={startTime}
          endDate={endDate}
          endTime={endTime}
          timezone={timezone}
          onStartDateChange={setStartDate}
          onStartTimeChange={setStartTime}
          onEndDateChange={setEndDate}
          onEndTimeChange={setEndTime}
          onTimezoneChange={setTimezone}
        />
      </div>

      {/* ── Location ── */}
      <div>
        <div className="block text-gray-900 text-sm font-semibold mb-2 tracking-wide ">
          Location
        </div>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            placeholder="Add a location or virtual link"
            className={`${inputClass} pl-10`}
          />
        </div>
      </div>

      {/* ── Description ── */}
      <div>
        <div className="block text-gray-900 text-sm font-semibold mb-2 tracking-wide ">
          Description
        </div>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Tell guests what to expect…"
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* ── Require Approval ── */}
      <div className="bg-white/5 backdrop-blur-sm border border-gray-300 rounded-2xl px-5 py-4">
        <ToggleSwitch
          label="Require Approval"
          enabled={requireApproval}
          onToggle={setRequireApproval}
        />
        <p className="text-gray-600 text-xs mt-2">
          When enabled, attendees must be approved before they can join.
        </p>
      </div>

      {/* ── Create Event CTA ── */}
      <button
        type="submit"
        className="nav-cta w-full flex items-center justify-center gap-2
                   text-sm font-semibold text-white px-6 py-3.5 rounded-xl
                   transition-all duration-300
                   hover:brightness-110 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25
                   active:brightness-90 active:scale-[0.98]"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Create Event
      </button>
    </form>
  )
}
