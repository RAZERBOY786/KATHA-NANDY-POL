import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const handleScrollClose = () => setMenuOpen(false)
    window.addEventListener('scroll', handleScrollClose, { passive: true })
    return () => window.removeEventListener('scroll', handleScrollClose)
  }, [menuOpen])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!id) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setActiveSection('about')
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 80
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight + 1
      window.scrollTo({ top, behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? 'bg-surface/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(44,38,35,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="h-20 max-w-[1280px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        <button
          onClick={() => scrollTo(null)}
          className="flex items-center gap-3 group cursor-pointer"
          aria-label="Scroll to top"
        >
          <div className="h-8 w-8 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C59B27"/>
                  <stop offset="50%" stopColor="#E5C158"/>
                  <stop offset="100%" stopColor="#A27814"/>
                </linearGradient>
              </defs>
              <circle cx="60" cy="60" r="54" stroke="url(#goldGrad)" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.6"/>
              <circle cx="60" cy="60" r="46" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.3"/>
              <path d="M44 32 C44 48, 44 72, 44 88 M45 58 C52 50, 68 38, 76 34 C64 48, 52 58, 45 60 C54 66, 68 78, 78 88" stroke="url(#goldGrad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M36 42 C50 20, 84 22, 90 48 C94 66, 78 84, 58 92" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75"/>
              <circle cx="76" cy="34" r="3" fill="url(#goldGrad)"/>
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-headline-sm text-xl sm:text-2xl tracking-tight text-on-surface">Katha Nandy</span>
            <span className="hidden sm:block font-label-sm text-[10px] uppercase tracking-[0.14em] text-primary">Software Engineer &amp; Dancer</span>
          </div>
        </button>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`font-label-lg text-[13px] uppercase tracking-wider transition-colors ${
                activeSection === link.id
                  ? 'text-primary font-semibold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary font-label-lg text-[13px] px-6 py-2 transition-all hover:bg-secondary hover:text-on-secondary hover:-translate-y-0.5 shadow-[0_8px_20px_-4px_rgba(197,155,39,0.25)]"
          >
            Contact Me
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-surface-container-high text-on-surface font-label-lg text-[13px] px-4 py-2 transition-all hover:bg-surface-container-highest hover:text-on-surface"
          >
            Resume
          </button>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high text-on-surface transition-colors hover:bg-surface-container-highest"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile" className="xl:hidden bg-surface/95 backdrop-blur-xl border-t border-outline-variant">
          <div className="max-w-[1280px] mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-3 rounded-lg font-label-lg text-[13px] uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'text-primary font-semibold bg-primary-fixed/20'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-outline-variant mt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center rounded-full bg-primary-container text-on-primary font-label-lg text-[13px] px-6 py-3 transition-all hover:bg-secondary hover:text-on-secondary"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center rounded-full bg-surface-container-high text-on-surface font-label-lg text-[13px] px-6 py-3 transition-all hover:bg-surface-container-highest"
              >
                Resume
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
