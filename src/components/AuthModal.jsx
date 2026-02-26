import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

export default function AuthModal({ isOpen, onClose, onSuccess }) {
  const { login } = useAuth()

  if (!isOpen) return null

  const handleGoogleSignIn = () => {
    login()
    onSuccess?.()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-5"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 glass-card w-full max-w-[420px] rounded-3xl px-8 py-10 text-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-5 text-white/40 hover:text-white text-2xl
                         transition-colors duration-200 cursor-pointer leading-none"
              aria-label="Close"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl text-white font-semibold tracking-tight">
              Welcome to Pentlo
            </h2>

            {/* Subtitle */}
            <p className="mt-3 text-white/60 text-base">
              Sign in to continue
            </p>

            {/* Google Sign-In Button */}
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="mt-8 w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-medium text-sm
                         rounded-xl px-5 py-3.5 cursor-pointer
                         transition-all duration-200 ease-out
                         hover:scale-[1.02] hover:shadow-lg
                         active:scale-[0.98]"
            >
              {/* Google "G" Icon */}
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 0 1 0-9.18l-7.98-6.19a24.04 24.04 0 0 0 0 21.56l7.98-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Sign in with Google
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
