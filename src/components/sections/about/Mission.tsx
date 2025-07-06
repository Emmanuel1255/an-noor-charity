import { Target, Heart, Globe, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const objectives = [
  {
    icon: Heart,
    title: 'Give Back to Society',
    description: 'To give back to society by helping those in need, providing immediate relief and long-term support to vulnerable communities.',
    details: [
      'Emergency relief for families in crisis',
      'Healthcare support for those without access',
      'Educational assistance for underprivileged children',
      'Community development programs'
    ]
  },
  {
    icon: Globe,
    title: 'Continuing Charity (Sadaqah Al-Jariya)',
    description: 'To act as a continuing charity that benefits communities long after the initial investment, creating sustainable positive change.',
    details: [
      'Building infrastructure that serves communities',
      'Educational programs with lasting impact',
      'Skills training for economic empowerment',
      'Sustainable development initiatives'
    ]
  }
]

const principles = [
  'Compassion and mercy in all our actions',
  'Justice and fairness in resource distribution',
  'Transparency in operations and finances',
  'Accountability to donors and beneficiaries',
  'Respect for human dignity regardless of background',
  'Sustainable solutions for long-term impact'
]

export function Mission() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Mission Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Mission & Objectives
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            As outlined in our constitution, An Noor Charity Foundation is built on clear objectives 
            that guide our work and ensure we remain true to our Islamic principles.
          </p>
        </div>

        {/* Objectives */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {objectives.map((objective, index) => (
            <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <objective.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {objective.title}
                  </h3>
                </div>
                
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {objective.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-neutral-900">How We Achieve This:</h4>
                  <ul className="space-y-2">
                    {objective.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-600 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Islamic Principles */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                Our Guiding Principles
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Every action we take is guided by Islamic principles that ensure we serve 
                with integrity, compassion, and accountability.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-neutral-700">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Constitutional Foundation */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Constitutional Foundation
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Our mission and objectives are formally established in our constitution, 
              ensuring transparency, accountability, and adherence to our founding principles. 
              This constitutional framework guides our governance, operations, and decision-making processes.
            </p>
            <div className="text-sm text-neutral-500">
              <strong>Location:</strong> 41 Goderich Street, Freetown, Sierra Leone<br />
              <strong>Membership:</strong> Open to Muslims worldwide and approved organizations
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}