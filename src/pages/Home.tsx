import { ArrowRight, Wifi, Zap, MapPin, Lock, Scan, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { icon: Wifi, title: 'Fast & reliable', desc: 'Strong speeds and stable connections for work, streaming, and events.' },
  { icon: MapPin, title: 'Go-anywhere kit', desc: 'Compact case with everything needed to get online in minutes.' },
  { icon: Zap, title: 'Quick setup', desc: 'Power on, point, and connect. Most locations live in under five minutes.' },
  { icon: Lock, title: 'Secure by default', desc: 'Private network, WPA2 password, and optional guest SSID.' },
  { icon: Scan, title: 'QR quick-start', desc: 'Scan the case to view setup steps, FAQs, and support.' },
  { icon: CheckCircle2, title: 'Local support', desc: 'Real humans in Central Oregon. We pick up the phone.' },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
        <div className="container-narrow py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.2em] text-xs text-teal-300/80">Portable Internet</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Internet. Anywhere. Anytime.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Rugged, portable units that bring reliable connectivity to trails, cabins, events, and job sites.
              Pick up locally or have one delivered. Simple setup. Serious speed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">Book a unit <ArrowRight className="ml-2" size={18} /></Link>
              <Link to="/how-it-works" className="btn-ghost">See how it works</Link>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/70">
              <div><div className="text-2xl font-semibold text-white">50+</div>Happy renters</div>
              <div><div className="text-2xl font-semibold text-white">5 min</div>Avg setup time</div>
              <div><div className="text-2xl font-semibold text-white">24/7</div>Support window</div>
              <div><div className="text-2xl font-semibold text-white">100%</div>Local ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-narrow py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold">Built for the real world</h2>
        <p className="mt-3 text-white/70 max-w-2xl">Portable internet kits designed for reliability on the road, on-site, and off-grid.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="card p-5 hover:bg-white/10 transition">
              <Icon className="opacity-80" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow py-12 md:py-20">
        <div className="card p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to get online?</h3>
            <p className="text-white/70">Tell us your dates and location—we’ll confirm availability fast.</p>
          </div>
          <Link to="/contact" className="btn-primary">Check availability</Link>
        </div>
      </section>
    </main>
  )
}
