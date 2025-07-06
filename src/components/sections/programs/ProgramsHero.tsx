import { Heart, Users, Globe, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function ProgramsHero() {
  const scrollToPrograms = () => {
    document.getElementById('featured-programs')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      <div className="relative container section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-center space-x-2">
              <Heart className="w-8 h-8 text-red-300 animate-pulse" />
              <Users className="w-8 h-8 text-blue-300 animate-pulse animate-delay-100" />
              <Globe className="w-8 h-8 text-green-300 animate-pulse animate-delay-200" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Programs &
              <span className="text-accent-400"> Impact</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Transforming lives through comprehensive charitable programs
            </p>
            
            <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
              From emergency relief to sustainable development, our programs address the most pressing 
              needs in communities while building long-term solutions for lasting change.
            </p>
          </div>

          {/* Islamic Quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-xl font-medium text-accent-300 mb-2 arabic text-center">
              "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا"
            </p>
            <p className="text-blue-100 text-center">
              "And whoever saves a life, it is as if he has saved all of mankind" - Quran 5:32
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={scrollToPrograms}
            >
              <Star className="mr-2 w-5 h-5" />
              Explore Programs
            </Button>
            
          </div>

          {/* Quick Program Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">15+</div>
              <div className="text-sm text-blue-200">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">6</div>
              <div className="text-sm text-blue-200">Focus Areas</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-400">10+</div>
              <div className="text-sm text-blue-200">Countries</div>
            </div>
          </div> */}
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