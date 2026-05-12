
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  const serviceAreas = [
    'Swansboro',
    'Hubert',
    'Jacksonville',
    'Maysville',
    'Stella',
    'Cedar Point',
    'Emerald Isle',
    'Surrounding areas'
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Advanced Electrical Solutions</title>
        <meta name="description" content="Contact Advanced Electrical Solutions for professional electrical services in Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and surrounding areas. Call (910) 382-9513 or request a free quote online." />
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
                Get in touch
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to start your electrical project? Contact us today for a free consultation and estimate.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Phone</p>
                        <a href="tel:+19103829513" className="text-muted-foreground hover:text-primary transition-colors">
                          (910) 382-9513
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Available for emergency calls 24/7
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Email</p>
                        <a href="mailto:info@advancedelectrical.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@advancedelectrical.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Business hours</p>
                        <div className="text-muted-foreground space-y-1">
                          <p>Monday - Friday: 7am - 6pm</p>
                          <p>Saturday: 8am - 2pm</p>
                          <p>Sunday: Emergency only</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Service areas</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    Serving Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and surrounding areas. Contact us if your area is not listed.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need immediate assistance?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                For urgent electrical issues or emergencies, call us directly. We offer same-day service for emergency repairs.
              </p>
              <a href="tel:+19103829513" className="inline-block">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 active:scale-[0.98] gap-2 inline-flex items-center">
                  <Phone className="w-4 h-4" />
                  Call (910) 382-9513
                </button>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;
