import { ProgramsHero } from '@/components/sections/programs/ProgramsHero'
import { ProgramsOverview } from '@/components/sections/programs/ProgramsOverview'
import { FeaturedPrograms } from '@/components/sections/programs/FeaturedPrograms'
// import { ProgramsImpact } from '@/components/sections/programs/ProgramsImpact'
// import { ProgramsTestimonials } from '@/components/sections/programs/ProgramsTestimonials'
// import { GetInvolvedCTA } from '@/components/sections/programs/GetInvolvedCTA'

export function Programs() {
  return (
    <>
      <ProgramsHero />
      <ProgramsOverview />
      <FeaturedPrograms />
      {/* <ProgramsImpact /> */}
      {/* <ProgramsTestimonials /> */}
      {/* <GetInvolvedCTA /> */}
    </>
  )
}