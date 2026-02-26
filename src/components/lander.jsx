import HeroIllustration from '../assets/pentlo-illustration.png'

export default function Lander() {
  return (
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
          <a
            href="/create"
            className="nav-cta mt-6 md:mt-8 inline-block text-sm sm:text-base font-semibold text-white
                       px-7 py-2.5 sm:px-8 sm:py-3 rounded-full
                       transition-all duration-300
                       hover:brightness-110 hover:scale-[1.04] hover:shadow-lg hover:shadow-purple-500/25
                       active:brightness-90 active:scale-[0.97]"
          >
            Create Now
          </a>
        </div>

      </div>
    </section>
  )
}
