// import Icon from './Icon'
// import { countries } from '../data'

// export default function Destinations() {
//   return (
//     <section className="container dest" id="destinations">
//       <div className="dest-copy">
//         <h2>Explore your options <em>abroad</em></h2>
//         <p>From world-class education to better career opportunities, we help you choose the right destination and fund it with scholarships.</p>
//         <a href="#contact" className="btn btn-outline">Talk to a counsellor</a>
//       </div>
//       <div className="dest-grid">
//         {countries.map((c) => (
//           <a href="#contact" className={`country tone-${c.tone}`} key={c.name}>
//             <span className="flag">{c.flag}</span>
//             <span className="country-name">{c.name}<i><Icon name="arrow" size={16} /></i></span>
//           </a>
//         ))}
//       </div>
//     </section>
//   )
// }

import Icon from './Icon'
import { countries } from '../data'

export default function Destinations() {
  return (
    <section className="container dest" id="destinations">
      <div className="dest-copy">
        <h2>Explore your options <em>abroad</em></h2>
        <p>From world-class education to better career opportunities, we help you choose the right destination and fund it with scholarships.</p>
        <a href="#contact" className="btn btn-outline">Talk to a counsellor</a>
      </div>
      <div className="dest-grid">
        {countries.map((c) => (
          <a href="#contact" className={`country tone-${c.tone}`} key={c.name}>
            {c.img && (
              <img className="country-bg" src={c.img} alt={`${c.name} university`} loading="lazy" />
            )}
            <span className="flag">{c.flag}</span>
            <span className="country-name">{c.name}<i><Icon name="arrow" size={16} /></i></span>
          </a>
        ))}
      </div>
    </section>
  )
}
