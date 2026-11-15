import Icon from './Icon'
import { features } from '../data'

export default function Features() {
  return (
    <section className="container features" aria-label="Highlights">
      {features.map((f) => (
        <div className="feature" key={f.title + f.sub}>
          <span className="icon-wrap"><Icon name={f.icon} size={30} /></span>
          <p><b>{f.title}</b><br />{f.sub}</p>
        </div>
      ))}
    </section>
  )
}
