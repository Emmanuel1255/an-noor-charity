import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactInfo } from '@/components/sections/contact/ContactInfo'
import { Location } from '@/components/sections/about/Location'
// import { ContactForms } from '@/components/sections/contact/ContactForms'
// import { OfficeLocation } from '@/components/sections/contact/OfficeLocation'
// import { FAQ } from '@/components/sections/contact/FAQ'

export function Contact() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <Location />
      {/* <ContactForms />
      <OfficeLocation /> */}
    </>
  )
}