import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Users, Hand, Building, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

// Form schemas
const generalInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  preferredContact: z.enum(['email', 'phone', 'either']),
  urgency: z.enum(['low', 'medium', 'high'])
})

const volunteerSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  age: z.number().min(16, 'Must be at least 16 years old').max(100, 'Please enter a valid age'),
  location: z.string().min(2, 'Location is required'),
  availability: z.array(z.string()).min(1, 'Please select at least one day'),
  skills: z.string().min(10, 'Please describe your skills and experience'),
  motivation: z.string().min(20, 'Please tell us why you want to volunteer'),
  hasVolunteered: z.boolean(),
  canTravel: z.boolean()
})

const partnershipSchema = z.object({
  organizationName: z.string().min(2, 'Organization name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  title: z.string().min(2, 'Job title is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
  organizationType: z.enum(['ngo', 'corporate', 'government', 'educational', 'religious', 'other']),
  partnershipType: z.array(z.string()).min(1, 'Please select at least one partnership type'),
  description: z.string().min(50, 'Please provide a detailed description (minimum 50 characters)'),
  budget: z.string(),
  timeline: z.string()
})

type GeneralInquiryData = z.infer<typeof generalInquirySchema>
type VolunteerData = z.infer<typeof volunteerSchema>
type PartnershipData = z.infer<typeof partnershipSchema>

const formTypes = [
  { id: 'general', label: 'General Inquiry', icon: MessageSquare, description: 'Ask questions or get information about our organization' },
  { id: 'volunteer', label: 'Volunteer Application', icon: Users, description: 'Apply to join our volunteer team' },
  { id: 'partnership', label: 'Partnership Proposal', icon: Hand, description: 'Propose a partnership or collaboration' }
]

export function ContactForms() {
  const [activeForm, setActiveForm] = useState<'general' | 'volunteer' | 'partnership'>('general')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // General Inquiry Form
  const generalForm = useForm<GeneralInquiryData>({
    resolver: zodResolver(generalInquirySchema),
    defaultValues: {
      preferredContact: 'email',
      urgency: 'medium'
    }
  })

  // Volunteer Application Form
  const volunteerForm = useForm<VolunteerData>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: {
      availability: [],
      hasVolunteered: false,
      canTravel: false
    }
  })

  // Partnership Form
  const partnershipForm = useForm<PartnershipData>({
    resolver: zodResolver(partnershipSchema),
    defaultValues: {
      partnershipType: []
    }
  })

  const onSubmitGeneral = async (data: GeneralInquiryData) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('General inquiry submitted:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmitVolunteer = async (data: VolunteerData) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Volunteer application submitted:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const onSubmitPartnership = async (data: PartnershipData) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log('Partnership proposal submitted:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact-forms" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8">
              <div className="space-y-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h2 className="text-3xl font-bold text-neutral-900">
                  Thank You!
                </h2>
                <p className="text-lg text-neutral-600">
                  Your message has been received successfully. We'll get back to you within 24 hours.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 text-sm arabic text-center mb-2">
                    "وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ"
                  </p>
                  <p className="text-green-600 text-sm text-center">
                    "And Allah loves the doers of good" - Quran 3:134
                  </p>
                </div>
                <Button onClick={() => setIsSubmitted(false)} className="mt-6">
                  Send Another Message
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-forms" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Send Us a Message
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Choose the form that best fits your inquiry. We're here to help with 
            any questions about our programs, volunteer opportunities, or partnerships.
          </p>
        </div>

        {/* Form Type Selector */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-4">
            {formTypes.map((type) => (
              <Card 
                key={type.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeForm === type.id ? 'ring-2 ring-primary-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveForm(type.id as any)}
              >
                <CardContent className="p-6 text-center">
                  <type.icon className={`w-12 h-12 mx-auto mb-3 ${
                    activeForm === type.id ? 'text-primary-600' : 'text-neutral-600'
                  }`} />
                  <h3 className={`font-semibold mb-2 ${
                    activeForm === type.id ? 'text-primary-600' : 'text-neutral-900'
                  }`}>
                    {type.label}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Forms */}
        <div className="max-w-4xl mx-auto">
          {/* General Inquiry Form */}
          {activeForm === 'general' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-primary-600 mr-2" />
                  General Inquiry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={generalForm.handleSubmit(onSubmitGeneral)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        {...generalForm.register('name')}
                        className="form-input"
                        placeholder="Your full name"
                      />
                      {generalForm.formState.errors.name && (
                        <p className="form-error">{generalForm.formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        {...generalForm.register('email')}
                        className="form-input"
                        placeholder="your@email.com"
                      />
                      {generalForm.formState.errors.email && (
                        <p className="form-error">{generalForm.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        {...generalForm.register('phone')}
                        className="form-input"
                        placeholder="+232 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label className="form-label">Urgency Level</label>
                      <select {...generalForm.register('urgency')} className="form-input">
                        <option value="low">Low - General inquiry</option>
                        <option value="medium">Medium - Need response soon</option>
                        <option value="high">High - Urgent matter</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Subject *</label>
                    <input
                      type="text"
                      {...generalForm.register('subject')}
                      className="form-input"
                      placeholder="Brief subject of your inquiry"
                    />
                    {generalForm.formState.errors.subject && (
                      <p className="form-error">{generalForm.formState.errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Message *</label>
                    <textarea
                      {...generalForm.register('message')}
                      rows={6}
                      className="form-input resize-y"
                      placeholder="Please provide details about your inquiry..."
                    />
                    {generalForm.formState.errors.message && (
                      <p className="form-error">{generalForm.formState.errors.message.message}</p>
                    )}
                    <p className="text-xs text-neutral-500 mt-1">
                      {generalForm.watch('message')?.length || 0}/1000 characters
                    </p>
                  </div>

                  <div>
                    <label className="form-label">Preferred Contact Method</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: 'email', label: 'Email' },
                        { value: 'phone', label: 'Phone' },
                        { value: 'either', label: 'Either' }
                      ].map(option => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            value={option.value}
                            {...generalForm.register('preferredContact')}
                            className="w-4 h-4 text-primary-600"
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" className="w-full" isLoading={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Volunteer Application Form */}
          {activeForm === 'volunteer' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 text-primary-600 mr-2" />
                  Volunteer Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={volunteerForm.handleSubmit(onSubmitVolunteer)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">First Name *</label>
                      <input
                        type="text"
                        {...volunteerForm.register('firstName')}
                        className="form-input"
                        placeholder="First name"
                      />
                      {volunteerForm.formState.errors.firstName && (
                        <p className="form-error">{volunteerForm.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Last Name *</label>
                      <input
                        type="text"
                        {...volunteerForm.register('lastName')}
                        className="form-input"
                        placeholder="Last name"
                      />
                      {volunteerForm.formState.errors.lastName && (
                        <p className="form-error">{volunteerForm.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        {...volunteerForm.register('email')}
                        className="form-input"
                        placeholder="your@email.com"
                      />
                      {volunteerForm.formState.errors.email && (
                        <p className="form-error">{volunteerForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        {...volunteerForm.register('phone')}
                        className="form-input"
                        placeholder="+232 XX XXX XXXX"
                      />
                      {volunteerForm.formState.errors.phone && (
                        <p className="form-error">{volunteerForm.formState.errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Age *</label>
                      <input
                        type="number"
                        min="16"
                        max="100"
                        {...volunteerForm.register('age', { valueAsNumber: true })}
                        className="form-input"
                        placeholder="25"
                      />
                      {volunteerForm.formState.errors.age && (
                        <p className="form-error">{volunteerForm.formState.errors.age.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Location *</label>
                    <input
                      type="text"
                      {...volunteerForm.register('location')}
                      className="form-input"
                      placeholder="City, Country"
                    />
                    {volunteerForm.formState.errors.location && (
                      <p className="form-error">{volunteerForm.formState.errors.location.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Availability (Select all that apply) *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Weekends Only'].map(day => (
                        <label key={day} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={day}
                            {...volunteerForm.register('availability')}
                            className="w-4 h-4 text-primary-600"
                          />
                          <span className="text-sm">{day}</span>
                        </label>
                      ))}
                    </div>
                    {volunteerForm.formState.errors.availability && (
                      <p className="form-error">{volunteerForm.formState.errors.availability.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Skills & Experience *</label>
                    <textarea
                      {...volunteerForm.register('skills')}
                      rows={4}
                      className="form-input resize-y"
                      placeholder="Describe your relevant skills, experience, and any certifications..."
                    />
                    {volunteerForm.formState.errors.skills && (
                      <p className="form-error">{volunteerForm.formState.errors.skills.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Why do you want to volunteer with us? *</label>
                    <textarea
                      {...volunteerForm.register('motivation')}
                      rows={4}
                      className="form-input resize-y"
                      placeholder="Tell us about your motivation and what you hope to contribute..."
                    />
                    {volunteerForm.formState.errors.motivation && (
                      <p className="form-error">{volunteerForm.formState.errors.motivation.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...volunteerForm.register('hasVolunteered')}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span>I have volunteered with other organizations before</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...volunteerForm.register('canTravel')}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span>I am willing to travel for volunteer work</span>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" isLoading={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Partnership Proposal Form */}
          {activeForm === 'partnership' && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Hand className="w-6 h-6 text-primary-600 mr-2" />
                  Partnership Proposal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={partnershipForm.handleSubmit(onSubmitPartnership)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Organization Name *</label>
                      <input
                        type="text"
                        {...partnershipForm.register('organizationName')}
                        className="form-input"
                        placeholder="Your organization name"
                      />
                      {partnershipForm.formState.errors.organizationName && (
                        <p className="form-error">{partnershipForm.formState.errors.organizationName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Organization Type *</label>
                      <select {...partnershipForm.register('organizationType')} className="form-input">
                        <option value="">Select type</option>
                        <option value="ngo">NGO/Non-Profit</option>
                        <option value="corporate">Corporate/Business</option>
                        <option value="government">Government Agency</option>
                        <option value="educational">Educational Institution</option>
                        <option value="religious">Religious Organization</option>
                        <option value="other">Other</option>
                      </select>
                      {partnershipForm.formState.errors.organizationType && (
                        <p className="form-error">{partnershipForm.formState.errors.organizationType.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Contact Person *</label>
                      <input
                        type="text"
                        {...partnershipForm.register('contactPerson')}
                        className="form-input"
                        placeholder="Full name"
                      />
                      {partnershipForm.formState.errors.contactPerson && (
                        <p className="form-error">{partnershipForm.formState.errors.contactPerson.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Job Title *</label>
                      <input
                        type="text"
                        {...partnershipForm.register('title')}
                        className="form-input"
                        placeholder="Your job title"
                      />
                      {partnershipForm.formState.errors.title && (
                        <p className="form-error">{partnershipForm.formState.errors.title.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        {...partnershipForm.register('email')}
                        className="form-input"
                        placeholder="contact@organization.com"
                      />
                      {partnershipForm.formState.errors.email && (
                        <p className="form-error">{partnershipForm.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        {...partnershipForm.register('phone')}
                        className="form-input"
                        placeholder="+232XXXXXXXX"
                      />
                      {partnershipForm.formState.errors.phone && (
                        <p className="form-error">{partnershipForm.formState.errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="form-label">Website (Optional)</label>
                      <input
                        type="url"
                        {...partnershipForm.register('website')}
                        className="form-input"
                        placeholder="https://yourorganization.com"
                      />
                      {partnershipForm.formState.errors.website && (
                        <p className="form-error">{partnershipForm.formState.errors.website.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Partnership Type (Select all that apply) *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        'Financial Support',
                        'Program Collaboration',
                        'Resource Sharing',
                        'Technical Expertise',
                        'Volunteer Support',
                        'Awareness Campaign'
                      ].map(type => (
                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            value={type}
                            {...partnershipForm.register('partnershipType')}
                            className="w-4 h-4 text-primary-600"
                          />
                          <span className="text-sm">{type}</span>
                        </label>
                      ))}
                    </div>
                    {partnershipForm.formState.errors.partnershipType && (
                      <p className="form-error">{partnershipForm.formState.errors.partnershipType.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="form-label">Partnership Description *</label>
                    <textarea
                      {...partnershipForm.register('description')}
                      rows={6}
                      className="form-input resize-y"
                      placeholder="Provide a detailed description of your partnership proposal, including objectives, expected outcomes, and how it aligns with our mission..."
                    />
                    {partnershipForm.formState.errors.description && (
                      <p className="form-error">{partnershipForm.formState.errors.description.message}</p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Proposed Budget Range</label>
                      <select {...partnershipForm.register('budget')} className="form-input">
                        <option value="">Select budget range</option>
                        <option value="under-1k">Under $1,000</option>
                        <option value="1k-5k">$1,000 - $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="over-50k">Over $50,000</option>
                        <option value="non-monetary">Non-monetary partnership</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="form-label">Proposed Timeline</label>
                      <select {...partnershipForm.register('timeline')} className="form-input">
                        <option value="">Select timeline</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="1-2years">1-2 years</option>
                        <option value="2plus-years">2+ years</option>
                        <option value="ongoing">Ongoing partnership</option>
                      </select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" isLoading={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Submitting Proposal...' : 'Submit Partnership Proposal'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  )
}