import Icon from './Icon'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="pill">Study abroad with over 100% scholarship</p>
          <h1>Your <em>Global</em> Education Partner</h1>
          <p className="lead">Turn your dream of studying abroad into your reality. India's fastest growing B2B Ed-tech company and the only one with comprehensive IMAT preparation.</p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-cta">Book a free consultation <Icon name="arrow" size={18} /></a>
            <a href="#imat" className="btn btn-ghost">Explore IMAT classes</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="postcard pc1">
            <img className="pc-bg" src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=500&fit=crop" alt="Colosseum, Italy" />
            <span>🇮🇹</span><b>Italy</b>
          </div>
          <div className="postcard pc2">
            <img className="pc-bg" src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=400&h=500&fit=crop" alt="Lake Louise, Canada" />
            <span>🇨🇦</span><b>Canada</b>
          </div>
          <div className="postcard pc3">
            <img className="pc-bg" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=500&fit=crop" alt="Sydney Opera House, Australia" />
            <span>🇦🇺</span><b>Australia</b>
          </div>
          <svg className="route" viewBox="0 0 300 140" fill="none">
            <path d="M5 130C80 120 140 20 280 18" stroke="#DBFF00" strokeWidth="2" strokeDasharray="6 8" />
          </svg>
          <span className="plane"><Icon name="plane" size={40} /></span>
          {/* <p className="note">Launch your global career today</p> */}
        </div>
      </div>
    </section>
  )
}
