import { MapPin, Phone, Mail, Clock, Users, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Address',
    content: '41 Goderich Street',
    subtitle: 'Freetown, Western Area, Sierra Leone',
    link: 'https://maps.google.com/?q=41+Goderich+Street+Freetown+Sierra+Leone'
  },
  {
    icon: Phone,
    title: 'Phone Number',
    content: '+232 XX XXX XXXX',
    subtitle: 'Available during business hours',
    link: 'tel:+232XXXXXXXX'
  },
  {
    icon: Mail,
    title: 'Email Address',
    content: 'info@annoorcharity.org',
    subtitle: 'We respond within 24 hours',
    link: 'mailto:info@annoorcharity.org'
  }
]

const officeHours = [
  { day: 'Monday - Thursday', hours: '9:00 AM - 5:00 PM' },
  { day: 'Friday', hours: '9:00 AM - 12:00 PM (Jumu\'ah)' },
  { day: 'Saturday', hours: '10:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' }
]

const communityStats = [
  { label: 'Local Families Served', value: '250+' },
  { label: 'Community Partners', value: '15+' },
  { label: 'Local Programs', value: '8' },
  { label: 'Years in Sierra Leone', value: '5+' }
]

export function Location() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Location & Community
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Based in Freetown, Sierra Leone, we serve local communities while 
            maintaining a global perspective in our charitable work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover-lift hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-neutral-900 mb-1">
                            {info.title}
                          </h4>
                          <a 
                            href={info.link}
                            className="text-primary-600 hover:text-primary-700 transition-colors font-medium block"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content}
                          </a>
                          <p className="text-neutral-500 text-sm mt-1">
                            {info.subtitle}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 text-primary-600 mr-2" />
                Office Hours
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-b-0">
                        <span className="text-neutral-700 font-medium">{schedule.day}</span>
                        <span className="text-neutral-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-accent-50 rounded-lg border border-accent-200">
                    <p className="text-accent-700 text-sm">
                      <strong>Note:</strong> We observe Islamic prayer times and may be unavailable during Salah. 
                      Emergency contacts are available 24/7 for urgent humanitarian needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map and Community Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                Find Us
              </h3>
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <MapPin className="w-16 h-16 text-primary-600 mx-auto" />
                      <div>
                        <p className="font-semibold text-neutral-900">41 Goderich Street</p>
                        <p className="text-neutral-600">Freetown, Sierra Leone</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <a 
                          href="https://maps.google.com/?q=41+Goderich+Street+Freetown+Sierra+Leone"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


          </div>
        </div>


      </div>
    </section>
  )
}