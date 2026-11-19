import { useEffect, useRef, useState } from 'react'
import { navItems, profile } from '../data/profile'
import { ArrowUpRight, LinkedIn, Menu, X } from './ui/Icons'

const SECTION_IDS = navItems.map((item) => item.id)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 24)

      let current = ''
      for (const id of SECTION_IDS) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 160) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    const menu = menuRef.current
    menu?.querySelector('a')?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      if (menu?.contains(document.activeElement)) toggleRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 900px)')
    const onChange = (event) => {
      if (event.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header className={`site-nav ${scrolled || open ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="Judith Mitchell — back to top" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">
              JM
            </span>
            <span className="brand-text">
              <span className="brand-name">Judith Mitchell</span>
              <span className="brand-role">AWS APIs &amp; Integrations</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${active === item.id ? 'is-active' : ''}`}
                aria-current={active === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a
              className="btn btn-primary btn-sm nav-cta"
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Let&rsquo;s connect
              <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className="nav-toggle"
              ref={toggleRef}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div
            className="menu-scrim"
            onClick={() => {
              setOpen(false)
              toggleRef.current?.focus()
            }}
            aria-hidden="true"
          />
          <div className="mobile-menu" id="mobile-menu" ref={menuRef}>
            <nav aria-label="Mobile">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="mobile-link"
                  onClick={() => setOpen(false)}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </nav>
            <div className="mobile-menu-foot">
              <a
                className="btn btn-primary mobile-cta"
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <LinkedIn size={17} />
                Connect on LinkedIn
              </a>
              <p>{profile.location} · {profile.workStyle}</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
