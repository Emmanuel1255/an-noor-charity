import { Users, Mail, Shield, Calculator, Megaphone, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const executivePositions = [
  {
    icon: Shield,
    title: 'Chief Executive Officer (CEO)',
    description: 'Leads the organization and appoints meeting chairs. Provides strategic direction and overall leadership.',
    responsibilities: [
      'Strategic planning and organizational leadership',
      'Appointing chairs for general meetings',
      'Representing the foundation externally',
      'Ensuring adherence to constitutional principles'
    ]
  },
  {
    icon: Users,
    title: 'General Secretary',
    description: 'Manages administrative functions, records, and coordinates organizational activities.',
    responsibilities: [
      'Maintaining member registers and records',
      'Coordinating meetings and communications',
      'Managing administrative operations',
      'Ensuring proper documentation'
    ]
  },
  {
    icon: Calculator,
    title: 'Treasurer / Financial Secretary',
    description: 'Oversees financial management, budgeting, and ensures transparent use of funds.',
    responsibilities: [
      'Financial planning and budget management',
      'Overseeing fund utilization and accounting',
      'Preparing financial reports',
      'Ensuring compliance with financial regulations'
    ]
  },
  {
    icon: Megaphone,
    title: 'Public Relations Officer',
    description: 'Manages communications, outreach, and builds relationships with stakeholders.',
    responsibilities: [
      'External communications and media relations',
      'Community outreach and engagement',
      'Marketing and promotional activities',
      'Stakeholder relationship management'
    ]
  },
  {
    icon: Search,
    title: 'Auditor',
    description: 'Ensures financial accountability and compliance with organizational policies.',
    responsibilities: [
      'Internal auditing of financial records',
      'Compliance monitoring and reporting',
      'Risk assessment and management',
      'Ensuring transparency in operations'
    ]
  }
]

const governance = [
  {
    title: 'Democratic Election',
    description: 'All executives except the CEO are elected by general membership in accordance with our constitution.'
  },
  {
    title: 'Term Limits',
    description: 'Executives serve terms and retire at the start of the second annual general meeting after appointment.'
  },
  {
    title: 'Re-election Eligible',
    description: 'Executives are eligible for re-election after their term in office, ensuring continuity and experience.'
  },
  {
    title: 'Accountability',
    description: 'Clear disqualification and removal procedures ensure executives remain accountable to the membership.'
  }
]

export function Leadership() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Leadership & Executive Structure
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Our leadership structure is defined by our constitution, ensuring democratic governance, 
            accountability, and adherence to Islamic principles in all our operations.
          </p>
        </div>

        {/* Executive Positions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Executive Committee
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executivePositions.map((position, index) => (
              <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <position.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg text-neutral-900">
                    {position.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-2 text-sm">Key Responsibilities:</h4>
                    <ul className="space-y-1">
                      {position.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-neutral-600 text-xs flex items-start">
                          <span className="w-1 h-1 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Governance Principles */}
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Governance Principles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {governance.map((principle, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h4 className="font-semibold text-accent-300 mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Constitutional Notice */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-neutral-200 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Interested in Leadership?
            </h3>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Leadership positions are filled through democratic election by our membership. 
              If you're interested in serving in an executive role, become a member and participate 
              in our annual general meetings.
            </p>
            <div className="text-sm text-neutral-500">
              <p><strong>Next AGM:</strong> To be announced</p>
              <p><strong>Membership:</strong> Open to Muslims worldwide and approved organizations</p>
              <p><strong>Contact:</strong> info@annoorcharity.org for more information</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}