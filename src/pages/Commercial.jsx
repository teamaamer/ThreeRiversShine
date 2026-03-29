import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, Stethoscope, Utensils, Factory, Dumbbell, Briefcase, CheckCircle, Clock, Shield, Award } from 'lucide-react'

const Commercial = () => {
  const industries = [
    {
      icon: Briefcase,
      title: 'Offices & Retail',
      description: 'Professional cleaning for corporate offices, retail stores, and business spaces',
      services: ['Daily office cleaning', 'Window and glass cleaning', 'Floor maintenance', 'Restroom sanitization', 'Breakroom cleaning']
    },
    {
      icon: Stethoscope,
      title: 'Medical Facilities',
      description: 'Hospital-grade cleaning for healthcare environments',
      services: ['Exam room sanitization', 'Waiting area cleaning', 'OSHA compliance', 'Biohazard disposal', 'Medical-grade disinfection']
    },
    {
      icon: Utensils,
      title: 'Restaurants & Kitchens',
      description: 'Health code compliant cleaning for food service establishments',
      services: ['Kitchen deep cleaning', 'Grease trap cleaning', 'Dining area maintenance', 'Floor sanitization', 'Equipment cleaning']
    },
    {
      icon: Factory,
      title: 'Manufacturing Facilities',
      description: 'Industrial cleaning solutions for production environments',
      services: ['Warehouse cleaning', 'Equipment maintenance', 'Floor care', 'Safety compliance', 'Production area cleaning']
    },
    {
      icon: Dumbbell,
      title: 'Gyms & Fitness Centers',
      description: 'Hygienic cleaning for fitness facilities',
      services: ['Equipment sanitization', 'Locker room cleaning', 'Shower maintenance', 'Floor care', 'Mirror and glass cleaning']
    },
  ]

  const benefits = [
    { icon: Clock, title: 'Flexible Scheduling', desc: 'We work around your business hours' },
    { icon: Shield, title: 'Fully Insured', desc: 'Complete protection for your facility' },
    { icon: Award, title: 'Quality Guaranteed', desc: '100% satisfaction or we re-clean' },
    { icon: CheckCircle, title: 'Trained Professionals', desc: 'Experienced and background-checked staff' },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Commercial Cleaning</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Professional cleaning solutions for businesses across Pittsburgh
            </p>
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Request a Quote
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized cleaning for every type of commercial facility
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shine-effect">
                  <industry.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.services.map((service, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      {service}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Businesses Choose Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="bg-accent text-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-primary-dark text-white p-12 rounded-3xl shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Custom Cleaning Plans
            </h2>
            <p className="text-xl text-gray-200 mb-8 text-center">
              Every business is unique. We create customized cleaning schedules and plans that fit your specific needs, budget, and facility requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">Daily</div>
                <div className="text-gray-200">Regular maintenance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">Weekly</div>
                <div className="text-gray-200">Scheduled service</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">Monthly</div>
                <div className="text-gray-200">Deep cleaning</div>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent-dark text-primary px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
              >
                Get Your Custom Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Commercial
