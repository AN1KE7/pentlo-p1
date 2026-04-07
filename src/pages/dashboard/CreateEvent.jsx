import CreateEventForm from '../../components/dashboard/CreateEventForm'

export default function CreateEvent() {
  return (
    <div className="flex-1 m-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-gray-300 z-10 overflow-y-auto">
      <div className="max-w-2xl mx-auto px-6 py-10">
        {/* Form */}
        <CreateEventForm />
      </div>
    </div>
  )
}
