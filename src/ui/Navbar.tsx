import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const link = 'opacity-80 hover:opacity-100'
  const active = 'opacity-100 underline underline-offset-8'
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="container-narrow flex h-14 items-center justify-between">
        <Link to="/" className="font-semibold tracking-wide">Skybeam</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/how-it-works" className={({isActive})=> isActive? active : link}>How it works</NavLink>
          <NavLink to="/safety" className={({isActive})=> isActive? active : link}>Safety</NavLink>
          <NavLink to="/for-hosts" className={({isActive})=> isActive? active : link}>For hosts</NavLink>
          <NavLink to="/pricing" className={({isActive})=> isActive? active : link}>Pricing</NavLink>
          <NavLink to="/faq" className={({isActive})=> isActive? active : link}>FAQ</NavLink>
          <NavLink to="/contact" className="px-3 py-1.5 rounded-xl bg-white text-gray-900 hover:shadow-soft">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
