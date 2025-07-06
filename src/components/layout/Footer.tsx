import { Link } from 'react-router-dom'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerNavigation = {
  main: [
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    // { name: 'Donate', href: '/donate' },
    // { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ],
  programs: [
    { name: 'Emergency Relief', href: '/programs#emergency' },
    { name: 'Islamic Education Support', href: '/programs#education' },
    { name: 'Ramadan Support', href: '/programs#healthcare' },
    { name: 'Orphan Care', href: '/programs#orphan-care' },
    { name: 'Community Development', href: '/programs#community' },
  ],
  // involved: [
  //   { name: 'Become a Member', href: '/get-involved#membership' },
  //   { name: 'Volunteer', href: '/get-involved#volunteer' },
  //   { name: 'Partner with Us', href: '/get-involved#partner' },
  //   { name: 'Fundraise', href: '/get-involved#fundraise' },
  //   { name: 'Corporate Partnership', href: '/get-involved#corporate' },
  // ],
  donate: [
    { name: 'One-time Donation', href: '/donate#one-time' },
    { name: 'Monthly Giving', href: '/donate#monthly' },
    { name: 'Zakat', href: '/donate#zakat' },
    { name: 'Sadaqah', href: '/donate#sadaqah' },
    { name: 'Emergency Fund', href: '/donate#emergency' },
  ],
}

const socialMedia = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
]

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center">
                  <Heart className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">An-Noor</div>
                <div className="text-sm text-neutral-400 -mt-1">Charity Foundation</div>
              </div>
            </Link>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Dedicated to serving Allah by helping those in need. Our mission is to provide 
              sustainable support and create lasting positive impact in communities worldwide 
              through Islamic principles of charity and compassion.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300">41 Goderich Street, Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300">+232 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-accent-500 flex-shrink-0" />
                <span className="text-neutral-300">info@annoorcharity.org</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerNavigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programs</h3>
            <ul className="space-y-3">
              {footerNavigation.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-3">
              {footerNavigation.involved.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-neutral-300 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Islamic Quote */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="text-center">
            <p className="text-lg md:text-xl font-medium text-accent-400 mb-2 arabic">
              "وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا"
            </p>
            <p className="text-neutral-300 text-sm md:text-base">
              "And whoever saves a life, it is as if he has saved all of mankind" - Quran 5:32
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t text-center border-neutral-800">
        <div className="container">
          <div className="flex  flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} An Noor Charity Foundation. All rights reserved.
            </div>
            {/* <div className="flex space-x-6 text-sm text-neutral-400">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/transparency" className="hover:text-white transition-colors">
                Financial Transparency
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}