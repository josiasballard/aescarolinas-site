
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, Award, Users, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Advanced Electrical Solutions</title>
        <meta name="description" content="Learn about Advanced Electrical Solutions - licensed electricians serving Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and surrounding areas since 2008 with professional residential and commercial electrical services." />
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
                About Advanced Electrical Solutions
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Your trusted electrical partner serving Swansboro, Hubert, Jacksonville, and surrounding areas since 2008
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Advanced Electrical Solutions was founded in 2008 by master electrician James Thompson, who saw a need for reliable, professional electrical services in our local community. What started as a one-person operation has grown into a trusted team of licensed electricians serving homeowners and businesses throughout the region.
                  </p>
                  <p>
                    We built our reputation on quality workmanship, transparent pricing, and exceptional customer service. Every project, whether a simple outlet repair or a complete commercial rewire, receives the same attention to detail and commitment to safety.
                  </p>
                  <p>
                    Today, we are proud to be one of the most trusted electrical contractors in Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and surrounding areas. Our team brings decades of combined experience to every job, ensuring your electrical systems are safe, efficient, and built to last.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { icon: Shield, label: 'Licensed & insured', value: 'NC License #27849' },
                  { icon: Award, label: 'Years in business', value: '18 years' },
                  { icon: Users, label: 'Projects completed', value: '2,847+' },
                  { icon: MapPin, label: 'Service area', value: 'Local Region' }
                ].map((stat, index) => (
                  <div key={index} className="bg-muted rounded-xl p-6">
                    <stat.icon className="w-8 h-8 text-primary mb-3" />
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1689798889867-67c2b1794743" 
                  alt="Licensed electrician performing professional electrical panel installation"
                  className="rounded-2xl shadow-lg w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-3xl font-bold mb-6">Why choose us</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Licensed professionals',
                      description: 'All our electricians are fully licensed, background-checked, and continuously trained on the latest electrical codes and safety standards.'
                    },
                    {
                      title: 'Transparent pricing',
                      description: 'We provide detailed estimates before starting any work. No hidden fees, no surprises - just honest pricing for quality electrical services.'
                    },
                    {
                      title: 'Quality guaranteed',
                      description: 'We stand behind our work with comprehensive warranties and a commitment to getting the job done right the first time.'
                    },
                    {
                      title: 'Local expertise',
                      description: 'As residents ourselves, we understand the unique electrical challenges of our region, from salt air corrosion to hurricane preparedness.'
                    }
                  ].map((item, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service area coverage</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proudly serving our local communities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Swansboro',
                'Hubert',
                'Jacksonville',
                'Maysville',
                'Stella',
                'Cedar Point',
                'Emerald Isle',
                'Surrounding areas'
              ].map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-xl p-4 flex items-center gap-3"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium">{city}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
