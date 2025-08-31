import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import RootLayout from './ui/RootLayout'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Safety from './pages/Safety'
import ForHosts from './pages/ForHosts'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'safety', element: <Safety /> },
      { path: 'for-hosts', element: <ForHosts /> },
      { path: 'pricing', element: <Pricing /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])

const root = createRoot(document.getElementById('root')!)
root.render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>)
