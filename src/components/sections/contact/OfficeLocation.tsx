import { MapPin, Navigation, Car, Bus, Plane, Clock, Phone, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const directions = [
  {
    icon: Car,
    method: 'By Car',
    description: 'From downtown Freetown, head west on Siaka Stevens Street, turn right onto Goderich Street',
    duration: '15-20 minutes',
    details: ['Parking available on-site', 'Free parking for visitors', 'Accessible parking spaces available']
  },
  {
    icon: Bus,
    method: 'By Public Transport',
    description: 'Take bus routes 12, 15, or 18 to Goderich Street stop, walk 2 minutes',
    duration: '25-30 minutes',
    details: ['Bus stop 50 meters from office', 'Regular service every 15 minutes', 'Wheelchair accessible buses available']
  },
  {
    icon: Plane,
    method: 'From Airport',
    description: 'Freetown International Airport (Lungi) - Take ferry or helicopter to Freetown, then taxi',
    duration: '45-60 minutes',
    details: ['Ferry service available', 'Helicopter transfers faster', 'Taxi from ferry terminal']
  }
]

const facilities = [
  {
    icon: Heart,
    name: 'Accessibility',
    description: 'Wheelchair accessible entrance, elevator, and restrooms available'
  },
  {
    icon: Car,
    name: 'Parking',
    description: 'Free on-site parking with reserved spaces for visitors and disabled access'
  },
  {
    icon: Clock,
    name: 'Meeting Rooms',
    description: 'Conference facilities available for meetings and presentations'
  },
  {
    icon: Phone,
    name: 'Reception',
    description: 'Multilingual reception staff available during business hours'
  }
]

const landmarks = [
  'Next to Central Mosque of Freetown',
  'Opposite Goderich Primary School',
  '200m from Goderich Market',
  '5 minutes walk from Aberdeen Beach',
  'Near Sierra Leone National Museum'
]

export function OfficeLocation() {
  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=41+Goderich+Street+Freetown+Sierra+Leone', '_blank')
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Visit Our Office
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We welcome visitors to our office in Freetown. Whether you're interested in learning 
            about our programs or want to volunteer, we'd love to meet you in person.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map and Address */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary-600 mr-2" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center space-y-4">
                    <MapPin className="w-16 h-16 text-primary-600 mx-auto" />
                    <div>
                      <p className="font-semibold text-neutral-900 text-lg">41 Goderich Street</p>
                      <p className="text-neutral-600">Freetown, Western Area, Sierra Leone</p>
                    </div>
                    <Button onClick={openGoogleMaps} className="shadow-lg">
                      <Navigation className="w-4 h-4 mr-2" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
                
                {/* Address Details */}
                <div className="bg-neutral-50 rounded-lg p-4 space-y-2">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-neutral-700">Street:</span>
                      <span className="text-neutral-600 ml-2">41 Goderich Street</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-700">City:</span>
                      <span className="text-neutral-600 ml-2">Freetown</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-700">District:</span>
                      <span className="text-neutral-600 ml-2">Western Area Urban</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-700">Country:</span>
                      <span className="text-neutral-600 ml-2">Sierra Leone</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Landmarks */}
            <Card>
              <CardHeader>
                <CardTitle>Nearby Landmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {landmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                      <span className="text-neutral-600 text-sm">{landmark}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Directions and Facilities */}
          <div className="space-y-8">
            {/* Getting Here */}
            <Card>
              <CardHeader>
                <CardTitle>Getting Here</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {directions.map((direction, index) => (
                    <div key={index} className="border-b border-neutral-100 last:border-b-0 pb-4 last:pb-0">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <direction.icon className="w-5 h-5 text-primary-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-neutral-900">{direction.method}</h4>
                            <span className="text-sm text-neutral-500">{direction.duration}</span>
                          </div>
                          <p className="text-neutral-600 text-sm mb-3">{direction.description}</p>
                          <ul className="space-y-1">
                            {direction.details.map((detail, idx) => (
                              <li key={idx} className="text-xs text-neutral-500 flex items-center">
                                <span className="w-1 h-1 bg-primary-600 rounded-full mr-2"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card>
              <CardHeader>
                <CardTitle>Office Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div>
                        <h5 className="font-medium text-neutral-900 mb-1">{facility.name}</h5>
                        <p className="text-neutral-600 text-sm">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-600 mr-2" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Monday - Thursday</span>
                    <span className="text-neutral-600">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Friday</span>
                    <span className="text-neutral-600">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-100">
                    <span className="font-medium text-neutral-700">Saturday</span>
                    <span className="text-neutral-600">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-neutral-700">Sunday</span>
                    <span className="text-neutral-600">Closed</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-accent-50 border border-accent-200 rounded-lg">
                  <p className="text-accent-700 text-sm">
                    <strong>Note:</strong> We observe Islamic prayer times and may be temporarily unavailable during Salah. 
                    For urgent matters outside office hours, please call our emergency hotline.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visit Us CTA */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <MapPin className="w-16 h-16 text-accent-300 mx-auto" />
            <h3 className="text-2xl md:text-3xl font-bold">
              We'd Love to Meet You
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Drop by our office to learn more about our programs, meet our team, 
              or discuss how you can get involved. No appointment necessary during office hours, 
              but we recommend calling ahead for longer meetings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={openGoogleMaps}
                className="shadow-lg"
              >
                <Navigation className="mr-2 w-5 h-5" />
                Get Directions
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                
              >
                <a href="tel:+232XXXXXXXX">
                  <Phone className="mr-2 w-5 h-5" />
                  Call to Schedule
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}