import { AlertTriangle, GraduationCap, Home, Users, Droplets } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const programCategories = [
  {
    icon: Droplets,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean, safe drinking water and sanitation facilities',
    programs: [
      'Water Well Construction',
      'Water System Maintenance',
      'Sanitation Projects',
    ],
    stats: {
      beneficiaries: '800+ people',
      wells: '12 wells built',
      communities: '6 communities'
    },
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200'
  },
  // {
  //   icon: Users, 
  //   title: 'Food Feeding Program (Ramadan)',
  //   description: 'Providing nutritious iftar and suhoor meals to families and individuals during the holy month of Ramadan.',
  //   programs: [
  //     'Daily Iftar Meal Distribution',
  //     'Suhoor Packages for Families',
  //     'Community Ramadan Kitchens',
  //     'Food Basket Distribution'
  //   ],
  //   stats: {
  //     mealsServed: '10,000+ meals',
  //     families: '500+ families',
  //     volunteers: '120 volunteers'
  //   },
  //   color: 'from-orange-500 to-orange-600',
  //   bgColor: 'bg-orange-50',
  //   borderColor: 'border-orange-200'
  // },
  {
    icon: Users, // Optionally use a crescent or food icon if available
    title: 'Ramadan Contribution',
    description: 'Supporting the community during Ramadan through charity, food distribution, and special Ramadan programs.',
    programs: [
      'Daily Iftar Meal Distribution',
      'Suhoor Packages for Families',
      'Food Basket Distribution'
    ],
    stats: {
      beneficiaries: '2,000+ individuals',
      mealsServed: '5,000+ meals',
      familiesSupported: '400 families'
    },
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Relief',
    description: 'Immediate response to crises, natural disasters, and urgent humanitarian needs',
    programs: [
      'Disaster Response Teams',
      'Emergency Food Distribution',
      'Temporary Shelter Provision',
      'Crisis Counseling Services',
      'Medical Emergency Support'
    ],
    stats: {
      beneficiaries: '150+ families',
      responses: '23 emergencies',
      countries: '3 countries'
    },
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  {
    icon: GraduationCap,
    title: 'Islamic Education Support',
    description: 'Ensuring access to quality Islamic education and knowledge for underprivileged children',
    programs: [
      'School Fee Sponsorship',
      'Educational Supplies Distribution',
      'Scholarship Programs'
    ],
    stats: {
      beneficiaries: '320 students',
      schools: '15 schools',
      scholarships: '45 scholarships'
    },
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    icon: Home,
    title: 'Orphan Care',
    description: 'Comprehensive support for orphaned children including housing and emotional care',
    programs: [
      'Orphanage Support',
      'Foster Family Programs',
      'Educational Sponsorship'
    ],
    stats: {
      beneficiaries: '85 children',
      orphanages: '4 facilities',
      families: '12 foster families'
    },
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    icon: Users,
    title: 'Islamic Community Development',
    description: 'Fostering strong Islamic communities through mosque construction, Islamic education, and charitable initiatives.',
    programs: [
      'Mosque Construction',
      'Islamic School Establishment',
      'Qur\'an Learning',
      'Community Iftar Programs',
      'Zakat & Sadaqah Distribution'
    ],
    stats: {
      beneficiaries: '15 communities',
      projects: '30 projects',
      trainees: '250 students'
    },
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  
]

export function ProgramsOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Program Areas
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We organize our charitable work into six key areas, each designed to address 
            specific needs while contributing to overall community wellbeing and development.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programCategories.map((category, index) => (
            <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                  {category.title}
                </CardTitle>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Programs List */}
                <div>
                  <h4 className="font-medium text-neutral-900 mb-3 text-sm">Key Programs:</h4>
                  <ul className="space-y-2">
                    {category.programs.map((program, idx) => (
                      <li key={idx} className="text-neutral-600 text-xs flex items-start">
                        <span className="w-1 h-1 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                {/* <div className={`${category.bgColor} border ${category.borderColor} rounded-lg p-4`}>
                  <h4 className="font-medium text-neutral-900 mb-2 text-sm">Impact Statistics:</h4>
                  <div className="space-y-1">
                    {Object.entries(category.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-xs text-neutral-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-xs font-medium text-neutral-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Making a Difference Together
            </h3>
            <p className="text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Each program area works synergistically to create comprehensive support for 
              communities. By addressing immediate needs while building long-term capacity, 
              we ensure sustainable positive change.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">850+</div>
                <div className="text-sm text-neutral-600">Total Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">65+</div>
                <div className="text-sm text-neutral-600">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-sm text-neutral-600">Transparency</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}