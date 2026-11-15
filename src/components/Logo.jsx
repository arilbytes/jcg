import logo from '../logo.png'

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Journey Consulting Group">
      <img className="logo-png" src={logo} alt="" />
      <span className="logo-text"><b>JOURNEY</b><small>Consulting Group</small></span>
    </a>
  )
}