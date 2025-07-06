import { Link } from 'react-router-dom'
import { ArrowRight, Heart, GraduationCap, Stethoscope, Home, Users, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const programs = [
  {
    icon: Heart,
    title: 'Emergency Relief',
    description: 'Immediate assistance for families facing crisis situations, natural disasters, and urgent needs.',
    beneficiaries: '150+ families',
    status: 'Active',
    color: 'bg-red-100 text-red-600',
  },
  {
    icon: GraduationCap,
    title: 'Education Support',
    description: 'School fees, supplies, and scholarships to ensure children can access quality education.',
    beneficiaries: '200+ students',
    status: 'Active',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare Access',
    description: 'Medical treatments, health screenings, and support for families with medical needs.',
    beneficiaries: '100+ patients',
    status: 'Active',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Home,
    title: 'Orphan Care',
    description: 'Comprehensive support for orphaned children including housing, education, and emotional care.',
    beneficiaries: '50+ children',
    status: 'Active',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Long-term projects that strengthen communities and create sustainable positive change.',
    beneficiaries: '10+ communities',
    status: 'Ongoing',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Droplets,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean, safe drinking water through well construction and maintenance.',
    beneficiaries: '500+ people',
    status: 'Planned',
    color: 'bg-cyan-100 text-cyan-600',
  },
]

export function ProgramsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Our Programs & Impact
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Through our diverse programs, we address the most pressing needs in our communities, 
            guided by Islamic principles of justice, compassion, and service to humanity.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${program.color}`}>
                    <program.icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    program.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : program.status === 'Ongoing'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {program.status}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-600 leading-relaxed">
                  {program.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="text-sm">
                    <span className="text-neutral-500">Beneficiaries: </span>
                    <span className="font-medium text-neutral-900">{program.beneficiaries}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-neutral-900">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Be Part of the Change
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Your support helps us expand these programs and reach more families in need. 
              Every contribution, no matter the size, makes a meaningful difference in someone's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Link to="/donate" className="flex items-center">
                  Support Our Programs
                  <Heart className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-accent-50/10 border-accent-50/30 text-neutral-900 hover:bg-white/20">
                <Link to="/programs" className="flex items-center">
                  View All Programs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}