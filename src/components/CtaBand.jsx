import Icon from './Icon'
import { useConsult } from '../ConsultContext'

export default function CtaBand() {
  const { openConsult } = useConsult()
  return (
    <section className="cta" id="contact">
      <div className="container cta-row">
        <div>
          <h2>Take the first step towards a <em>global</em> future</h2>
          <p>Launch your global career today. Let's turn your study abroad dream into reality.</p>
        </div>
        <button type="button" className="btn btn-cta" onClick={openConsult}>
          Get started today <Icon name="arrow" size={18} />
        </button>
      </div>
    </section>
  )
}