import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <main className="container-narrow py-24">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="text-white/70 mt-2">We couldn’t find what you were looking for.</p>
      <Link to="/" className="btn-primary mt-6">Back to home</Link>
    </main>
  )
}
