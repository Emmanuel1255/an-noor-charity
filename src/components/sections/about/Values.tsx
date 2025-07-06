import { Heart, Scale, Eye, Users, Globe, BookOpen } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const islamicValues = [
  {
    icon: Heart,
    title: 'Compassion (Rahmah)',
    arabic: 'رحمة',
    description: 'We approach every situation with genuine care and mercy, treating all people with dignity and kindness.',
    verse: '"And We made from them leaders guiding by Our command when they were patient and were certain of Our signs." - Quran 32:24'
  },
  {
    icon: Scale,
    title: 'Justice (Adl)',
    arabic: 'عدل',
    description: 'Fair distribution of resources and equal treatment regardless of background, ensuring no one is left behind.',
    verse: '"O you who believe! Stand out firmly for justice, as witnesses to Allah..." - Quran 4:135'
  },
  {
    icon: Eye,
    title: 'Transparency (Wuduh)',
    arabic: 'وضوح',
    description: 'Complete openness in our operations, finances, and decision-making processes with full accountability.',
    verse: '"And it is He who created the heavens and earth in truth. And the day He says, \'Be,\' and it is..." - Quran 6:73'
  },
  {
    icon: Users,
    title: 'Trust (Amanah)',
    arabic: 'أمانة',
    description: 'Being trustworthy stewards of the resources entrusted to us by donors and the community.',
    verse: '"Indeed, Allah commands you to render trusts to whom they are due..." - Quran 4:58'
  },
  {
    icon: Globe,
    title: 'Unity (Wahda)',
    arabic: 'وحدة',
    description: 'Working together across boundaries to serve humanity, promoting understanding and cooperation.',
    verse: '"And hold firmly to the rope of Allah all together and do not become divided." - Quran 3:103'
  },
  {
    icon: BookOpen,
    title: 'Knowledge (Ilm)',
    arabic: 'علم',
    description: 'Pursuing knowledge and education as fundamental tools for empowerment and development.',
    verse: '"And say, \'My Lord, increase me in knowledge.\'" - Quran 20:114'
  }
]

const operationalPrinciples = [
  {
    title: 'Community-Centered Approach',
    description: 'We work with communities, not for them, ensuring local ownership and sustainable solutions.',
    icon: '🤝'
  },
  {
    title: 'Dignity Preservation',
    description: 'Every person we serve is treated with respect and dignity, maintaining their self-worth throughout the process.',
    icon: '🌟'
  },
  {
    title: 'Sustainable Impact',
    description: 'We focus on long-term solutions that continue to benefit communities well beyond our initial intervention.',
    icon: '🌱'
  },
  {
    title: 'Cultural Sensitivity',
    description: 'Respecting local customs, traditions, and beliefs while delivering aid and support.',
    icon: '🌍'
  },
  {
    title: 'Innovation & Excellence',
    description: 'Continuously improving our methods and seeking innovative solutions to complex challenges.',
    icon: '💡'
  },
  {
    title: 'Collaborative Spirit',
    description: 'Working with other organizations, governments, and stakeholders to maximize positive impact.',
    icon: '🤲'
  }
]

export function Values() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Islamic Values & Principles
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Every action we take is guided by timeless Islamic principles that shape 
            our character, operations, and commitment to serving humanity.
          </p>
        </div>

        {/* Islamic Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {islamicValues.map((value, index) => (
            <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-2xl font-arabic text-primary-600">
                    {value.arabic}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {value.description}
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-600">
                  <p className="text-primary-700 text-xs leading-relaxed italic">
                    {value.verse}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operational Principles */}
        {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              How We Apply These Values
            </h3>
            <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Our Islamic values translate into practical principles that guide our 
              daily operations and interactions with the communities we serve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operationalPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6 border border-primary-100">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{principle.icon}</div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Islamic Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="text-3xl md:text-4xl font-medium text-accent-300">
                "إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ"
              </div>
              <div className="text-xl md:text-2xl text-accent-300">
                "The believers are but brothers"
              </div>
              <div className="text-blue-200">
                Quran 49:10
              </div>
              <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
                This verse embodies our commitment to treating all people as family, 
                extending care, support, and love to those in need regardless of their background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}