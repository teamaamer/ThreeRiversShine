import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Users, Heart, Shield, Target, Sparkles } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every cleaning job, big or small'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We treat every space with the same care we would our own'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Fully insured, bonded, and background-checked professionals'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on'
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Pittsburgh's trusted cleaning partner
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <img src="/logo.png" alt="Three Rivers Shine" className="h-32 w-auto mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <div className="text-lg text-gray-700 space-y-4 text-left">
              <p>
                Three Rivers Shine Cleaning was founded with a simple mission: to bring exceptional cleaning services to the Pittsburgh community. Named after the three rivers that define our beautiful city, we're proud to serve the neighborhoods and businesses that make Pittsburgh special.
              </p>
              <p>
                We understand that a clean space is more than just appearances—it's about creating healthy, productive, and welcoming environments where people can thrive. Whether it's your home, office, or business facility, we approach every job with the same dedication to quality and attention to detail.
              </p>
              <p>
                Our team of professional cleaners is carefully selected, thoroughly trained, and committed to delivering the highest standards of service. We use eco-friendly products and proven cleaning methods to ensure your space is not just clean, but truly spotless.
              </p>
              <p>
                As a locally-owned business, we're invested in our community. We take pride in building lasting relationships with our clients and contributing to the cleanliness and well-being of Pittsburgh.
              </p>
            </div>
          </motion.div>
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shine-effect">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose Three Rivers Shine?
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start">
                  <Sparkles className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Professional Team</h3>
                    <p>Our cleaners are experienced, trained, and background-checked professionals who take pride in their work.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Quality Assurance</h3>
                    <p>We maintain the highest standards and guarantee your satisfaction with every cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Eco-Friendly Products</h3>
                    <p>We use environmentally safe cleaning products that are effective and safe for your family and pets.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Flexible Scheduling</h3>
                    <p>We work around your schedule with convenient appointment times that fit your needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Sparkles className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Local & Trusted</h3>
                    <p>As a Pittsburgh-based company, we're committed to serving our community with integrity and excellence.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary-dark text-white p-10 rounded-3xl shadow-2xl"
            >
              <Users className="w-16 h-16 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-lg text-gray-200 mb-6">
                We're committed to providing exceptional cleaning services that exceed your expectations. Every member of our team is dedicated to making your space shine.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Fully Insured & Bonded</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Background-Checked Staff</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Eco-Friendly Products</span>
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-primary-dark mb-8">
              Join hundreds of satisfied customers across Pittsburgh
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

export default About
