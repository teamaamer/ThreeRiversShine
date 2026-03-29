import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building2, Home, Briefcase, Sparkles, Users, Utensils, Dumbbell, Stethoscope, Factory, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Cleaning',
      description: 'Professional cleaning services for all types of commercial facilities',
      features: ['Daily/Weekly/Monthly schedules', 'After-hours service', 'Custom cleaning plans', 'Quality assurance'],
      link: '/commercial'
    },
    {
      icon: Home,
      title: 'Residential Cleaning',
      description: 'Keep your home spotless with our residential cleaning services',
      features: ['One-time deep cleaning', 'Recurring service options', 'Move in/out cleaning', 'Eco-friendly products'],
      link: '/residential'
    },
    {
      icon: Briefcase,
      title: 'Office Cleaning',
      description: 'Maintain a clean and productive workspace for your team',
      features: ['Desk and surface cleaning', 'Breakroom sanitization', 'Restroom cleaning', 'Floor care'],
      link: '/commercial'
    },
    {
      icon: Stethoscope,
      title: 'Medical Facilities',
      description: 'Specialized cleaning for healthcare environments',
      features: ['Hospital-grade disinfection', 'OSHA compliance', 'Biohazard handling', 'Waiting room care'],
      link: '/commercial'
    },
    {
      icon: Utensils,
      title: 'Restaurant & Kitchen',
      description: 'Health code compliant cleaning for food service',
      features: ['Kitchen deep cleaning', 'Grease removal', 'Floor sanitization', 'Dining area care'],
      link: '/commercial'
    },
    {
      icon: Factory,
      title: 'Manufacturing Facilities',
      description: 'Industrial cleaning for production environments',
      features: ['Equipment cleaning', 'Floor maintenance', 'Warehouse cleaning', 'Safety compliance'],
      link: '/commercial'
    },
    {
      icon: Dumbbell,
      title: 'Gyms & Fitness Centers',
      description: 'Keep your fitness facility clean and hygienic',
      features: ['Equipment sanitization', 'Locker room cleaning', 'Floor care', 'Mirror and glass cleaning'],
      link: '/commercial'
    },
    {
      icon: Sparkles,
      title: 'Deep Cleaning',
      description: 'Thorough cleaning for every corner of your space',
      features: ['Detailed surface cleaning', 'Hard-to-reach areas', 'Appliance cleaning', 'Baseboard and trim'],
      link: '/residential'
    },
    {
      icon: Users,
      title: 'Move In/Out Cleaning',
      description: 'Complete cleaning for moving transitions',
      features: ['Empty space cleaning', 'Appliance cleaning', 'Cabinet and closet cleaning', 'Window cleaning'],
      link: '/residential'
    },
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive cleaning solutions for every need
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shine-effect">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-accent mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary hover:text-accent font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-accent to-accent-dark text-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Need a Custom Cleaning Plan?
            </h2>
            <p className="text-xl mb-8">
              We'll create a tailored cleaning solution that fits your specific needs and budget
            </p>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 inline-block"
            >
              Get Your Free Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
