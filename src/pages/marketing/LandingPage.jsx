import { useOutletContext } from 'react-router-dom'
import HeroIllustration from '../../assets/images/pentlo-illustration.png'

export default function Lander() {
  const { onProtectedClick, eventsRef, calendarRef } = useOutletContext()

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center overflow-hidden
                          px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36
                          pt-24 sm:pt-28 md:pt-0">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center md:justify-between
                        w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl
                        gap-8 sm:gap-10 md:gap-10 lg:gap-14 xl:gap-20">

          {/* ── Right: Hero Illustration ── */}
          <div className="relative flex-shrink-0 flex items-center justify-center
                          md:translate-x-6 lg:translate-x-8">
            {/* Glow backdrop */}
            <div className="absolute inset-0 -z-10 scale-[1.3]
                            bg-gradient-to-br from-[var(--color-pentlo-purple)] via-[var(--color-pentlo-blue)] to-[var(--color-pentlo-pink)]
                            rounded-full blur-[80px] opacity-10" />
            {/* Illustration */}
            <img
              src={HeroIllustration}
              alt="Pentlo — Events & Calendars Illustration"
              className="relative z-10
                         w-[400px]
                         sm:w-[480px]
                         md:w-[560px]
                         lg:w-[640px]
                         xl:w-[720px]
                         2xl:w-[800px]
                         h-auto
                         select-none pointer-events-none"
              draggable="false"
            />
          </div>

          {/* ── Left: Headline Text ── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left min-w-0">
            {/* Make */}
            <span className="hero-font-lugrasimo
                            text-xs sm:text-sm md:text-base lg:text-lg
                            font-extralight text-white/90 leading-tight tracking-wide">
              Make
            </span>
            {/* Events */}
            <span className="hero-font-alice
                            text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                            font-normal text-white leading-[0.92] tracking-tight">
              Events
            </span>
            {/* & */}
            <span className="hero-font-lugrasimo
                            text-xs sm:text-sm md:text-base lg:text-lg
                            font-extralight text-white/90 leading-tight mt-1 md:mt-2">
              &amp;
            </span>
            {/* Calendars */}
            <span className="hero-font-alice
                            text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
                            font-normal text-white leading-[0.92] tracking-tight">
              Calendars
            </span>

            {/* CTA Button */}
            <button
              onClick={() => onProtectedClick?.('/dashboard/create')}
              className="nav-cta mt-6 md:mt-8 inline-block text-sm sm:text-base font-semibold text-white
                         px-7 py-2.5 sm:px-8 sm:py-3 rounded-full cursor-pointer
                         transition-all duration-300
                         hover:brightness-110 hover:scale-[1.04] hover:shadow-lg hover:shadow-purple-500/25
                         active:brightness-90 active:scale-[0.97]"
            >
              Create Now
            </button>
          </div>

        </div>
      </section>

      {/* ── Events Section ── */}
      <section
        ref={eventsRef}
        className="relative z-10 w-full min-h-screen flex items-center justify-center
                   px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36"
      >
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="glass-nav rounded-3xl px-8 py-16 sm:py-20 text-center">
            <h2 className="hero-font-alice text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight">
              Events
            </h2>
            <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Create beautiful events, send invites, and manage RSVPs — all in one place. 
              Your audience deserves a premium experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calendar Section ── */}
      <section
        ref={calendarRef}
        className="relative z-10 w-full min-h-screen flex items-center justify-center
                   px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-36"
      >
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          <div className="glass-nav rounded-3xl px-8 py-16 sm:py-20 text-center">
            <h2 className="hero-font-alice text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight">
              Calendar
            </h2>
            <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A smart, shareable calendar that keeps your community in sync. 
              Schedule sessions, set reminders, and never miss what matters.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
