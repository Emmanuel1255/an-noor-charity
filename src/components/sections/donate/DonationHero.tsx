import { Heart, Star, Gift } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function DonationHero() {
  const scrollToForm = () => {
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent-500 via-accent-600 to-accent-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern opacity-10"></div>
      
      <div className="relative container section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-center space-x-2">
              <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
              <Heart className="w-8 h-8 text-red-300 animate-pulse animate-delay-100" />
              <Gift className="w-8 h-8 text-blue-300 animate-pulse animate-delay-200" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Make a Difference
              <span className="text-yellow-300"> Today</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Your generosity transforms lives and communities
            </p>
          </div>

          {/* Islamic Quotes */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-xl font-medium text-yellow-300 mb-2 arabic text-center">
                "مَّن ذَا الَّذِي يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا"
              </p>
              <p className="text-orange-100 text-center">
                "Who will lend Allah a goodly loan?" - Quran 2:245
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-lg font-medium text-yellow-300 mb-2 arabic text-center">
                "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ"
              </p>
              <p className="text-orange-100 text-center text-sm">
                "Whatever you spend, He will replace it" - Quran 34:39
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToForm}
              className="bg-white text-accent-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transition-all"
            >
              <Heart className="mr-2 w-5 h-5" />
              Donate Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => document.getElementById('donation-categories')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn About Donation Types
            </Button>
          </div>

          {/* Quick Impact Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">$50</div>
              <div className="text-sm text-orange-200">Feeds a family for a month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">$100</div>
              <div className="text-sm text-orange-200">Provides school supplies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">$200</div>
              <div className="text-sm text-orange-200">Covers medical treatment</div>
            </div>
          </div>
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