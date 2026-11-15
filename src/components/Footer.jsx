import Logo from './Logo'
import { navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <Logo />
        <nav aria-label="Footer">
          {navLinks.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>
        <p>© {new Date().getFullYear()} Journey Consulting Group. All rights reserved.</p>
      </div>
    </footer>
  )
}
