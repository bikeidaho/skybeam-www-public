export default function ForHosts() {
  const perks = [
    ['Simple setup', 'Five-minute setup for check‑in desks, vendors, and staff Wi‑Fi.'],
    ['Point of sale ready', 'Stable connectivity for POS terminals and kiosks.'],
    ['Flexible plans', 'Day, weekend, and weekly options—nonprofit pricing available.'],
    ['Local support', 'We deliver, set up, and stand by for questions.'],
  ]
  return (
    <main className="container-narrow py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold">For hosts & organizers</h1>
      <p className="mt-3 text-white/70 max-w-2xl">Pop‑ups, markets, races, retreats—get dependable internet where and when you need it.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {perks.map(([t,d]) => (
          <div key={t} className="card p-6">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-sm text-white/70 mt-1">{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 card p-8">
        <h3 className="text-2xl font-bold">Event bundles</h3>
        <p className="text-white/70">Ask about multi‑unit bundles, on‑site setup, and standby support during your event.</p>
      </div>
    </main>
  )
}
