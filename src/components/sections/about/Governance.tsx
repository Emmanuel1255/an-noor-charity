import { FileText, Calendar, Vote, Shield, Users } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const meetingTypes = [
  {
    icon: Calendar,
    title: 'Annual General Meeting (AGM)',
    description: 'Required within 12 months of constitution adoption, then annually with no more than 15 months between meetings.',
    frequency: 'Annual',
    purpose: 'Constitutional amendments, executive elections, major decisions'
  },
  {
    icon: Vote,
    title: 'Special General Meeting (SGM)',
    description: 'Called by executives as needed for urgent matters or specific decisions requiring membership input.',
    frequency: 'As needed',
    purpose: 'Urgent decisions, special resolutions, emergency matters'
  },
  {
    icon: Users,
    title: 'Executive Meetings',
    description: 'Regular meetings of the executive committee to manage day-to-day operations and strategic planning.',
    frequency: 'Regular',
    purpose: 'Operational decisions, program management, strategic planning'
  }
]

const financialPrinciples = [
  {
    title: 'Charitable Purpose Only',
    description: 'All income and property must be applied solely towards promoting our charitable objectives.',
    icon: '🎯'
  },
  {
    title: 'No Profit Distribution',
    description: 'No income or property may be paid to members as dividends, bonuses, or profits.',
    icon: '🚫'
  },
  {
    title: 'Expense Reimbursement',
    description: 'Executives may be reimbursed for reasonable expenses incurred on behalf of the foundation.',
    icon: '💰'
  },
  {
    title: 'Accountability',
    description: 'Full transparency required in fund utilization with executives personally liable for mismanagement.',
    icon: '⚖️'
  }
]

const constitutionalFeatures = [
  {
    icon: FileText,
    title: 'Amendment Process',
    description: 'Constitution can be amended by 2/3 majority vote at AGM or SGM with 14-day notice.',
    details: [
      'Two-thirds quorum required for constitutional changes',
      'Written notice must detail proposed amendments',
      '14-day minimum notice period',
      'No amendments that would dissolve the organization'
    ]
  },
  {
    icon: Shield,
    title: 'Dissolution Safeguards',
    description: 'Clear procedures for organizational closure protecting charitable assets.',
    details: [
      'Two-thirds majority required for dissolution',
      'All debts must be paid before closure',
      'Remaining assets go to similar non-profit organizations',
      'Cannot benefit individual members'
    ]
  },
  {
    icon: Users,
    title: 'Membership Rights',
    description: 'Open membership with clear application and termination procedures.',
    details: [
      'Open to Muslims worldwide',
      'Individual and organizational membership',
      'Fair application review process',
      'Clear termination procedures'
    ]
  }
]

export function Governance() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Governance & Constitution
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Our constitution provides the framework for transparent, accountable governance 
            rooted in Islamic principles and democratic participation.
          </p>
        </div>

        {/* Meeting Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Meeting Structure & Decision Making
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {meetingTypes.map((meeting, index) => (
              <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <meeting.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg text-neutral-900">
                    {meeting.title}
                  </CardTitle>
                  <div className="text-sm text-accent-600 font-medium">
                    {meeting.frequency}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {meeting.description}
                  </p>
                  <div className="bg-neutral-50 rounded-lg p-3">
                    <h4 className="font-medium text-neutral-900 mb-1 text-sm">Purpose:</h4>
                    <p className="text-neutral-600 text-xs">{meeting.purpose}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Governance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Financial Governance & Accountability
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {financialPrinciples.map((principle, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-6 border border-primary-100">
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
        </div>

        {/* Constitutional Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Constitutional Safeguards
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {constitutionalFeatures.map((feature, index) => (
              <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-lg text-neutral-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="text-neutral-600 text-xs flex items-start">
                          <span className="w-1 h-1 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
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