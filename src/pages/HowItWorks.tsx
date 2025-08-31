export default function HowItWorks() {
  const steps = [
    ['Reserve', 'Pick your dates and we’ll confirm availability and pickup/delivery options.'],
    ['Pick up / delivery', 'Grab locally or have a kit delivered to you.'],
    ['Power + point', 'Power on and place with a clear view of the open sky.'],
    ['Connect', 'Join the Wi‑Fi on the case label. Scan QR for quick help and FAQs.'],
    ['Return', 'Drop off or schedule pickup.'],
  ]
  return (
    <main className="container-narrow py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold">How it works</h1>
      <p className="mt-3 text-white/70 max-w-2xl">Simple, reliable, and designed for non‑technical users.</p>
      <ol className="mt-8 space-y-4">
        {steps.map(([t,d], i) => (
          <li key={i} className="card p-6">
            <div className="text-sm text-white/60">Step {i+1}</div>
            <div className="mt-1 font-semibold">{t}</div>
            <p className="text-sm text-white/70">{d}</p>
          </li>
        ))}
      </ol>
    </main>
  )
}
