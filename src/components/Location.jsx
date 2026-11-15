import Icon from './Icon'
import { office } from '../data'

export default function Location() {
  return (
    <section className="location" id="visit">
      <div className="container location-grid">
        <div className="location-copy">
          <h2>Visit our <em>head office</em></h2>
          <p>{office.address}</p>
          <div className="location-actions">
            <a href={office.directionsUrl} target="_blank" rel="noreferrer" className="btn btn-cta">
              Get directions <Icon name="arrow" size={18} />
            </a>
            <a href="#contact" className="btn btn-ghost">Book a visit</a>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            title="Journey Consulting Group head office map"
            src={office.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
