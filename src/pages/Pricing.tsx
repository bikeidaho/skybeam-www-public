import { Link } from 'react-router-dom'

export default function Pricing() {
  const tiers = [
    { name: 'Day Pass', price: '$59', blurb: 'Perfect for pop‑ups and day trips.' },
    { name: 'Weekend', price: '$149', blurb: 'Friday to Monday, plug‑and‑play.' },
    { name: 'Weekly', price: '$299', blurb: 'Extended projects and travel.' },
  ]
  return (
    <main className="container-narrow py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold">Simple pricing</h1>
      <p className="mt-3 text-white/70 max-w-2xl">Transparent rates with everything included. Long‑term and nonprofit discounts available.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <div key={t.name} className="card p-6 flex flex-col">
            <div className="text-sm uppercase tracking-wide text-white/70">{t.name}</div>
            <div className="mt-2 text-4xl font-extrabold">{t.price}</div>
            <p className="mt-2 text-sm text-white/70">{t.blurb}</p>
            <Link to="/contact" className="mt-6 btn-primary">Book now</Link>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-white/60">Prices are example placeholders—edit to match your offering.</p>
    </main>
  )
}
