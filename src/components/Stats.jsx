import { stats } from '../data'

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-row">
        {stats.map((s) => (
          <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
        ))}
      </div>
    </section>
  )
}
