export default function FAQ() {
  const faqs = [
    ['How do I set it up?', 'Power on, point to open sky, connect to the Wi‑Fi on the case label. Setup guide is a QR scan away.'],
    ['Does it work everywhere?', 'Best performance with a clear view of the sky. We can advise on your location before booking.'],
    ['Do you deliver?', 'Yes. Local pickup and delivery options available.'],
    ['Do you provide support?', 'Absolutely. We are available for setup help and troubleshooting.'],
  ]
  return (
    <main className="container-narrow py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold">FAQ</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {faqs.map(([q,a]) => (
          <div key={q} className="card p-6">
            <h3 className="font-semibold">{q}</h3>
            <p className="mt-2 text-sm text-white/70">{a}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
