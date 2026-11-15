import Icon from './Icon'
import { imatPoints } from '../data'

export default function Imat() {
  return (
    <section className="imat" id="imat">
      <div className="container">
        <div className="imat-head" id="why">
          <h2>Why JCG for <em>IMAT</em>?</h2>
          <p>Join our IMAT classes and learn from industry experts with 30+ years of experience.</p>
        </div>
        <ul className="imat-grid">
          {imatPoints.map((p) => (
            <li key={p}><span className="tick"><Icon name="check" size={18} /></span>{p}</li>
          ))}
        </ul>
        <div className="ielts" id="ielts">
          <div>
            <h3>IELTS classes are also available</h3>
            <p>Build the English score your application needs.</p>
          </div>
          <div className="price"><small>from as low as</small><b>₹1,999</b></div>
          <a href="#contact" className="btn btn-cta">Enrol now <Icon name="arrow" size={18} /></a>
        </div>
      </div>
    </section>
  )
}
