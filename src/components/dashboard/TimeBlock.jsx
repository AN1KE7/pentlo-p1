import TimezonePicker from './TimezonePicker'

const inputClass = `w-full bg-white/10 backdrop-blur-md border border-gray-300 rounded-xl
                    px-4 py-3 text-sm text-gray-700
                    placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-purple-400/40
                    transition-colors duration-200`

export default function TimeBlock({
  startDate, startTime, endDate, endTime, timezone,
  onStartDateChange, onStartTimeChange,
  onEndDateChange, onEndTimeChange,
  onTimezoneChange,
}) {
  return (
    <div className="space-y-4">
      {/* Row 1 — Start */}
      <div>
        <div className="block text-gray-900 text-sm font-semibold mb-2 tracking-wide ">
          Start
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            value={startDate}
            onChange={e => onStartDateChange(e.target.value)}
            className={inputClass}
          />
          <input
            type="time"
            value={startTime}
            onChange={e => onStartTimeChange(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 — End */}
      <div>
        <div className="block text-gray-900 text-sm font-semibold mb-2 tracking-wide ">
          End
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="date"
            value={endDate}
            onChange={e => onEndDateChange(e.target.value)}
            className={inputClass}
          />
          <input
            type="time"
            value={endTime}
            onChange={e => onEndTimeChange(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3 — Timezone */}
      <div>
        <div className="block text-gray-900 text-sm font-semibold mb-2 tracking-wide ">
          Timezone
        </div>
        <TimezonePicker value={timezone} onChange={onTimezoneChange} />
      </div>
    </div>
  )
}
