import { useEffect, useRef } from 'react'
import { reviews } from '../data'

const SPEED = 45 // pixels per second, raise for faster

function Card({ r, hidden }) {
  return (
    <figure className="review" aria-hidden={hidden || undefined}>
      <img className="review-img" src={r.img} alt={hidden ? '' : r.name} loading="lazy" />
      <blockquote><em>“{r.quote}”</em></blockquote>
      <figcaption>
        <b>{r.name}</b>
        <span>{r.university}, {r.country}</span>
      </figcaption>
    </figure>
  )
}

export default function Reviews() {
  const track = useRef(null)

  useEffect(() => {
    const el = track.current
    if (!el) return
    let x = 0, last = performance.now(), paused = false, raf

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!paused) {
        const half = el.scrollWidth / 2 // exactly one full set of cards
        x -= SPEED * dt
        if (half > 0 && -x >= half) x += half // seamless wrap
        el.style.transform = `translate3d(${x}px,0,0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const pause = () => { paused = true }
    const play = () => { paused = false }
    const wrap = el.parentElement
    wrap.addEventListener('mouseenter', pause)
    wrap.addEventListener('mouseleave', play)
    return () => {
      cancelAnimationFrame(raf)
      wrap.removeEventListener('mouseenter', pause)
      wrap.removeEventListener('mouseleave', play)
    }
  }, [])

  return (
    <section className="reviews" id="reviews">
      <div className="container reviews-head">
        <h2>Our upcoming <em>leaders</em></h2>
        <p>Students who started their journey with JCG and now study at top universities abroad.</p>
      </div>
      <div className="rail" aria-label="Student reviews">
        <div className="rail-track" ref={track}>
          {reviews.map((r) => <Card r={r} key={r.name} />)}
          {reviews.map((r) => <Card r={r} hidden key={r.name + '-dup'} />)}
        </div>
      </div>
    </section>
  )
}
