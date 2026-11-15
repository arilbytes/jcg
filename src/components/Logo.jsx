export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Journey Consulting Group">
      <img className="logo-png" src="/src/logo.png" alt="" />
      {/* <svg width="40" height="34" viewBox="0 0 40 34" fill="none" aria-hidden="true">
        <path d="M2 2l15 15L2 32" stroke="#214B93" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 2l15 15-15 15" stroke="#DBFF00" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </svg> */}
      <span className="logo-text"><b>JOURNEY</b><small>Consulting Group</small></span>
    </a>
  )
}
