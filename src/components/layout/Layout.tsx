import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import BackToTopButton from '@/components/BackToTopButton'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  )
}