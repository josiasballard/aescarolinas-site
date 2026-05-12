
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Home, Building2, Lightbulb, Wrench, Hammer, Zap, Gauge } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: 'Residential electrical work',
      description: 'Complete electrical services for your home, from routine repairs to whole-house rewiring. We handle everything from ceiling fan installations to complete electrical system upgrades.',
      benefits: [
        'Outlet and switch installation',
        'Ceiling fan and fixture installation',
        'Home rewiring and upgrades',
        'GFCI and AFCI protection',
        'Smoke detector installation'
      ]
    },
    {
      icon: Building2,
      title: 'Commercial electrical work',
      description: 'Professional electrical solutions for businesses, retail spaces, and commercial properties. We minimize downtime and ensure your operations run smoothly.',
      benefits: [
        'Commercial lighting systems',
        'Three-phase power installation',
        'Emergency lighting and exit signs',
        'Data and network cabling',
        'Parking lot lighting'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Lighting installation and design',
      description: 'Transform your space with professional lighting design and installation. From energy-efficient LED upgrades to custom landscape lighting.',
      benefits: [
        'LED lighting upgrades',
        'Recessed lighting installation',
        'Landscape and outdoor lighting',
        'Under-cabinet lighting',
        'Smart lighting systems'
      ]
    },
    {
      icon: Wrench,
      title: 'Troubleshooting and repairs',
      description: 'Fast, reliable electrical troubleshooting and repair services. We diagnose and fix electrical issues quickly to restore safety and functionality.',
      benefits: [
        'Circuit breaker problems',
        'Flickering lights diagnosis',
        'Outlet and switch repairs',
        'Electrical safety inspections',
        'Code violation corrections'
      ]
    },
    {
      icon: Hammer,
      title: 'Remodels and renovations',
      description: 'Expert electrical work for kitchen and bathroom remodels, room additions, and home renovations. We work with your contractor to ensure seamless integration.',
      benefits: [
        'Kitchen electrical upgrades',
        'Bathroom lighting and outlets',
        'Room addition wiring',
        'Basement finishing',
        'Garage conversions'
      ]
    },
    {
      icon: Zap,
      title: 'New construction wiring',
      description: 'Complete electrical installation for new construction projects. We work with builders and homeowners to design and install safe, efficient electrical systems.',
      benefits: [
        'Electrical system design',
        'Rough-in wiring',
        'Service panel installation',
        'Final trim and fixtures',
        'Code compliance inspections'
      ]
    },
    {
      icon: Gauge,
      title: 'Panel upgrades and system upgrades',
      description: 'Upgrade your electrical panel to handle modern power demands safely. Essential for older homes or when adding major appliances and EV chargers.',
      benefits: [
        '100A to 200A panel upgrades',
        'Subpanel installation',
        'Circuit additions',
        'EV charger preparation',
        'Whole-house surge protection'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Services | Advanced Electrical Solutions</title>
        <meta name="description" content="Professional residential and commercial electrical services in coastal North Carolina. Licensed electricians for installations, repairs, upgrades, and new construction." />
      </Helmet>

      <Header />

      <main>
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Professional electrical services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive electrical solutions for residential and commercial properties throughout coastal North Carolina
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need electrical work?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Contact us today for a free estimate on your residential or commercial electrical project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+19105551234" className="inline-block">
                  <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]">
                    Call (910) 555-1234
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
