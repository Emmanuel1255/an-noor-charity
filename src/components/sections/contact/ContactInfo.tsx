import { MapPin, Phone, Mail, Clock} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Address',
    primary: 'info@annoorcharity.org',
    secondary: 'For general inquiries and information',
    additional: [
      { label: 'Partnerships', value: 'info@annoorcharity.org' },
      { label: 'Media Inquiries', value: 'media@annoorcharity.org' }
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    primary: '+232 XX XXX XXXX',
    secondary: 'Available during business hours',
    additional: [
      { label: 'Emergency Hotline', value: '+232 XX XXX XXXX' },
      { label: 'WhatsApp', value: '+232 XX XXX XXXX' }
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: MapPin,
    title: 'Office Address',
    primary: '41 Goderich Street',
    secondary: 'Freetown, Western Area, Sierra Leone',
    additional: [
      { label: 'District', value: 'Western Area Urban' },
      { label: 'Country', value: 'Sierra Leone' }
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    primary: 'Monday - Thursday: 9:00 AM - 5:00 PM',
    secondary: 'Friday: 9:00 AM - 12:00 PM (Jumu\'ah Prayer)',
    additional: [
      { label: 'Saturday', value: '10:00 AM - 2:00 PM' },
      { label: 'Sunday', value: 'Closed' },
      { label: 'Emergency', value: '24/7 Hotline Available' }
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50'
  }
]



export function ContactInfo() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Contact Information
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Multiple ways to reach us for different needs. We're committed to responding 
            promptly and providing the assistance you need.
          </p>
        </div>

        {/* Main Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-r ${method.color} mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-lg text-neutral-900">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">
                    {method.primary}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {method.secondary}
                  </div>
                </div>
                
                <div className={`${method.bgColor} rounded-lg p-3 space-y-2`}>
                  {method.additional.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-xs text-neutral-600">{item.label}:</span>
                      <span className="text-xs font-medium text-neutral-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>



        {/* Emergency Contact */}
        {/* <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Emergency Assistance
            </h3>
            <p className="text-red-100 leading-relaxed">
              If you or someone you know is in immediate need of emergency assistance, 
              please don't hesitate to contact our 24/7 emergency hotline.
            </p>
            <div className="space-y-3">
              <div>
                <div className="text-2xl font-bold text-white">+232 XX XXX XXXX</div>
                <div className="text-red-200">Emergency Hotline (24/7)</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-white">emergency@annoorcharity.org</div>
                <div className="text-red-200">Emergency Email (Monitored 24/7)</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <p className="text-red-100 text-sm">
                <strong>Emergency services include:</strong> Disaster relief, medical emergencies, 
                urgent food assistance, temporary shelter, and crisis counseling.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}