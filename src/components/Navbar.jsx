import { useState, useEffect, useRef } from 'react'

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const navMenuRef = useRef(null)

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#github-repos', label: 'GitHub' },
    { href: '#skills', label: 'Skills' },
    { href: '#fun-fact', label: 'Fun Facts' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleToggle = () => {
    setMenuOpen(prev => !prev)
  }

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  // Active nav link highlighting on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], header[id]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id'))
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav id="navbar" className="navbar" aria-label="Main navigation">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          F<span className="accent">.</span>
        </a>

        {/* Hamburger button (mobile) */}
        <button
          id="nav-toggle"
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          <span className="hamburger"></span>
        </button>

        <ul id="nav-menu" className={`nav-menu ${menuOpen ? 'open' : ''}`} ref={navMenuRef}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              id="theme-toggle"
              className="theme-toggle"
              aria-label="Toggle dark/light theme"
              onClick={toggleTheme}
            >
              <span id="theme-icon">{theme === 'dark' ? '🌙' : '☀️'}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
