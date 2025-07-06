import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProgramsSection } from '@/components/sections/ProgramsSection'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProgramsSection />
    </>
  )
}