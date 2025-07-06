import { DonationHero } from '@/components/sections/donate/DonationHero'
import { DonationCategories } from '@/components/sections/donate/DonationCategories'
import { DonationForm } from '@/components/sections/donate/DonationForm'
import { ImpactSection } from '@/components/sections/donate/ImpactSection'
import { DonationMethods } from '@/components/sections/donate/DonationMethods'

export function Donate() {
  return (
    <>
      <DonationHero />
      <DonationCategories />
      <DonationForm />
      <ImpactSection />
      <DonationMethods />
    </>
  )
}