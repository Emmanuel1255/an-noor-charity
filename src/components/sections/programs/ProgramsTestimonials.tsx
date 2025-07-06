import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const testimonials = [
  {
    id: 1,
    name: 'Aminata Koroma',
    role: 'Mother of 3, Water Wells Project Beneficiary',
    location: 'Freetown, Sierra Leone',
    image: '/api/placeholder/80/80',
    quote: 'Before An Noor built the well in our community, my children and I had to walk 2 hours each day to fetch water. Now we have clean water just 5 minutes from our home. My children can focus on their studies instead of carrying water. May Allah bless everyone who made this possible.',
    program: 'Clean Water Initiative',
    rating: 5
  },
  {
    id: 2,
    name: 'Ibrahim Sesay',
    role: 'Scholarship Recipient, Age 16',
    location: 'Bo, Sierra Leone',
    image: '/api/placeholder/80/80',
    quote: 'I thought I would never be able to continue my education after my father passed away. An Noor\'s scholarship program gave me hope again. I am now in my final year of secondary school and dream of becoming a doctor to help my community. Alhamdulillah for this opportunity.',
    program: 'Education Support',
    rating: 5
  },
  {
    id: 3,
    name: 'Fatima Bangura',
    role: 'Community Health Worker',
    location: 'Makeni, Sierra Leone',
    image: '/api/placeholder/80/80',
    quote: 'When the mobile clinic visits our village, it brings hope to so many families. My own mother received life-saving treatment for her diabetes. The medical team is professional and caring. They treat everyone with dignity regardless of their ability to pay.',
    program: 'Healthcare Access',
    rating: 5
  },
  {
    id: 4,
    name: 'Mohamed Kamara',
    role: 'Flood Relief Recipient',
    location: 'Rural Freetown',
    image: '/api/placeholder/80/80',
    quote: 'When the floods destroyed our home, we lost everything. An Noor was there within hours, providing food, shelter, and hope when we needed it most. They didn\'t just give us supplies—they helped us rebuild our lives. Their emergency response saved my family.',
    program: 'Emergency Relief',
    rating: 5
  },
  {
    id: 5,
    name: 'Aisha Turay',
    role: 'Orphan Care Center Resident, Age 14',
    location: 'Freetown, Sierra Leone',
    image: '/api/placeholder/80/80',
    quote: 'Al-Nour Center became my home when I had nowhere else to go. The staff treats us like family, and I feel safe and loved here. I\'m excelling in school and learning skills that will help me in the future. This place gave me a second chance at life.',
    program: 'Orphan Care',
    rating: 5
  },
  {
    id: 6,
    name: 'Isatu Conteh',
    role: 'Skills Training Graduate',
    location: 'Kenema, Sierra Leone',
    image: '/api/placeholder/80/80',
    quote: 'The tailoring skills I learned through An Noor\'s community development program changed my life. I now have my own shop and can support my family independently. The training was comprehensive and the ongoing support has been invaluable.',
    program: 'Community Development',
    rating: 5
  }
]

const communityFeedback = [
  {
    metric: 'Program Satisfaction',
    percentage: 96,
    description: 'of beneficiaries rate our programs as excellent or very good'
  },
  {
    metric: 'Community Trust',
    percentage: 94,
    description: 'of community leaders recommend our programs to other areas'
  },
  {
    metric: 'Long-term Impact',
    percentage: 88,
    description: 'of beneficiaries report sustained improvement after 1 year'
  }
]

export function ProgramsTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTest = testimonials[currentTestimonial]

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Stories of Hope and Change
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Hear directly from the people whose lives have been transformed through our programs. 
            These voices represent the real impact of your generous support.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-6 left-6">
                <Quote className="w-12 h-12 text-primary-200" />
              </div>
              
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-700">
                          {currentTest.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="flex-1 text-center md:text-left">
                    <blockquote className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6 italic">
                      "{currentTest.quote}"
                    </blockquote>
                    
                    <div className="space-y-2">
                      <div className="font-semibold text-neutral-900">{currentTest.name}</div>
                      <div className="text-neutral-600">{currentTest.role}</div>
                      <div className="text-sm text-neutral-500">{currentTest.location}</div>
                      <div className="flex items-center justify-center md:justify-start space-x-1 mt-2">
                        {[...Array(currentTest.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium mt-2">
                        {currentTest.program}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevTestimonial}
                    className="flex items-center space-x-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </Button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial 
                            ? 'bg-primary-600' 
                            : 'bg-neutral-300 hover:bg-neutral-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    onClick={nextTestimonial}
                    className="flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Feedback Stats */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            Community Feedback
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {communityFeedback.map((feedback, index) => (
              <Card key={index} className="text-center hover-lift hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {feedback.percentage}%
                  </div>
                  <div className="font-semibold text-neutral-900 mb-3">
                    {feedback.metric}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feedback.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div>
          <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
            More Voices from Our Community
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter((_, index) => index !== currentTestimonial).slice(0, 6).map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => setCurrentTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary-700">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-neutral-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-neutral-500">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-neutral-600 text-sm leading-relaxed mb-3 line-clamp-3">
                    "{testimonial.quote.substring(0, 120)}..."
                  </blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-primary-600 font-medium">
                      {testimonial.program}
                    </span>
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