import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ContactHero() {
  const scrollToForms = () => {
    document.getElementById('contact-forms')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      <div className="relative container section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-center space-x-2">
              <Mail className="w-8 h-8 text-blue-300 animate-pulse" />
              <Phone className="w-8 h-8 text-green-300 animate-pulse animate-delay-100" />
              <MessageCircle className="w-8 h-8 text-yellow-300 animate-pulse animate-delay-200" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Get in 
              <span className="text-accent-400"> Touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We're here to help and answer any questions you might have
            </p>
            
            <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
              Whether you want to learn more about our programs, volunteer opportunities, 
              or partnership possibilities, we'd love to hear from you.
            </p>
          </div>

          {/* Islamic Quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-xl font-medium text-accent-300 mb-2 arabic text-center">
              "وَالَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ"
            </p>
            <p className="text-blue-100 text-center">
              "Those who believe and do righteous deeds - no fear will they have, nor will they grieve" - Quran 2:62
            </p>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-blue-200">Email Us</div>
              <div className="text-lg font-semibold">24 Hours</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-blue-200">Call Us</div>
              <div className="text-lg font-semibold">Business Hours</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-blue-200">Live Chat</div>
              <div className="text-lg font-semibold">Mon-Fri</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-sm text-blue-200">Visit Us</div>
              <div className="text-lg font-semibold">Open Daily</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToForms}
            className="shadow-lg hover:shadow-xl transition-all"
          >
            Send Us a Message
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}