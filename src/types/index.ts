// Common types for the application

export interface NavItem {
  title: string
  href: string
  description?: string
  disabled?: boolean
  external?: boolean
}

export interface ExecutiveMember {
  id: string
  name: string
  position: string
  bio?: string
  image?: string
  email?: string
  phone?: string
}

export interface Program {
  id: string
  title: string
  description: string
  image?: string
  category: string
  status: 'active' | 'completed' | 'planned'
  startDate: string
  endDate?: string
  beneficiaries?: number
  location?: string
  gallery?: string[]
}

export interface DonationCategory {
  id: string
  name: string
  description: string
  minimumAmount?: number
  suggestedAmounts?: number[]
  isZakat?: boolean
  isSadaqah?: boolean
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  image?: string
  author: string
  publishedAt: string
  category: string
  tags?: string[]
  featured?: boolean
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  website?: string
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

export interface Member {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  membershipType: 'individual' | 'organization'
  joinDate: string
  status: 'active' | 'inactive'
}

export interface Meeting {
  id: string
  title: string
  type: 'AGM' | 'SGM' | 'Executive'
  date: string
  time: string
  location: string
  agenda?: string[]
  documents?: string[]
  status: 'scheduled' | 'completed' | 'cancelled'
}

export interface Donation {
  id: string
  amount: number
  currency: string
  category: string
  donorName?: string
  donorEmail?: string
  isAnonymous: boolean
  isRecurring: boolean
  recurringFrequency?: 'monthly' | 'quarterly' | 'yearly'
  message?: string
  date: string
  status: 'pending' | 'completed' | 'failed'
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface FormError {
  field: string
  message: string
}

export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  image?: string
  canonical?: string
}