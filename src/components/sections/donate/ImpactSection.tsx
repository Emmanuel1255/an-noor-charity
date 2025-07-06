import { Users, GraduationCap, Stethoscope, Home, Droplets, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const impactStats = [
  {
    icon: Users,
    amount: '$25',
    impact: 'Feeds a family of 4 for one week',
    description: 'Provides nutritious meals including rice, vegetables, protein, and cooking essentials',
    beneficiaries: '50 families helped monthly'
  },
  {
    icon: GraduationCap,
    amount: '$50',
    impact: 'School supplies for one child',
    description: 'Complete set including books, uniform, bag, and stationery for one academic year',
    beneficiaries: '200+ children supported'
  },
  {
    icon: Stethoscope,
    amount: '$100',
    impact: 'Medical treatment for one person',
    description: 'Covers consultation, basic medication, and follow-up care for common health issues',
    beneficiaries: '150+ patients treated yearly'
  },
  {
    icon: Home,
    amount: '$200',
    impact: 'Emergency shelter support',
    description: 'Temporary housing assistance including bedding, basic furniture, and utilities',
    beneficiaries: '75+ families relocated safely'
  },
  {
    icon: Droplets,
    amount: '$500',
    impact: 'Clean water access for 20 people',
    description: 'Contributes to well construction and maintenance providing safe drinking water',
    beneficiaries: 'Serving 1000+ people daily'
  },
  {
    icon: Heart,
    amount: '$1000',
    impact: 'Comprehensive family support',
    description: 'Complete assistance package covering food, education, healthcare, and housing',
    beneficiaries: '25+ families fully supported'
  }
]

const testimonials = [
  {
    name: 'Fatima A.',
    location: 'Freetown, Sierra Leone',
    quote: 'An Noor helped my children continue their education when we lost everything. Now my daughter is in university. Alhamdulillah!',
    category: 'Education Support'
  },
  {
    name: 'Ahmed M.',
    location: 'Local Community Leader',
    quote: 'The water well they built serves our entire village. Clean water has reduced diseases and improved our quality of life significantly.',
    category: 'Water Project'
  },
  {
    name: 'Khadija S.',
    location: 'Beneficiary',
    quote: 'During my husband\'s illness, An Noor covered his medical treatment. We will never forget their kindness and support.',
    category: 'Healthcare Support'
  }
]

export function ImpactSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Your Impact in Action
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            See how your donations directly transform lives and create lasting change 
            in communities that need it most.
          </p>
        </div>

        {/* Impact Calculator */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-accent-600">
                    {stat.amount}
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {stat.impact}
                  </h3>
                </div>
                
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
                
                <div className="bg-primary-50 rounded-lg p-3 border-l-4 border-primary-600">
                  <p className="text-primary-700 text-xs font-medium">
                    {stat.beneficiaries}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-12">
            Stories from Those We've Helped
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full bg-white hover-lift hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="text-4xl text-primary-200">"</div>
                    <p className="text-neutral-700 leading-relaxed italic">
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-neutral-200 pt-4">
                      <div className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.location}
                      </div>
                      <div className="text-xs text-primary-600 font-medium mt-1">
                        {testimonial.category}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Together We've Achieved
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                500+
              </div>
              <div className="text-blue-200 text-sm">
                Families Supported
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                200+
              </div>
              <div className="text-blue-200 text-sm">
                Children Educated
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                150+
              </div>
              <div className="text-blue-200 text-sm">
                Medical Treatments
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent-300 mb-2">
                10+
              </div>
              <div className="text-blue-200 text-sm">
                Countries Reached
              </div>
            </div>
          </div>
          
          <div className="mt-8 max-w-2xl mx-auto">
            <p className="text-blue-100 leading-relaxed">
              Every number represents a life touched, a family helped, and hope restored. 
              Your contribution becomes part of this growing impact, creating ripples of 
              positive change that extend far beyond what we can measure.
            </p>
          </div>
        </div>

        {/* Transparency Commitment */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Our Transparency Commitment
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We believe in complete transparency about how your donations are used. 
              Every contribution is tracked and reported, ensuring your trust is honored 
              and your impact is maximized.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-neutral-900">Financial Reports</div>
                <div className="text-neutral-600">Annual audited financial statements available to all donors</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-neutral-900">Program Updates</div>
                <div className="text-neutral-600">Regular updates on program progress and beneficiary impact</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-neutral-900">Direct Communication</div>
                <div className="text-neutral-600">Direct access to our team for questions and feedback</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}