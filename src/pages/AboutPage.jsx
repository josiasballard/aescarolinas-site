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
        <title>
          About | Advanced Electrical Solutions
        </title>

        <meta
          name="description"
          content="Learn more about Advanced Electrical Solutions and licensed electrician Michael Chavez. Serving Swansboro, Hubert, Jacksonville, Emerald Isle, Cedar Point, and surrounding eastern North Carolina areas with residential and commercial electrical services."
        />
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
                Over 20 years of residential and commercial electrical experience serving North Carolina and South Dakota.
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
                    Advanced Electrical Solutions is owned and operated by licensed electrician Michael Chavez, who has worked in the electrical industry for over 20 years. Michael originally operated an electrical business in North Carolina before relocating to South Dakota, where he continued serving residential and commercial customers for years through Advanced Electrical Solutions.
                  </p>

                  <p>
                    After years of building trusted relationships and completing electrical projects throughout South Dakota, AES is now returning to eastern North Carolina to continue providing dependable electrical services for homes, businesses, remodels, lighting, service upgrades, troubleshooting, and new construction projects.
                  </p>

                  <p>
                    Advanced Electrical Solutions is built on honest communication, reliable workmanship, fair pricing, and treating customers the right way. Every project receives careful attention to safety, code compliance, and long-term quality.
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
                  { icon: Award, label: 'Industry experience', value: '20+ years' },
                  { icon: Users, label: 'Projects completed', value: '1,000+' },
                  { icon: MapPin, label: 'Service area', value: 'Coastal Carolina' }
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
                  src="/images/michael-chavez-remodel-1.jpg"
                  alt="Licensed electrician Michael Chavez performing professional electrical remodel services in Swansboro, NC"
                  width="1200"
                  height="800"
                  loading="lazy"
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
                      description: 'Licensed electrical work completed with attention to safety, code compliance, and long-term reliability.'
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
