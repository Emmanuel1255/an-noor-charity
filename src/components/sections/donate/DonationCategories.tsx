import { useState } from 'react'
import { Star, Heart, User, AlertTriangle, GraduationCap, Stethoscope } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const donationCategories = [
  {
    id: 'zakat',
    icon: Star,
    title: 'Zakat',
    arabic: 'زكاة',
    description: 'Obligatory charity for eligible Muslims, one of the Five Pillars of Islam',
    details: [
      'Purifies wealth and soul',
      'Calculated as 2.5% of savings held for one year',
      'Must meet nisab threshold',
      'Distributed to eight categories of recipients'
    ],
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-700',
    minAmount: 0,
    isZakat: true,
    verse: '"And establish prayer and give zakat" - Quran 2:43'
  },
  {
    id: 'sadaqah',
    icon: Heart,
    title: 'Sadaqah',
    arabic: 'صدقة',
    description: 'Voluntary charity given out of compassion and love for Allah',
    details: [
      'Any amount accepted with gratitude',
      'Brings immense spiritual reward',
      'Can be given anytime',
      'Includes acts of kindness'
    ],
    color: 'from-primary-500 to-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-200',
    textColor: 'text-primary-700',
    minAmount: 5,
    isZakat: false,
    verse: '"The example of those who spend their wealth in the way of Allah..." - Quran 2:261'
  },
  {
    id: 'sadaqah-jariyah',
    icon: User,
    title: 'Sadaqah Jariyah',
    arabic: 'صدقة جارية',
    description: 'Continuing charity that benefits people long after you give it',
    details: [
      'Ongoing reward even after death',
      'Builds sustainable infrastructure',
      'Education and knowledge sharing',
      'Water wells, schools, hospitals'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
    minAmount: 25,
    isZakat: false,
    verse: '"When a person dies, his deeds come to an end except for three..." - Hadith'
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    title: 'Emergency Relief',
    arabic: 'إغاثة طارئة',
    description: 'Urgent support for crisis situations and natural disasters',
    details: [
      'Immediate food and shelter',
      'Medical emergency assistance',
      'Disaster response support',
      'Crisis intervention'
    ],
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
    minAmount: 10,
    isZakat: false,
    verse: '"And whoever saves a life, it is as if he has saved all mankind" - Quran 5:32'
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Islamic Education Support',
    arabic: 'دعم التعليم',
    description: 'Supporting Islamic education and knowledge acquisition for underprivileged children',
    details: [
      'School fees and supplies',
      'Scholarship programs',
      'Educational infrastructure',
      'Teacher training support'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    minAmount: 20,
    isZakat: false,
    verse: '"And say: My Lord, increase me in knowledge" - Quran 20:114'
  },
  {
    id: 'healthcare',
    icon: Stethoscope,
    title: 'Healthcare Support',
    arabic: 'دعم الرعاية الصحية',
    description: 'Medical assistance and healthcare access for those in need',
    details: [
      'Medical treatments and surgeries',
      'Medicine and medical supplies',
      'Healthcare facility support',
      'Preventive care programs'
    ],
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-700',
    minAmount: 30,
    isZakat: false,
    verse: '"And whoever gives life to a soul, it is as if he has given life to all mankind"'
  }
]

export function DonationCategories() {
  const [selectedCategory] = useState<string | null>(null)

  

  return (
    <section id="donation-categories" className="section-padding bg-neutral-50 -pb-[6rem]">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Choose Your Donation Type
          </h2> */}
          <p className="text-lg text-neutral-600 leading-relaxed">
            Islam offers various forms of charity, each with its own purpose and reward. 
            Choose the type that best matches your intention and circumstances.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {donationCategories.map((category) => (
            <Card 
              key={category.id} 
              className={`h-full hover-lift hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                selectedCategory === category.id ? 'ring-2 ring-primary-500 shadow-lg' : ''
              }`}
              // onClick={() => selectCategory(category.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-arabic text-primary-600">
                    {category.arabic}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary-600 transition-colors">
                  {category.title}
                </CardTitle>
                
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-neutral-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {category.details.map((detail, idx) => (
                      <li key={idx} className="text-neutral-600 text-xs flex items-start">
                        <span className="w-1 h-1 bg-primary-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${category.bgColor} border ${category.borderColor} rounded-lg p-3`}>
                  <p className={`${category.textColor} text-xs leading-relaxed italic`}>
                    {category.verse}
                  </p>
                </div>
                
                {/* <Button 
                  className="w-full group-hover:shadow-md transition-all"
                  onClick={(e) => {
                    e.stopPropagation()
                    selectCategory(category.id)
                  }}
                >
                  Donate {category.title}
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}