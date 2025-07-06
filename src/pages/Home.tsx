import { Hero } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/AboutSection'
import { ProgramsOverview } from '@/components/sections/programs/ProgramsOverview'

export function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProgramsOverview />
    </>
  )
}