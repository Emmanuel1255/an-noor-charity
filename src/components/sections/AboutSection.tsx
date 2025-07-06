import { Link } from 'react-router-dom'
import { CheckCircle, Heart, Users, BookOpen, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

const features = [
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'Providing help with genuine care and Islamic values at the heart of everything we do.',
  },
  {
    icon: Users,
    title: 'Community Focused',
    description: 'Working directly with communities to understand their needs and provide sustainable solutions.',
  },
  {
    icon: BookOpen,
    title: 'Transparent Operations',
    description: 'Complete transparency in our operations with regular reporting and accountability.',
  },
  {
    icon: Home,
    title: 'Local Impact',
    description: 'Making a real difference in local communities while maintaining global perspective.',
  },
]

const achievements = [
  { label: 'Families Supported', value: '500+' },
  { label: 'Children Educated', value: '200+' },
  { label: 'Medical Treatments', value: '150+' },
  { label: 'Emergency Responses', value: '50+' },
]

export function AboutSection() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                About An Noor Charity Foundation
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Founded on the principles of Islamic charity and compassion, An Noor Charity Foundation 
                is dedicated to serving Allah by helping those in need across our communities and beyond.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Our Mission</h3>
                  <p className="text-neutral-600">
                    To give back to society by helping those in need and acting as a continuing charity 
                    (Sadaqah Al-Jariya) that benefits our communities long-term.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Islamic Values</h3>
                  <p className="text-neutral-600">
                    Guided by the Quran and Sunnah, we operate with complete transparency, 
                    accountability, and genuine care for those we serve.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Global Reach</h3>
                  <p className="text-neutral-600">
                    While based in Sierra Leone, our impact extends globally through partnerships 
                    and direct aid programs in multiple countries.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-neutral-200">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg">
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}