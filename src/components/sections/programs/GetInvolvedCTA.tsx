import { Heart, Users, DollarSign, Hand, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Link } from 'react-router-dom'

const involvementOptions = [
  {
    icon: DollarSign,
    title: 'Make a Donation',
    description: 'Support our programs with a one-time or recurring donation',
    action: 'Donate Now',
    link: '/donate',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    highlights: ['Any amount makes a difference', 'Tax-deductible donations', 'Choose specific programs']
  },
  {
    icon: Users,
    title: 'Become a Volunteer',
    description: 'Join our team and contribute your skills and time to our mission',
    action: 'Apply to Volunteer',
    link: '/get-involved#volunteer',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    highlights: ['Flexible scheduling', 'Skills-based opportunities', 'Local and remote options']
  },
  {
    icon: Hand,
    title: 'Partner with Us',
    description: 'Collaborate with us as an organization or business partner',
    action: 'Explore Partnerships',
    link: '/get-involved#partner',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    highlights: ['Corporate partnerships', 'NGO collaborations', 'Government partnerships']
  },
  {
    icon: Mail,
    title: 'Spread the Word',
    description: 'Help us reach more people by sharing our mission and programs',
    action: 'Share Our Story',
    link: '/get-involved#advocate',
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    highlights: ['Social media advocacy', 'Community presentations', 'Word-of-mouth support']
  }
]

const urgentNeeds = [
  {
    program: 'Emergency Flood Relief',
    amount: '$5,000',
    description: 'Support 50 families affected by recent flooding',
    urgency: 'Immediate Need',
    color: 'border-red-500'
  },
  {
    program: 'Education Scholarships',
    amount: '$3,200',
    description: 'Fund 8 more students for the next semester',
    urgency: 'This Month',
    color: 'border-blue-500'
  },
  {
    program: 'Medical Clinic Supplies',
    amount: '$2,500',
    description: 'Essential medicines for mobile health clinics',
    urgency: 'Next 2 Weeks',
    color: 'border-green-500'
  }
]

export function GetInvolvedCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Join Our Mission of Hope
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Your involvement—whether through donations, volunteering, or partnerships—helps us 
            expand our reach and deepen our impact in communities that need it most.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {involvementOptions.map((option, index) => (
            <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${option.color} mx-auto group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {option.description}
                  </p>
                </div>

                <div className={`${option.bgColor} rounded-lg p-3 space-y-1`}>
                  {option.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-xs text-neutral-600 flex items-center">
                      <ArrowRight className="w-3 h-3 mr-1 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <Button className="w-full group-hover:shadow-md transition-all" >
                  <Link to={option.link}>
                    {option.action}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Urgent Needs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Urgent Funding Needs
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {urgentNeeds.map((need, index) => (
              <Card key={index} className={`border-l-4 ${need.color} hover-lift hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full font-medium">
                      {need.urgency}
                    </span>
                    <span className="text-2xl font-bold text-primary-600">
                      {need.amount}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-neutral-900 mb-2">
                    {need.program}
                  </h4>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {need.description}
                  </p>
                  
                  <Button size="sm" className="w-full" >
                    <Link to={`/donate?program=${need.program.toLowerCase().replace(/\s+/g, '-')}`}>
                      Support This Need
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <Heart className="w-16 h-16 text-accent-300 mx-auto" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Every Action Creates Ripples of Change
              </h3>
              <p className="text-blue-100 leading-relaxed max-w-2xl mx-auto">
                When you support An Noor Charity Foundation, you're not just helping individuals—
                you're strengthening entire communities and creating lasting change that continues 
                for generations.
              </p>
            </div>

            {/* Islamic Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-xl font-medium text-accent-300 mb-2 arabic text-center">
                "مَثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ"
              </p>
              <p className="text-blue-100 text-center">
                "The example of those who spend their wealth in the way of Allah is like a seed that grows seven ears..."
              </p>
              <p className="text-blue-200 text-center text-sm mt-2">
                Quran 2:261
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="shadow-lg hover:shadow-xl transition-all"                
              >
                <Link to="/donate">
                  <Heart className="mr-2 w-5 h-5" />
                  Make a Donation
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 shadow-lg"
                
              >
                <Link to="/get-involved">
                  <Users className="mr-2 w-5 h-5" />
                  Get Involved
                </Link>
              </Button>
            </div>

            {/* Contact Information */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-blue-200 mb-4">
                Have questions about our programs or want to discuss partnership opportunities?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                <a href="mailto:info@annoorcharity.org" className="text-accent-300 hover:text-accent-200 transition-colors">
                  info@annoorcharity.org
                </a>
                <span className="hidden sm:block text-white/40">|</span>
                <a href="tel:+232XXXXXXXX" className="text-accent-300 hover:text-accent-200 transition-colors">
                  +232 XX XXX XXXX
                </a>
                <span className="hidden sm:block text-white/40">|</span>
                <span className="text-blue-200">41 Goderich Street, Freetown</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}