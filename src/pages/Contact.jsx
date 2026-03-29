import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    propertyType: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Quote Request from ${formData.name}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}
Property Type: ${formData.propertyType}

Message:
${formData.message}
    `
    window.location.href = `mailto:threeriversshine@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Your Free Quote</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Let's discuss your cleaning needs and create a custom plan for you
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-8">
                Reach out to us today for a free, no-obligation quote. We're here to answer your questions and help you get started.
              </p>

              <div className="space-y-6">
                <a href="tel:+14127125264" className="flex items-start group">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Phone</h3>
                    <p className="text-primary text-xl font-semibold">(412) 712-5264</p>
                    <p className="text-sm text-gray-600">Call us anytime</p>
                  </div>
                </a>

                <a href="mailto:threeriversshine@gmail.com" className="flex items-start group">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-accent transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Email</h3>
                    <p className="text-primary text-xl font-semibold break-all">threeriversshine@gmail.com</p>
                    <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </a>

                <div className="flex items-start">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Service Area</h3>
                    <p className="text-gray-700">Pittsburgh & Surrounding Areas</p>
                    <p className="text-sm text-gray-600">Serving all neighborhoods</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8am - 6pm</p>
                    <p className="text-gray-700">Saturday: 9am - 4pm</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-accent to-accent-dark text-primary p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-2">Special Offer!</h3>
                <p className="text-lg font-semibold">$20 Off Your First Service</p>
                <p className="text-sm mt-2">Mention this offer when you book</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-primary mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="(412) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential Cleaning</option>
                      <option value="commercial">Commercial Cleaning</option>
                      <option value="deep">Deep Cleaning</option>
                      <option value="move">Move In/Out Cleaning</option>
                      <option value="recurring">Recurring Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select property type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="office">Office</option>
                      <option value="retail">Retail Store</option>
                      <option value="medical">Medical Facility</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="gym">Gym/Fitness Center</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your cleaning needs, square footage, special requirements, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center shine-effect"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Quote Request
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We'll get back to you within 24 hours with a custom quote
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Prefer to Call?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Speak directly with our team for immediate assistance
            </p>
            <a
              href="tel:+14127125264"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-3" />
              (412) 712-5264
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
