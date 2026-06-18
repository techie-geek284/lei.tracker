import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { MagneticButton } from './MagneticButton'
import { scrollToSection } from '../../lib/utils'

const NAV_LINKS = [
  { label: 'Features', id: 'features', to: '/features' },
  { label: 'AI', id: 'ai', to: '/ai' },
  { label: 'Segments', id: 'segments', to: '/#segments' },
  { label: 'Pricing', id: 'pricing', to: '/pricing' },
  { label: 'How It Works', id: 'howitworks', to: '/#howitworks' },
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section detection — only on home page
  useEffect(() => {
    if (!isHome) return
    const ids = ['home', ...NAV_LINKS.map((l) => l.id)]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isHome])

  const handleNav = (id: string) => {
    setMobileOpen(false)
    if (isHome) {
      scrollToSection(id)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(id), 100)
    }
  }

  const handleNavLink = (link: typeof NAV_LINKS[0]) => {
    setMobileOpen(false)
    // If it links to a hash on home, use scroll
    if (link.to.startsWith('/#')) {
      const id = link.to.slice(2)
      handleNav(id)
    }
    // Otherwise let Link handle it
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 glass border-b border-white/10 shadow-xl shadow-black/20'
          : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-r from-brand-500 to-cyan-500 bg-clip-text text-transparent">
            FinFlow
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isHashLink = link.to.startsWith('/#')
            const isActive = isHome && active === link.id
            const linkClass =
              'relative text-sm font-medium text-slate-300 hover:text-white transition-colors group py-1'
            const underline = (
              <span
                className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-brand-500 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100 ${
                  isActive ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            )

            if (isHashLink) {
              return (
                <li key={link.id}>
                  <button onClick={() => handleNav(link.id)} className={linkClass}>
                    {link.label}
                    {underline}
                  </button>
                </li>
              )
            }
            return (
              <li key={link.id}>
                <Link to={link.to} className={linkClass}>
                  {link.label}
                  {underline}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="px-5 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors">
            Sign In
          </button>
          <MagneticButton className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-brand-500 to-brand-600 text-white glow-brand hover:from-brand-400 hover:to-brand-500 transition-colors">
            Get Started Free
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-[#0f172a] border-l border-white/10 z-50 p-6 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-white"
                >
                  <X size={26} />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isHashLink = link.to.startsWith('/#')
                  const cls =
                    'w-full text-left py-3 px-2 text-lg font-medium text-slate-200 hover:text-white border-b border-white/5'
                  if (isHashLink) {
                    return (
                      <li key={link.id}>
                        <button onClick={() => handleNav(link.id)} className={cls}>
                          {link.label}
                        </button>
                      </li>
                    )
                  }
                  return (
                    <li key={link.id}>
                      <Link
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className={`block ${cls}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <button className="w-full py-3 rounded-xl border border-white/15 text-white font-medium">
                  Sign In
                </button>
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold glow-brand">
                  Get Started Free
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
