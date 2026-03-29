import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Sparkles, Package, Calendar, CheckCircle, Heart, Leaf, Clock } from 'lucide-react'

const Residential = () => {
  const services = [
    {
      icon: Home,
      title: 'Regular Home Cleaning',
      description: 'Keep your home consistently clean with our recurring service',
      features: ['Weekly or bi-weekly service', 'Customizable cleaning checklist', 'Same cleaner each visit', 'Flexible scheduling']
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Thorough, detailed cleaning for every corner of your home',
      features: ['Baseboard and trim cleaning', 'Inside appliances', 'Cabinet and drawer cleaning', 'Hard-to-reach areas']
    },
    {
      icon: Package,
      title: 'Move In/Out Cleaning',
      description: 'Complete cleaning for moving transitions',
      features: ['Empty space cleaning', 'Appliance deep clean', 'Window and blind cleaning', 'Closet and cabinet cleaning']
    },
  ]

  const benefits = [
    { icon: Heart, title: 'Care & Attention', desc: 'We treat your home like our own' },
    { icon: Leaf, title: 'Eco-Friendly', desc: 'Safe, green cleaning products' },
    { icon: Clock, title: 'Flexible Hours', desc: 'We work around your schedule' },
    { icon: CheckCircle, title: 'Satisfaction Guaranteed', desc: '100% happiness or we re-clean' },
  ]

  const cleaningAreas = [
    'Kitchen (counters, sinks, appliances)',
    'Bathrooms (tubs, showers, toilets, mirrors)',
    'Living areas (dusting, vacuuming, mopping)',
    'Bedrooms (making beds, organizing)',
    'Windows and mirrors',
    'Baseboards and trim',
    'Trash removal',
    'And more...',
  ]

  return (
    <div>
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Residential Cleaning</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Professional home cleaning services that give you more time for what matters
            </p>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Book Your Cleaning
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Residential Services
            </h2>
            <p className="text-xl text-gray-600">
              Flexible cleaning solutions for your home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shine-effect">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                What We Clean
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our comprehensive cleaning covers every area of your home
              </p>
              <ul className="space-y-3">
                {cleaningAreas.map((area, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Sparkles className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="bg-white p-6 rounded-xl shadow-md text-center"
                >
                  <div className="bg-accent text-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-dark text-white p-12 rounded-3xl shadow-2xl text-center"
          >
            <Calendar className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Recurring Cleaning Plans
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Save time and money with our recurring home cleaning service. Choose the frequency that works best for you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">Weekly</div>
                <div className="text-gray-200">Best Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">Bi-Weekly</div>
                <div className="text-gray-200">Most Popular</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">Monthly</div>
                <div className="text-gray-200">Deep Clean</div>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Schedule Your First Cleaning
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Special Offer: $20 Off First Service
            </h2>
            <p className="text-xl text-primary-dark mb-8">
              Experience the Three Rivers Shine difference with our new customer discount
            </p>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Claim Your Discount
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Residential
