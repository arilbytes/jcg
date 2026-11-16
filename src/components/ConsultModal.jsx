import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

// Paste your endpoint here (Formspree, Google Apps Script, your API...).
// Leave empty to just log the data and show the success screen.
const SUBMIT_URL = ''

const STATES = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat','Haryana',
  'Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra','Manipur',
  'Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',
  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal',
  'Andaman and Nicobar Islands','Chandigarh','Dadra and Nagar Haveli and Daman and Diu','Delhi',
  'Jammu and Kashmir','Ladakh','Lakshadweep','Puducherry',
]

const initial = { name: '', phone: '', email: '', state: '', city: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name'
  if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Enter a valid email address'
  if (!v.state) e.state = 'Please select your state'
  if (v.city.trim().length < 2) e.city = 'Please enter your city'
  return e
}

export default function ConsultModal({ onClose }) {
  const [v, setV] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | done | error
  const first = useRef(null)

  useEffect(() => {
    first.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const set = (k) => (e) => {
    let val = e.target.value
    if (k === 'phone') val = val.replace(/\D/g, '').slice(0, 10)
    setV((s) => ({ ...s, [k]: val }))
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }))
  }

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    try {
      const payload = { ...v, phone: '+91' + v.phone, name: v.name.trim(), city: v.city.trim() }
      if (SUBMIT_URL) {
        const res = await fetch(SUBMIT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        console.log('Consultation request:', payload)
      }
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const field = (id, label, input, err) => (
    <div className={`field ${err ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {input}
      {err && <span className="err" role="alert">{err}</span>}
    </div>
  )

  return (
    <div className="modal-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="consult-title">
        <button className="modal-close" onClick={onClose} aria-label="Close form">×</button>

        {status === 'done' ? (
          <div className="modal-done">
            <span className="done-tick"><Icon name="check" size={32} /></span>
            <h2>Thank you, <em>{v.name.trim().split(' ')[0]}</em>!</h2>
            <p>Our counsellor will contact you shortly on +91 {v.phone}.</p>
            <button className="btn btn-cta" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <p className="pill modal-pill">Free consultation</p>
            <h2 id="consult-title">Start your <em>global</em> journey</h2>
            <p className="modal-sub">Share your details and our experts will get in touch with you.</p>

            <form onSubmit={submit} noValidate>
              {field('f-name', 'Full name',
                <input id="f-name" ref={first} type="text" autoComplete="name" placeholder="e.g. Aarav Sharma"
                  value={v.name} onChange={set('name')} />, errors.name)}

              {field('f-phone', 'Indian mobile number',
                <div className="phone-wrap">
                  <span className="prefix">🇮🇳 +91</span>
                  <input id="f-phone" type="tel" inputMode="numeric" autoComplete="tel-national"
                    placeholder="98765 43210" value={v.phone} onChange={set('phone')} />
                </div>, errors.phone)}

              {field('f-email', 'Email address',
                <input id="f-email" type="email" autoComplete="email" placeholder="you@example.com"
                  value={v.email} onChange={set('email')} />, errors.email)}

              <div className="field-row">
                {field('f-state', 'Current state',
                  <select id="f-state" value={v.state} onChange={set('state')} autoComplete="address-level1">
                    <option value="">Select state</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>, errors.state)}

                {field('f-city', 'Current city',
                  <input id="f-city" type="text" autoComplete="address-level2" placeholder="e.g. New Delhi"
                    value={v.city} onChange={set('city')} />, errors.city)}
              </div>

              {status === 'error' && (
                <p className="form-error" role="alert">Something went wrong. Please try again or message us on WhatsApp.</p>
              )}

              <button type="submit" className="btn btn-cta submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Book my free consultation <Icon name="arrow" size={18} /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
