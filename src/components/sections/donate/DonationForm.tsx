import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CreditCard, Heart, Lock, User, MessageSquare, RotateCcw, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

const donationSchema = z.object({
  amount: z.number().min(1, 'Amount must be at least $1'),
  category: z.string().min(1, 'Please select a donation category'),
  frequency: z.enum(['one-time', 'monthly', 'quarterly', 'yearly']),
  donorName: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Please enter a valid email address').optional(),
  phone: z.string().optional(),
  isAnonymous: z.boolean(),
  message: z.string().max(500, 'Message must be less than 500 characters').optional(),
  paymentMethod: z.enum(['card', 'paypal', 'bank-transfer']),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms')
})

type DonationFormData = z.infer<typeof donationSchema>

const categories = [
  { id: 'zakat', name: 'Zakat', arabic: 'زكاة' },
  { id: 'sadaqah', name: 'Sadaqah', arabic: 'صدقة' },
  { id: 'sadaqah-jariyah', name: 'Sadaqah Jariyah', arabic: 'صدقة جارية' },
  { id: 'emergency', name: 'Emergency Relief', arabic: 'إغاثة طارئة' },
  { id: 'education', name: 'Education Support', arabic: 'دعم التعليم' },
  { id: 'healthcare', name: 'Healthcare Support', arabic: 'دعم الرعاية الصحية' }
]

const quickAmounts = [25, 50, 100, 250, 500, 1000]

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      frequency: 'one-time',
      isAnonymous: false,
      paymentMethod: 'card',
      agreeToTerms: false
    }
  })

  const watchedValues = watch()
  const isAnonymous = watch('isAnonymous')

  // Listen for category selection from other components
  useEffect(() => {
    const handleCategorySelection = (event: CustomEvent) => {
      setValue('category', event.detail)
    }

    window.addEventListener('selectDonationCategory', handleCategorySelection as EventListener)
    return () => window.removeEventListener('selectDonationCategory', handleCategorySelection as EventListener)
  }, [setValue])

  const onSubmit = async (data: DonationFormData) => {
    setIsProcessing(true)
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Donation submitted:', data)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Donation failed:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  const selectAmount = (amount: number) => {
    setSelectedAmount(amount)
    setValue('amount', amount)
  }

  if (isSubmitted) {
    return (
      <section id="donation-form" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="p-8">
              <div className="space-y-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                <h2 className="text-3xl font-bold text-neutral-900">
                  Jazakallahu Khairan!
                </h2>
                <p className="text-lg text-neutral-600">
                  Thank you for your generous donation. May Allah accept your charity and reward you abundantly.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 text-sm arabic text-center mb-2">
                    "وَمَا تُنفِقُوا مِنْ خَيْرٍ فَلِأَنفُسِكُمْ"
                  </p>
                  <p className="text-green-600 text-sm text-center">
                    "Whatever good you spend is for yourselves" - Quran 2:272
                  </p>
                </div>
                <Button onClick={() => setIsSubmitted(false)} className="mt-6">
                  Make Another Donation
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="donation-form" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Complete Your Donation
            </h2>
            <p className="text-lg text-neutral-600">
              Your contribution makes a real difference in the lives of those we serve
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Donation Details */}
              <div className="space-y-6">
                {/* Category Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-5 h-5 text-primary-600 mr-2" />
                      Donation Category
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <select
                      {...register('category')}
                      className="form-input"
                    >
                      <option value="">Select donation type</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name} ({category.arabic})
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="form-error">{errors.category.message}</p>
                    )}
                  </CardContent>
                </Card>

                {/* Amount Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Donation Amount</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Quick Amount Buttons */}
                    <div className="grid grid-cols-3 gap-3">
                      {quickAmounts.map(amount => (
                        <Button
                          key={amount}
                          type="button"
                          variant={selectedAmount === amount ? 'primary' : 'outline'}
                          onClick={() => selectAmount(amount)}
                          className="h-12"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    {/* Custom Amount */}
                    <div>
                      <label className="form-label">Custom Amount (USD)</label>
                      <input
                        type="number"
                        min="1"
                        step="0.01"
                        {...register('amount', { valueAsNumber: true })}
                        className="form-input"
                        placeholder="Enter amount"
                      />
                      {errors.amount && (
                        <p className="form-error">{errors.amount.message}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Frequency */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <RotateCcw className="w-5 h-5 text-primary-600 mr-2" />
                      Donation Frequency
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: 'one-time', label: 'One Time' },
                        { value: 'monthly', label: 'Monthly' },
                        { value: 'quarterly', label: 'Quarterly' },
                        { value: 'yearly', label: 'Yearly' }
                      ].map(option => (
                        <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="radio"
                            value={option.value}
                            {...register('frequency')}
                            className="w-4 h-4 text-primary-600"
                          />
                          <span className="text-sm">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Donor Information */}
              <div className="space-y-6">
                {/* Anonymous Toggle */}
                <Card>
                  <CardContent className="p-6">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register('isAnonymous')}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="font-medium">Make this donation anonymous</span>
                    </label>
                    <p className="text-sm text-neutral-500 mt-2">
                      Your name will not be displayed publicly, but we'll still send you a receipt
                    </p>
                  </CardContent>
                </Card>

                {/* Donor Information */}
                {!isAnonymous && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="w-5 h-5 text-primary-600 mr-2" />
                        Donor Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          {...register('donorName')}
                          className="form-input"
                          placeholder="Your full name"
                        />
                        {errors.donorName && (
                          <p className="form-error">{errors.donorName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          {...register('email')}
                          className="form-input"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="form-error">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="form-label">Phone Number (Optional)</label>
                        <input
                          type="tel"
                          {...register('phone')}
                          className="form-input"
                          placeholder="+232XXXXXXXX"
                        />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Message */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageSquare className="w-5 h-5 text-primary-600 mr-2" />
                      Message (Optional)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <textarea
                      {...register('message')}
                      className="form-input min-h-[100px] resize-y"
                      placeholder="Leave a message or specify how you'd like your donation to be used..."
                      maxLength={500}
                    />
                    {errors.message && (
                      <p className="form-error">{errors.message.message}</p>
                    )}
                    <p className="text-xs text-neutral-500 mt-1">
                      {watchedValues.message?.length || 0}/500 characters
                    </p>
                  </CardContent>
                </Card>

                {/* Payment Method */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="w-5 h-5 text-primary-600 mr-2" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { value: 'card', label: 'Credit/Debit Card', icon: '💳' },
                        { value: 'mobile-money', label: 'Mobile Money', icon: '📱' },
                        { value: 'paypal', label: 'PayPal', icon: '🅿️' },
                        { value: 'bank-transfer', label: 'Bank Transfer', icon: '🏦' },
                        { value: 'cash', label: 'Cash', icon: '💵' }
                      ].map(method => (
                        <label key={method.value} className="flex items-center space-x-3 p-3 border border-neutral-200 rounded-lg cursor-pointer hover:bg-neutral-50">
                          <input
                            type="radio"
                            value={method.value}
                            {...register('paymentMethod')}
                            className="w-4 h-4 text-primary-600"
                          />
                          <span className="text-lg">{method.icon}</span>
                          <span>{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Terms and Submit */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('agreeToTerms')}
                      className="w-4 h-4 text-primary-600 mt-0.5"
                    />
                    <span className="text-sm text-neutral-600">
                      I agree to the{' '}
                      <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>.
                      I understand that my donation will be used according to An Noor Charity Foundation's mission and objectives.
                    </span>
                  </label>
                  {errors.agreeToTerms && (
                    <p className="form-error">{errors.agreeToTerms.message}</p>
                  )}

                  <div className="flex items-center space-x-2 text-sm text-neutral-500">
                    <Lock className="w-4 h-4" />
                    <span>Your payment information is secure and encrypted</span>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    isLoading={isProcessing}
                  >
                    {isProcessing ? 'Processing...' : `Donate $${watchedValues.amount || 0}`}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </section>
  )
}