import { CreditCard, Smartphone, Building2, Globe, Shield, Clock, Users, Phone } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const paymentMethods = [
  {
    icon: CreditCard,
    title: 'Credit & Debit Cards',
    description: 'Secure online payments with instant processing',
    features: ['Visa, Mastercard, American Express', 'Instant donation confirmation', 'Automatic receipts', 'Recurring donation setup'],
    processing: 'Instant',
    security: 'SSL Encrypted'
  },
  {
    icon: Smartphone,
    title: 'Mobile Money',
    description: 'Local mobile payment solutions for Sierra Leone',
    features: ['Orange Money', 'Africell Money', 'QMoney', 'SMS confirmation'],
    processing: 'Real-time',
    security: 'PIN Protected'
  },
  {
    icon: Building2,
    title: 'Bank Transfer',
    description: 'Direct bank-to-bank transfers for larger donations',
    features: ['Local and international transfers', 'Bulk donation processing', 'Corporate donations', 'Wire transfer support'],
    processing: '1-3 business days',
    security: 'Bank Grade'
  },
  {
    icon: Globe,
    title: 'International Options',
    description: 'Global payment solutions for overseas donors',
    features: ['PayPal', 'Western Union', 'MoneyGram', 'Multi-currency support'],
    processing: 'Varies by method',
    security: 'International Standards'
  }
]

const donationSupport = [
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'All transactions are protected with industry-standard security measures'
  },
  {
    icon: Clock,
    title: '24/7 Processing',
    description: 'Online donations are processed immediately, any time of day'
  },
  {
    icon: Users,
    title: 'Donor Support',
    description: 'Dedicated team available to help with any donation questions'
  },
  {
    icon: Phone,
    title: 'Phone Donations',
    description: 'Prefer to donate by phone? Call us during business hours'
  }
]

const bankDetails = {
  local: {
    title: 'Local Bank Transfer (Sierra Leone)',
    details: [
      'Bank: [Bank Name]',
      'Account Name: An Noor Charity Foundation',
      'Account Number: [Account Number]',
      'Swift Code: [Swift Code]',
      'Branch: Freetown Main Branch'
    ]
  },
  international: {
    title: 'International Wire Transfer',
    details: [
      'Bank: [International Bank Partner]',
      'Account Name: An Noor Charity Foundation',
      'IBAN: [IBAN Number]',
      'Swift Code: [Swift Code]',
      'Reference: Donation + Your Name'
    ]
  }
}

export function DonationMethods() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Multiple Ways to Give
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Choose the donation method that works best for you. We've made it easy and 
            secure to contribute from anywhere in the world.
          </p>
        </div>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {paymentMethods.map((method, index) => (
            <Card key={index} className="h-full hover-lift hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <CardTitle className="text-xl text-neutral-900">
                    {method.title}
                  </CardTitle>
                </div>
                <p className="text-neutral-600 text-sm">
                  {method.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-neutral-900 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="text-neutral-600 text-sm flex items-start">
                        <span className="w-1 h-1 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
                  <div>
                    <div className="text-xs text-neutral-500">Processing Time</div>
                    <div className="font-medium text-neutral-900 text-sm">{method.processing}</div>
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500">Security</div>
                    <div className="font-medium text-neutral-900 text-sm">{method.security}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {donationSupport.map((support, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                <support.icon className="w-8 h-8 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {support.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {support.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bank Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-neutral-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="w-5 h-5 text-primary-600 mr-2" />
                {bankDetails.local.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 font-mono text-sm">
                {bankDetails.local.details.map((detail, index) => (
                  <div key={index} className="text-neutral-700">
                    {detail}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-700 text-xs">
                  <strong>Note:</strong> Please include your name and contact information 
                  as reference so we can send you a proper receipt.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 text-primary-600 mr-2" />
                {bankDetails.international.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 font-mono text-sm">
                {bankDetails.international.details.map((detail, index) => (
                  <div key={index} className="text-neutral-700">
                    {detail}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-700 text-xs">
                  <strong>Important:</strong> International transfers may incur bank fees. 
                  Consider this when determining your donation amount.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact for Help */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center">
          <Phone className="w-16 h-16 text-primary-200 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Help with Your Donation?
          </h3>
          <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
            Our team is here to assist you with any questions about donating. 
            Whether you need help choosing the right donation type or have technical issues, 
            we're ready to help make your giving experience smooth and meaningful.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="w-6 h-6 text-primary-200 mx-auto mb-2" />
              <div className="font-semibold text-sm">Phone Support</div>
              <div className="text-blue-200 text-xs">+232 XX XXX XXXX</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Globe className="w-6 h-6 text-primary-200 mx-auto mb-2" />
              <div className="font-semibold text-sm">Email Support</div>
              <div className="text-blue-200 text-xs">donations@annoorcharity.org</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="w-6 h-6 text-primary-200 mx-auto mb-2" />
              <div className="font-semibold text-sm">Office Hours</div>
              <div className="text-blue-200 text-xs">Mon-Thu 9AM-5PM</div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-accent-500 text-white hover:bg-accent-600 shadow-lg"
          >
            Contact Donation Support
          </Button>
        </div>
      </div>
    </section>
  )
}