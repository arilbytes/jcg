import Icon from './Icon'

export default function CtaBand() {
  return (
    <section className="cta" id="contact">
      <div className="container cta-row">
        <div>
          <h2>Take the first step towards a <em>global</em> future</h2>
          <p>Launch your global career today. Let's turn your study abroad dream into reality.</p>
        </div>
        <a href="mailto:info@journeyconsultinggroup.in" className="btn btn-cta">Get started today <Icon name="arrow" size={18} /></a>
      </div>
    </section>
  )
}
