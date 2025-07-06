import { TrendingUp, Users, MapPin, Calendar, Award, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const impactMetrics = [
  {
    icon: Users,
    label: 'Total Beneficiaries',
    value: '847',
    change: '+23%',
    period: 'This Year',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: MapPin,
    label: 'Communities Served',
    value: '25',
    change: '+8',
    period: 'New This Year',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Calendar,
    label: 'Active Programs',
    value: '15',
    change: '+5',
    period: 'Since Last Year',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Award,
    label: 'Success Rate',
    value: '94%',
    change: '+2%',
    period: 'Program Completion',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100'
  }
]

const yearlyImpact = [
  {
    year: '2024',
    programs: 15,
    beneficiaries: 847,
    budget: 85000,
    countries: 4
  },
  {
    year: '2023',
    programs: 12,
    beneficiaries: 620,
    budget: 62000,
    countries: 3
  },
  {
    year: '2022',
    programs: 8,
    beneficiaries: 450,
    budget: 45000,
    countries: 2
  },
  {
    year: '2021',
    programs: 5,
    beneficiaries: 280,
    budget: 28000,
    countries: 2
  }
]

const programImpactByCategory = [
  {
    category: 'Emergency Relief',
    beneficiaries: 150,
    projects: 8,
    budget: 24000,
    impact: 'Provided immediate assistance to families affected by natural disasters and crises'
  },
  {
    category: 'Education Support',
    beneficiaries: 320,
    projects: 6,
    budget: 28000,
    impact: 'Enabled children to access quality education through scholarships and school support'
  },
  {
    category: 'Healthcare Access',
    beneficiaries: 200,
    projects: 4,
    budget: 18000,
    impact: 'Delivered essential medical care and health services to underserved communities'
  },
  {
    category: 'Clean Water',
    beneficiaries: 177,
    projects: 3,
    budget: 15000,
    impact: 'Provided clean, safe drinking water access through well construction and maintenance'
  }
]

export function ProgramsImpact() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Measuring Our Impact
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Transparency and accountability are core to our mission. Here's how we're 
            making a measurable difference in the communities we serve.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <Card key={index} className="hover-lift hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-neutral-700 mb-2">
                  {metric.label}
                </div>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="w-3 h-3 text-green-600" />
                  <span className="text-green-600 text-xs font-medium">{metric.change}</span>
                  <span className="text-neutral-500 text-xs">{metric.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Yearly Growth */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Our Growth Over the Years
          </h3>
          <Card>
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 px-4 font-medium text-neutral-700">Year</th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700">Programs</th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700">Beneficiaries</th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700">Budget (USD)</th>
                      <th className="text-left py-3 px-4 font-medium text-neutral-700">Countries</th>
                    </tr>
                  </thead>
                  <tbody>
                    {yearlyImpact.map((year, index) => (
                      <tr key={year.year} className="border-b border-neutral-100 hover:bg-neutral-50">
                        <td className="py-4 px-4 font-semibold text-neutral-900">{year.year}</td>
                        <td className="py-4 px-4 text-neutral-700">{year.programs}</td>
                        <td className="py-4 px-4 text-neutral-700">{year.beneficiaries.toLocaleString()}</td>
                        <td className="py-4 px-4 text-neutral-700">${year.budget.toLocaleString()}</td>
                        <td className="py-4 px-4 text-neutral-700">{year.countries}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact by Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Impact by Program Category
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {programImpactByCategory.map((category, index) => (
              <Card key={index} className="hover-lift hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-4">
                    {category.category}
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{category.beneficiaries}</div>
                      <div className="text-xs text-neutral-600">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{category.projects}</div>
                      <div className="text-xs text-neutral-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">${(category.budget / 1000).toFixed(0)}K</div>
                      <div className="text-xs text-neutral-600">Budget</div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {category.impact}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability Focus */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heart className="w-16 h-16 text-accent-300 mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold">
              Sustainable Impact for Lasting Change
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Our focus isn't just on immediate relief—we're building sustainable solutions 
              that continue to benefit communities long after our initial intervention. 
              This approach ensures that every donation creates lasting positive change.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl font-bold text-accent-300 mb-2">85%</div>
                <div className="text-blue-200 text-sm">Programs with long-term impact</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl font-bold text-accent-300 mb-2">3 Years</div>
                <div className="text-blue-200 text-sm">Average program duration</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-2xl font-bold text-accent-300 mb-2">92%</div>
                <div className="text-blue-200 text-sm">Community satisfaction rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}