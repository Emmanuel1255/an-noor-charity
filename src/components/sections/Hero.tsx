import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Users, Globe } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
  {/* Responsive tweaks via Tailwind classes */}
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative container section-padding px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in max-w-xl mx-auto lg:mx-0">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Service for 
                <span className="text-accent-400"> Allah</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Helping those in need through Islamic charity and community support
              </p>
              <p className="text-sm sm:text-base md:text-lg text-blue-200 leading-relaxed">
                An Noor Charity Foundation is dedicated to creating positive change in communities 
                worldwide, guided by Islamic principles of compassion, justice, and service to humanity.
              </p>
            </div>

            {/* Islamic Quote */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/20">
              <p className="text-lg font-medium text-accent-300 mb-2 arabic text-center">
                "مَّن ذَا ٱلَّذِي يُقۡرِضُ ٱللَّهَ قَرۡضًا حَسَنٗا فَيُضَٰعِفَهُۥ لَهُۥٓ أَضۡعَافٗا كَثِيرَةٗۚ وَٱللَّهُ يَقۡبِضُ وَيَبۡصُۜطُ وَإِلَيۡهِ تُرۡجَعُونَ"
              </p>
              <p className="text-blue-100 text-center text-sm">
                "Who is it that would loan Allah a goodly loan so He may multiply it for him many times over? And it is Allah who withholds and grants abundance, and to Him you will be returned." - Quran 2:245
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button size="lg" variant="secondary">
                <Link to="/donate" className="group">
                  Donate Now
                  <Heart className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/about" className="group bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-400">500+</div>
                <div className="text-sm text-blue-200">Families Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-400">15+</div>
                <div className="text-sm text-blue-200">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-400">10+</div>
                <div className="text-sm text-blue-200">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative animate-fade-in animate-delay-200 max-w-xl mx-auto lg:mx-0 w-full">
            {/* Main Image Container */}
            <div className="relative">
              <div className="aspect-[4/3] bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-[32rem] mx-auto">
                {/* Placeholder for hero image */}
                <div className="w-full h-full flex items-center justify-center bg-white to-accent-600/20 backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    <div className="w-60 h-48 sm:w-80 sm:h-64 md:w-[30rem] md:h-[24rem] bg-white/20 rounded-full flex items-center justify-center mx-auto">
                    <img src="./hero.jpeg" alt="" className="object-cover w-full h-full rounded-full max-w-full max-h-full" />
                    </div>
                    
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-accent-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" />
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-accent-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-10 md:h-12 lg:h-16"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}