import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Three Rivers Shine Cleaning" className="h-32 lg:h-36 w-auto object-contain mb-4" />
            <p className="text-gray-300 text-sm">
              Professional cleaning services for homes and businesses in Pittsburgh.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/commercial" className="text-gray-300 hover:text-accent transition-colors">Commercial</Link></li>
              <li><Link to="/residential" className="text-gray-300 hover:text-accent transition-colors">Residential</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Commercial Cleaning</li>
              <li>Residential Cleaning</li>
              <li>Office Cleaning</li>
              <li>Medical Facilities</li>
              <li>Restaurant Cleaning</li>
              <li>Move In/Out Cleaning</li>
              <li>Deep Cleaning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+14127125264" className="flex items-center text-gray-300 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 mr-3" />
                <span>(412) 712-5264</span>
              </a>
              <a href="mailto:threeriversshine@gmail.com" className="flex items-center text-gray-300 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 mr-3" />
                <span>threeriversshine@gmail.com</span>
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1" />
                <span>Serving Pittsburgh & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Three Rivers Shine Cleaning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
