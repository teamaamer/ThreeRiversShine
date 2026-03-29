import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import {
  Phone,
  Mail,
  Sparkles,
  Building2,
  Home as HomeIcon,
  Briefcase,
  CheckCircle,
  Star,
  Calendar,
  ClipboardCheck,
  Smile,
  ArrowRight,
  Quote,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from 'lucide-react'

const Home = () => {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  })
  
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  
  // Counter animation hook
  const useCounter = (end, duration = 2) => {
    const [count, setCount] = useState(0)
    const [hasAnimated, setHasAnimated] = useState(false)
    
    useEffect(() => {
      if (!hasAnimated) return
      
      let startTime
      let animationFrame
      
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
        
        setCount(Math.floor(progress * end))
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }
      
      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, hasAnimated])
    
    return { count, setHasAnimated }
  }
  
  const counter1 = useCounter(500, 2)
  const counter2 = useCounter(100, 2)
  const counter3 = useCounter(24, 1.5)
  
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }
  
  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' }
  }
  
  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: 'easeOut' }
  }
  
  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: 'easeOut' }
  }
  
  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15
      }
    },
    viewport: { once: true }
  }
  
  const staggerItem = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  }

  const services = [
    { icon: Building2, title: 'Commercial Cleaning', desc: 'Professional cleaning for offices, retail, and businesses' },
    { icon: HomeIcon, title: 'Residential Cleaning', desc: 'Spotless homes and apartments with care' },
    { icon: Briefcase, title: 'Office Cleaning', desc: 'Keep your workplace clean and productive' },
    { icon: Sparkles, title: 'Deep Cleaning', desc: 'Thorough cleaning for every corner' },
  ]

  const industries = [
    'Offices & Retail',
    'Medical Facilities',
    'Restaurants & Kitchens',
    'Manufacturing',
    'Gyms & Fitness Centers',
    'Homes & Apartments',
  ]

  const whyChooseUs = [
    'Professional & Reliable Team',
    'Eco-Friendly Cleaning Products',
    'Flexible Scheduling',
    'Competitive Pricing',
    'Satisfaction Guaranteed',
    'Fully Insured & Bonded',
  ]

  const bubbleItems = [
    { size: 84, top: '12%', left: '8%', delay: '0s', opacity: 0.22 },
    { size: 58, top: '22%', right: '16%', delay: '0.8s', opacity: 0.18 },
    { size: 110, bottom: '12%', left: '18%', delay: '1.4s', opacity: 0.16 },
    { size: 42, top: '48%', left: '42%', delay: '0.5s', opacity: 0.25 },
    { size: 68, bottom: '18%', right: '10%', delay: '1.7s', opacity: 0.2 },
    { size: 52, top: '16%', left: '62%', delay: '2.2s', opacity: 0.18 },
  ]

  const howItWorks = [
    { icon: Calendar, title: 'Book Online', desc: 'Schedule your cleaning in minutes through our easy online booking system' },
    { icon: ClipboardCheck, title: 'We Clean', desc: 'Our professional team arrives on time with all supplies and equipment' },
    { icon: Smile, title: 'Enjoy Your Space', desc: 'Relax in your spotless, fresh-smelling home or office' },
  ]

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Homeowner', text: 'Three Rivers Shine transformed my home! Their attention to detail is incredible. I highly recommend their services.', rating: 5 },
    { name: 'Michael Chen', role: 'Business Owner', text: 'Professional, reliable, and thorough. They keep our office spotless every week. Best cleaning service in Pittsburgh!', rating: 5 },
    { name: 'Emily Rodriguez', role: 'Property Manager', text: 'We use Three Rivers Shine for all our properties. They are consistent, trustworthy, and always deliver excellent results.', rating: 5 },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="overflow-hidden">
      <section ref={heroRef} className="relative isolate flex min-h-[62vh] items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-blue-950 text-white md:min-h-[68vh]">
        {/* background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-10 -top-16 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]" />
        </div>

        {/* realistic coded bubbles with parallax */}
        <motion.div 
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{ y: bubbleY }}
        >
          {bubbleItems.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full animate-float bubble-hover cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: bubble.opacity, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.1, y: -5 }}
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                top: bubble.top,
                left: bubble.left,
                right: bubble.right,
                bottom: bubble.bottom,
                animationDelay: bubble.delay,
                background:
                  'radial-gradient(circle at 30% 28%, rgba(255,255,255,0.9), rgba(255,255,255,0.45) 22%, rgba(255,255,255,0.12) 48%, rgba(180,220,255,0.08) 68%, rgba(255,255,255,0.02) 100%)',
                border: '1.5px solid rgba(255,255,255,0.26)',
                boxShadow:
                  'inset -8px -8px 14px rgba(255,255,255,0.35), inset 8px 8px 12px rgba(0,0,0,0.08), 0 10px 30px rgba(255,255,255,0.05)',
                opacity: bubble.opacity,
                backdropFilter: 'blur(2px)',
              }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  width: '24%',
                  height: '24%',
                  top: '18%',
                  left: '20%',
                  background: 'rgba(255,255,255,0.75)',
                  filter: 'blur(2px)',
                }}
              />
            </motion.div>
          ))}

          {/* sparkle dots */}
          <motion.div 
            className="absolute right-[22%] top-[18%] h-2 w-2 animate-pulse rounded-full bg-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />
          <motion.div 
            className="absolute left-[20%] top-[38%] h-2.5 w-2.5 animate-pulse rounded-full bg-accent/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-[22%] right-[28%] h-2 w-2 animate-pulse rounded-full bg-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <div className="mb-4 inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-bold text-primary shadow-lg">
                ⭐ $20 Off Your First Service
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
                Bringing the Best of <span className="text-accent">Pittsburgh Clean</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:text-xl">
                Professional cleaning services for homes, offices, and businesses across Pittsburgh.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-bold text-primary transition-all duration-200 hover:scale-105 hover:bg-accent-dark button-glow shine-effect"
                >
                  Get Free Quote
                </Link>

                <a
                  href="tel:+14127125264"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-bold text-primary transition-all duration-200 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </div>

              <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center">
                <a href="tel:+14127125264" className="flex items-center text-white/90 hover:text-white transition-colors group">
                  <Phone className="mr-2 h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">(412) 712-5264</span>
                </a>

                <a href="mailto:threeriversshine@gmail.com" className="flex items-center text-white/90 hover:text-white transition-colors group">
                  <Mail className="mr-2 h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">threeriversshine@gmail.com</span>
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all cursor-default group">
                  <CheckCircle className="mr-2 h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold md:text-sm">Licensed & Insured</span>
                </div>

                <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all cursor-default group">
                  <Star className="mr-2 h-4 w-4 text-accent group-hover:scale-110 transition-transform group-hover:rotate-12" />
                  <span className="text-xs font-semibold md:text-sm">5-Star Rated</span>
                </div>

                <div className="flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all cursor-default group">
                  <Sparkles className="mr-2 h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold md:text-sm">Eco-Friendly</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden items-center justify-center md:flex lg:justify-end"
            >
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 scale-110 rounded-full bg-white/10 blur-3xl"
                  animate={{ scale: [1.1, 1.15, 1.1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.img
                  src="/logo.png"
                  alt="Three Rivers Shine"
                  className="relative z-10 w-full max-w-[360px] animate-float object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:max-w-[460px]"
                  style={{ scale: logoScale }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-16 overflow-hidden wave-divider">
        {/* Decorative background elements */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200 rounded-full glow-orb" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent rounded-full glow-orb" style={{ animationDelay: '5s' }}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...slideInLeft}
            className="mb-12 text-center"
          >
            <motion.h2 
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Clean with Care and Excellence
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-3xl text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We provide professional cleaning services tailored to your space, whether it's your home, office, or business facility.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl card-lift group cursor-pointer"
              >
                <motion.div 
                  className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shine-effect group-hover:shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="h-8 w-8 group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="mb-2 text-xl font-bold text-primary">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-gradient-to-br from-accent/10 via-yellow-50 to-accent/10 py-20 overflow-hidden wave-divider">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent rounded-full glow-orb" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary rounded-full glow-orb" style={{ animationDelay: '6s' }}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Getting your space professionally cleaned is simple and hassle-free
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white mb-6 relative group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="w-10 h-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {index + 1}
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 -right-6 lg:-right-12">
                    <ArrowRight className="w-8 h-8 text-accent opacity-30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 py-16 overflow-hidden bg-dots wave-divider">
        {/* Decorative background elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary rounded-full glow-orb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent rounded-full glow-orb" style={{ animationDelay: '7s' }}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            {...scaleIn}
            className="mb-12 text-center"
          >
            <motion.h2 
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Industries We Serve
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Trusted by businesses across Pittsburgh
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                variants={staggerItem}
                whileHover={{ x: 10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="flex items-center rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl card-lift cursor-pointer group"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="group-hover:scale-125 transition-transform"
                >
                  <Sparkles className="mr-4 h-6 w-6 flex-shrink-0 text-accent group-hover:text-accent-dark" />
                </motion.div>
                <span className="text-lg font-semibold text-gray-800">{industry}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 overflow-hidden bg-texture wave-divider">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-300 rounded-full glow-orb" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-primary rounded-full glow-orb" style={{ animationDelay: '8s' }}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            {...slideInRight}
            className="mb-12 text-center"
          >
            <motion.h2 
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Three Rivers Shine?
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Experience the difference with our professional team
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex items-start rounded-xl bg-gradient-to-br from-blue-50 to-white p-6 shadow-md transition-all duration-300 hover:shadow-lg card-lift cursor-pointer group"
              >
                <CheckCircle className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-accent group-hover:scale-110 group-hover:rotate-12 transition-all" />
                <span className="text-lg font-semibold text-gray-800">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-white py-20 overflow-hidden wave-divider">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full glow-orb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent rounded-full glow-orb" style={{ animationDelay: '7s' }}></div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across Pittsburgh
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
              <Quote className="w-16 h-16 text-accent/20 mb-6" />
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic relative z-10">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="font-bold text-lg text-primary">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-accent w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="pointer-events-auto bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors -ml-4"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="pointer-events-auto bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors -mr-4"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-primary-dark to-gray-900 py-20 overflow-hidden text-white">
        <div className="absolute inset-0 bg-texture opacity-20"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent rounded-full glow-orb" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full glow-orb" style={{ animationDelay: '8s' }}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              See The Difference
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real results from our professional cleaning services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-20 h-20 text-gray-600" />
                </div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                  Before
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">Image placeholder - Add your before photos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-white rounded-2xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-20 h-20 text-accent" />
                </div>
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                  After
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white text-center px-4">Image placeholder - Add your after photos</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-primary px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 button-glow"
            >
              See Your Space Transform
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-primary via-blue-900 to-primary-dark py-16 text-white overflow-hidden wave-divider-top">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-texture opacity-30"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-accent rounded-full glow-orb" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-400 rounded-full glow-orb" style={{ animationDelay: '6s' }}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Serving Pittsburgh with Pride
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-200">
              We're proud to serve the Pittsburgh community with exceptional cleaning services. From the North Side to the South Side, and everywhere in between.
            </p>
          </motion.div>

          <motion.div 
            className="grid text-center md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div
              variants={staggerItem}
              onViewportEnter={() => counter1.setHasAnimated(true)}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="stat-brighten cursor-pointer"
            >
              <motion.div 
                className="mb-2 text-5xl font-bold text-accent"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {counter1.count}+
              </motion.div>
              <div className="text-xl">Happy Clients</div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              onViewportEnter={() => counter2.setHasAnimated(true)}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="stat-brighten cursor-pointer"
            >
              <motion.div 
                className="mb-2 text-5xl font-bold text-accent"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {counter2.count}%
              </motion.div>
              <div className="text-xl">Satisfaction Rate</div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              onViewportEnter={() => counter3.setHasAnimated(true)}
              whileHover={{ scale: 1.1, y: -10 }}
              transition={{ duration: 0.3 }}
              className="stat-brighten cursor-pointer"
            >
              <motion.div 
                className="mb-2 text-5xl font-bold text-accent"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {counter3.count}/7
              </motion.div>
              <div className="text-xl">Customer Support</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-accent via-yellow-400 to-accent py-20 overflow-hidden diagonal-section">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-texture opacity-20"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-white rounded-full glow-orb" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary rounded-full glow-orb" style={{ animationDelay: '9s' }}></div>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-primary md:text-5xl">
              Ready for a Spotless Space?
            </h2>
            <p className="mb-8 text-xl text-primary-dark">
              Get your free quote today and experience the Three Rivers Shine difference
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-full bg-primary px-10 py-4 text-lg font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-primary-dark hover:shadow-2xl"
              >
                Get Free Quote
              </Link>

              <a
                href="tel:+14127125264"
                className="flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-primary transition-all duration-200 hover:scale-105 hover:bg-gray-100 hover:shadow-xl group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                (412) 712-5264
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Sticky CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: showCTA ? 1 : 0, y: showCTA ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
        style={{ pointerEvents: showCTA ? 'auto' : 'none' }}
      >
        <Link
          to="/contact"
          className="flex items-center gap-3 bg-accent hover:bg-accent-dark text-primary px-6 py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-200 hover:scale-105 button-glow group"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Get Free Quote</span>
          <span className="sm:hidden">Quote</span>
        </Link>
      </motion.div>
    </div>
  )
}

export default Home