import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { Footer } from '../components/sections/Footer'
import { CursorGlow } from '../components/ui/CursorGlow'

interface PageLayoutProps {
  children: React.ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="bg-[#0f172a] text-white min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
