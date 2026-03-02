# Pentlo

A premium SaaS landing page built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

---

## 📁 Project Structure

```
pentlo-p1/
├── public/
│   └── pentlo-logo.svg                 # Brand logo (SVG)
├── src/
│   ├── assets/
│   │   └── pentlo-illustration.png     # Hero illustration asset
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── Nav.jsx                 # Glassmorphism navbar with mobile menu
│   │   │   └── Footer.jsx             # Footer component
│   │   └── ui/
│   │       └── AuthModal.jsx           # Global sign-in modal overlay
│   ├── context/
│   │   └── AuthContext.jsx             # Global authentication context (login/logout)
│   ├── layouts/
│   │   ├── MarketingLayout.jsx         # Marketing pages layout (Nav + Footer + AuthModal)
│   │   └── AuthLayout.jsx              # Auth pages layout (minimal, centered)
│   ├── pages/
│   │   ├── auth/
│   │   │   └── SignIn.jsx              # Standalone sign-in page
│   │   └── marketing/
│   │       └── Lander.jsx              # Landing hero section
│   ├── routes/
│   │   └── ProtectedRoute.jsx          # Auth guard — redirects to /signin if not logged in
│   ├── App.css                         # App-level styles
│   ├── App.jsx                         # Root app component & route definitions
│   ├── index.css                       # Global styles, design tokens & custom utilities
│   └── main.jsx                        # App entry point (BrowserRouter + AuthProvider)
├── .gitignore
├── eslint.config.js                    # ESLint configuration
├── index.html                          # HTML entry point with SEO meta tags
├── package.json                        # Dependencies & scripts
├── vite.config.js                      # Vite configuration
└── README.md
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it.

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 7 | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling |
| Framer Motion | Animations & transitions |
| React Router DOM | Client-side routing |

---

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Pentlo Purple | `#6B5CFF` |
| Pentlo Blue | `#2FA4FF` |
| Pentlo Green | `#2ED9A3` |
| Pentlo Yellow | `#FFD84D` |
| Pentlo Pink | `#FF4D9D` |
