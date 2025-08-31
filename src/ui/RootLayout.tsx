import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
