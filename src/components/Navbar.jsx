import { useState } from 'react'
import Logo from './Logo'
import { navLinks } from '../data'
import { useConsult } from '../ConsultContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { openConsult } = useConsult()

  return (
    <header className="nav">
      <div className="container nav-row">
        <Logo />
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <button
            type="button"
            className="btn btn-cta nav-cta"
            onClick={() => { setOpen(false); openConsult() }}
          >
            Get free consultation
          </button>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}