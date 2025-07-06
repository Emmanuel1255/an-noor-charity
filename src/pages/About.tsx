import { Hero as AboutHero } from '@/components/sections/about/AboutHero'
import { Location } from '@/components/sections/about/Location'
import { Mission } from '@/components/sections/about/Mission'
import { Values } from '@/components/sections/about/Values'
import { Leadership } from '@/components/sections/about/Leadership'
import { Governance } from '@/components/sections/about/Governance'

export function About() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Values />
      <Leadership />
      <Governance />
      <Location />
    </>
  )
}