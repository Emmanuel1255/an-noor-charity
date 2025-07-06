import { useState } from 'react'
import { Calendar, MapPin, Users, Target, ArrowRight, CheckCircle} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const featuredPrograms = [
  {
    id: 'water-wells-freetown',
    title: 'Borehole Project - Kenema',
    category: 'Water & Sanitation',
    status: 'Active',
    startDate: '2024-01-15',
    endDate: '2024-12-31',
    location: 'Kenema, Sierra Leone',
    beneficiaries: 100,
    progress: 75,
    totalBudget: 15000,
    raised: 11250,
    description: 'Construction of a new borehole in underserved communities around Freetown, providing clean drinking water access to over 100 people.',
    objectives: [
      'Build a new borehole in target communities',
      'Install solar-powered water pumps',
      'Train local maintenance teams',
      'Conduct hygiene education workshops'
    ],
    achievements: [
      '1 borehole completed and operational',
      '100 people now have clean water access',
      '15 local technicians trained',
      '20 hygiene education sessions conducted'
    ],
    images: [
      './programs/borehole1.jpeg',
      './programs/borehole2.jpeg',
      './programs/borehole3.jpeg'
    ],
    gallery: true
  },
//   {
//     id: 'education-scholarship',
//     title: 'Educational Scholarship Program 2024',
//     category: 'Education',
//     status: 'Active',
//     startDate: '2024-09-01',
//     endDate: '2025-06-30',
//     location: 'Multiple Locations',
//     beneficiaries: 10,
//     progress: 60,
//     totalBudget: 12000,
//     raised: 7200,
//     description: 'Providing full scholarships to 10 underprivileged children, covering school fees, uniforms, books, and other educational expenses.',
//     objectives: [
//       'Support 10 students with full scholarships',
//       'Provide educational materials and uniforms',
//       'Offer tutoring and mentorship programs',
//       'Monitor academic progress and wellbeing'
//     ],
//     achievements: [
//       ' 10 students enrolled in quality schools',
//       '100% attendance rate maintained',
//       '12 students achieved honor roll status',
//       '30 families received financial literacy training'
//     ],
//     images: [
//       '/api/placeholder/400/300',
//       '/api/placeholder/400/300',
//       '/api/placeholder/400/300'
//     ],
//     gallery: true
//   },
//   {
//     id: 'emergency-relief-floods',
//     title: 'Flood Relief Emergency Response',
//     category: 'Emergency Relief',
//     status: 'Completed',
//     startDate: '2024-08-10',
//     endDate: '2024-09-15',
//     location: 'Rural Communities, Sierra Leone',
//     beneficiaries: 200,
//     progress: 100,
//     totalBudget: 8000,
//     raised: 8000,
//     description: 'Emergency response to devastating floods that affected 200 families, providing immediate relief including food, shelter, and medical care.',
//     objectives: [
//       'Provide emergency food supplies',
//       'Set up temporary shelter facilities',
//       'Deliver medical aid and supplies',
//       'Support community recovery efforts'
//     ],
//     achievements: [
//       '200 families provided with food for 2 weeks',
//       '50 temporary shelters established',
//       '300 people received medical attention',
//       'All affected communities reached within 48 hours'
//     ],
//     images: [
//       '/api/placeholder/400/300',
//       '/api/placeholder/400/300',
//       '/api/placeholder/400/300'
//     ],
//     gallery: true
//   },
//   {
//     id: 'orphan-care-center',
//     title: 'Al-Nour Orphan Care Center',
//     category: 'Orphan Care',
//     status: 'Active',
//     startDate: '2023-03-01',
//     endDate: 'Ongoing',
//     location: '41 Goderich Street, Freetown',
//     beneficiaries: 35,
//     progress: 85,
//     totalBudget: 25000,
//     raised: 21250,
//     description: 'Comprehensive care facility providing housing, education, healthcare, and emotional support to 35 orphaned children.',
//     objectives: [
//       'Provide safe housing for 35 children',
//       'Ensure quality education for all residents',
//       'Offer healthcare and psychological support',
//       'Prepare children for independent living'
//     ],
//     achievements: [
//       '35 children in safe, loving environment',
//       '100% school enrollment rate',
//       '25 children received counseling support',
//       '8 older children in vocational training'
//     ],
//     images: [
//       '/api/placeholder/400/300',
//       '/api/placeholder/400/300',
//       '/api/placeholder/400/300'
//     ],
//     gallery: true
//   }
]

export function FeaturedPrograms() {
  const [selectedProgram, setSelectedProgram] = useState(featuredPrograms[0])
  const [activeTab, setActiveTab] = useState<'overview' | 'progress' | 'gallery'>('overview')
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const openModal = (img: string) => {
    setModalImage(img)
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
    setModalImage(null)
  }

  return (
    <section id="featured-programs" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Featured Programs
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Take a closer look at some of our most impactful programs and see 
            how your support is creating real change in communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Program List */}
          <div className="lg:col-span-1 space-y-4">
            {featuredPrograms.map((program) => (
              <Card 
                key={program.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedProgram.id === program.id ? 'ring-2 ring-primary-500 shadow-lg' : ''
                }`}
                onClick={() => setSelectedProgram(program)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900 text-sm leading-tight mb-1">
                        {program.title}
                      </h3>
                      <p className="text-xs text-neutral-500">{program.category}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      program.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : program.status === 'Completed'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 text-xs text-neutral-600">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {program.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {program.beneficiaries} beneficiaries
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mt-3">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Progress</span>
                      <span>{program.progress}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${program.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Program Details */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl text-neutral-900 mb-2">
                      {selectedProgram.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-neutral-600">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(selectedProgram.startDate).toLocaleDateString()}
                        {selectedProgram.endDate !== 'Ongoing' && ` - ${new Date(selectedProgram.endDate).toLocaleDateString()}`}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {selectedProgram.location}
                      </span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProgram.status === 'Active' 
                      ? 'bg-green-100 text-green-700' 
                      : selectedProgram.status === 'Completed'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {selectedProgram.status}
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'progress', label: 'Progress' },
                    { id: 'gallery', label: 'Gallery' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab.id 
                          ? 'bg-white text-primary-600 shadow-sm' 
                          : 'text-neutral-600 hover:text-neutral-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <p className="text-neutral-600 leading-relaxed">
                      {selectedProgram.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Objectives */}
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 text-primary-600 mr-2" />
                          Objectives
                        </h4>
                        <ul className="space-y-2">
                          {selectedProgram.objectives.map((objective, idx) => (
                            <li key={idx} className="text-neutral-600 text-sm flex items-start">
                              <ArrowRight className="w-3 h-3 text-primary-600 mr-2 mt-1 flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                          Achievements
                        </h4>
                        <ul className="space-y-2">
                          {selectedProgram.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-neutral-600 text-sm flex items-start">
                              <CheckCircle className="w-3 h-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-4 p-4 bg-primary-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{selectedProgram.beneficiaries}</div>
                        <div className="text-xs text-neutral-600">Beneficiaries</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">${selectedProgram.raised.toLocaleString()}</div>
                        <div className="text-xs text-neutral-600">Raised</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-600">{selectedProgram.progress}%</div>
                        <div className="text-xs text-neutral-600">Complete</div>
                      </div>
                    </div>
                    {/* image */}
                    <div className="flex justify-center">
                      <img src={selectedProgram.images[0]} alt={selectedProgram.title} className="max-w-full h-auto" />
                    </div>
                  </div>
                )}

                {/* Progress Tab */}
                {activeTab === 'progress' && (
                  <div className="space-y-6">
                    {/* Overall Progress */}
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-4">Overall Progress</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Project Completion</span>
                            <span>{selectedProgram.progress}%</span>
                          </div>
                          <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div 
                              className="bg-primary-600 h-3 rounded-full transition-all duration-300"
                              style={{ width: `${selectedProgram.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Funding Progress</span>
                            <span>{Math.round((selectedProgram.raised / selectedProgram.totalBudget) * 100)}%</span>
                          </div>
                          <div className="w-full bg-neutral-200 rounded-full h-3">
                            <div 
                              className="bg-green-600 h-3 rounded-full transition-all duration-300"
                              style={{ width: `${(selectedProgram.raised / selectedProgram.totalBudget) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Financial Breakdown */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h5 className="font-medium text-neutral-900 mb-3">Financial Status</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Total Budget:</span>
                            <span className="font-medium">${selectedProgram.totalBudget.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Amount Raised:</span>
                            <span className="font-medium text-green-600">${selectedProgram.raised.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Remaining:</span>
                            <span className="font-medium text-red-600">${(selectedProgram.totalBudget - selectedProgram.raised).toLocaleString()}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-neutral-50 rounded-lg p-4">
                        <h5 className="font-medium text-neutral-900 mb-3">Timeline</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Start Date:</span>
                            <span>{new Date(selectedProgram.startDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>End Date:</span>
                            <span>{selectedProgram.endDate === 'Ongoing' ? 'Ongoing' : new Date(selectedProgram.endDate).toLocaleDateString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration:</span>
                            <span>
                              {selectedProgram.endDate === 'Ongoing' 
                                ? 'Ongoing Project' 
                                : `${Math.ceil((new Date(selectedProgram.endDate).getTime() - new Date(selectedProgram.startDate).getTime()) / (1000 * 60 * 60 * 24 * 30))} months`
                              }
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Support Button */}
                    <Button className="w-full md:w-auto">
                      <a href={`/donate?program=${selectedProgram.id}`}>
                        Support This Program
                      </a>
                    </Button>
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {selectedProgram.images.map((image, idx) => (
                        <div key={idx} className="aspect-video bg-neutral-200 rounded-lg overflow-hidden cursor-pointer group" onClick={() => openModal(image)}>
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                            <div className="text-center space-y-2 relative">
                              <img src={image} alt={`Program Image ${idx + 1}`} className="w-full h-full object-cover group-hover:opacity-80 transition" />
                              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-white font-bold text-lg bg-black bg-opacity-30">View</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Modal for viewing image */}
                    {modalOpen && modalImage && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
                        <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
                          <button onClick={closeModal} className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-neutral-200 transition" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                          <img src={modalImage} alt="Enlarged program" className="w-full h-auto rounded-lg shadow-lg object-contain max-h-[80vh] bg-white" />
                        </div>
                      </div>
                    )}
                    <p className="text-sm text-neutral-500 text-center">
                      Photo gallery showcasing the progress and impact of {selectedProgram.title}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}