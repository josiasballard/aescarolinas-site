import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TestimonialCard from '@/components/TestimonialCard.jsx';
function HomePage() {
  const testimonials = [/* {
    name: 'Maya Chen',
    location: 'Emerald Isle, NC',
    rating: 5,
    review: 'Outstanding work on our kitchen remodel. The team was professional, punctual, and cleaned up thoroughly each day. Our new lighting makes the space feel completely transformed.'
  }, {
    name: 'Robert Martinez',
    location: 'Swansboro, NC',
    rating: 5,
    review: 'Called them for an emergency panel upgrade after our inspection. They came out the same day, explained everything clearly, and had us back up and running within 24 hours. Highly recommend.'
  }, {
    name: 'Linda Patterson',
    location: 'Jacksonville, NC',
    rating: 5,
    review: 'We hired Advanced Electrical for our new construction project. Their attention to detail and code compliance was impressive. Fair pricing and excellent communication throughout.'
  }, {
    name: 'David Kim',
    location: 'Hubert, NC',
    rating: 5,
    review: 'Best electrician we have worked with. Fixed a tricky wiring issue that two other companies could not diagnose. Professional service at a reasonable rate.'
  } */];
  return <>
      <Helmet>
        <title>Advanced Electrical Solutions | Licensed Electricians</title>
        <meta name="description" content="Professional electrical services for residential and commercial properties in Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and surrounding areas. Licensed, insured, and trusted since 2008." />
      </Helmet>

      <Header />

      <main>
        <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/images/dock-swansboro.jpg" alt="Swansboro, NC" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{
              letterSpacing: '-0.02em'
            }}>
                Professional electrical services for your home and business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-prose">
                Licensed and insured electricians serving Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and surrounding areas with reliable residential and commercial electrical solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#8bb974] text-white hover:bg-[#739b5f] hover:text-white transition-all duration-200 active:scale-[0.98] gap-2">
                    Get a free quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+19103829513">
                  <Button size="lg" variant="outline" className="gap-2 transition-all duration-200 active:scale-[0.98]">
                    Call (910) 382-9513
                  </Button>
                </a>
              </div>
              <div className="flex items-start sm:items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 sm:mt-0" />
                <span>Serving Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and the surrounding areas</span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose Advanced Electrical Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by homeowners and businesses across Swansboro, Jacksonville, Emerald Isle and the surrounding areas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              icon: Shield,
              title: 'Licensed & insured',
              description: 'Fully licensed NC electrical contractor with comprehensive liability insurance for your protection and peace of mind.'
            }, {
              icon: Clock,
              title: 'Same-day service',
              description: 'Emergency electrical repairs available with same-day response for urgent issues throughout our service area.'
            }, {
              icon: Zap,
              title: '20+ years experience',
              description: 'Serving our community since 2006 with expert residential and commercial electrical solutions.'
            }].map((feature, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} className="bg-card rounded-2xl p-6 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What our customers say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real reviews from satisfied customers across our service areas
              </p>
            </motion.div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
                  <TestimonialCard {...testimonial} />
                </motion.div>)}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today for a free quote on your residential or commercial electrical project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#8bb974] text-white hover:bg-[#7aa563] hover:text-white transition-all duration-200 active:scale-[0.98] gap-2">
                    Request a quote
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+19103829513">
                  <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-200 active:scale-[0.98]">
                    Call (910) 382-9513
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
}
export default HomePage;