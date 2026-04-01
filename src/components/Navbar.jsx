import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Commercial', path: '/commercial' },
    { name: 'Residential', path: '/residential' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28 overflow-visible">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="Three Rivers Shine Cleaning"
              className="h-24 lg:h-28 w-auto object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <a
              href="tel:+14127125264"
              className="flex items-center text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">(412) 712-5264</span>
            </a>

            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}

              <a href="tel:+14127125264" className="flex items-center text-primary py-2">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-semibold">(412) 712-5264</span>
              </a>

              <a
                href="mailto:threeriversshine@gmail.com"
                className="flex items-center text-primary py-2"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="font-semibold">threeriversshine@gmail.com</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar