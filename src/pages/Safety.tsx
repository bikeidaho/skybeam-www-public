export default function Safety() {
  const items = [
    ['Placement', 'Use outdoors or near windows with a clear view of open sky. Avoid overhead obstructions.'],
    ['Power', 'Use grounded outlets and keep cables dry. Do not modify power components.'],
    ['Weather', 'Kits are rugged but avoid standing water. Wipe dry before returning.'],
    ['Security', 'Use the unique WPA2 password labeled on your kit. Change SSID/password upon request.'],
    ['Support', 'Call or text us if you have questions. We’re happy to help.'],
  ]
  return (
    <main className="container-narrow py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold">Safety & best practices</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {items.map(([t,d]) => (
          <div key={t} className="card p-6">
            <h3 className="font-semibold">{t}</h3>
            <p className="text-sm text-white/70 mt-1">{d}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
