// import { BookOpen, Users, Heart } from 'lucide-react'

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 islamic-pattern opacity-5"></div>

            <div className="relative container section-padding">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <div className="space-y-6 animate-fade-in">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            About An Noor
                            <span className="text-accent-400"> Charity Foundation</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 leading-relaxed">
                            Serving Allah by helping those in need since our foundation
                        </p>
                    </div>

                    {/* Islamic Quote */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-3xl mx-auto">
                        <p className="text-2xl font-medium text-accent-300 mb-4 arabic text-center">
                            "وَمَا أَنفَقْتُم مِّن شَيْءٍ فَهُوَ يُخْلِفُهُ"
                        </p>
                        <p className="text-neutral-200 text-center">
                            "And whatever you spend [in the way of Allah], He will replace it" - Quran 34:39
                        </p>
                    </div>

                    {/* Quick Stats */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-accent-400">500+</div>
                            <div className="text-sm text-neutral-300">Families Helped</div>
                        </div>
                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-accent-400">15+</div>
                            <div className="text-sm text-neutral-300">Active Programs</div>
                        </div>

                        <div className="text-center space-y-2">
                            <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-accent-400">100%</div>
                            <div className="text-sm text-neutral-300">Transparency</div>
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