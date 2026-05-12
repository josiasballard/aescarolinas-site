
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProjectCard from '@/components/ProjectCard.jsx';

function ProjectsPage() {
  const projects = [
   /*  {
      image: 'https://images.unsplash.com/photo-1654692623770-7b4f39a94783',
      title: 'Residential panel upgrade',
      description: 'Complete 200-amp electrical panel upgrade for a coastal home in Emerald Isle. Replaced outdated 100-amp panel with modern circuit breakers and whole-house surge protection.',
      category: 'Residential'
    },
    {
      image: 'https://images.unsplash.com/photo-1544387525-d3d4b6e1fc1d',
      title: 'Commercial office installation',
      description: 'New electrical installation for a 3,200 sq ft commercial office space in Swansboro. Included LED lighting, data cabling, and dedicated circuits for office equipment.',
      category: 'Commercial'
    },
    {
      image: 'https://images.unsplash.com/photo-1575747107021-4772b753de48',
      title: 'Retail space rewiring',
      description: 'Complete electrical rewiring for a retail storefront in Cape Carteret. Updated all circuits to current code, installed track lighting, and added dedicated POS circuits.',
      category: 'Commercial'
    },
    {
      image: 'https://images.unsplash.com/photo-1649164236842-0967354347be',
      title: 'Custom lighting installation',
      description: 'Designer lighting installation for a waterfront home in Atlantic Beach. Featured recessed LED lighting, under-cabinet lighting, and outdoor landscape lighting system.',
      category: 'Residential'
    },
    {
      image: 'https://images.unsplash.com/photo-1478882456710-0f4951dd0e92',
      title: 'Kitchen remodel electrical',
      description: 'Complete electrical upgrade for a kitchen renovation in Pine Knoll Shores. Added dedicated appliance circuits, under-cabinet lighting, and pendant fixture installation.',
      category: 'Residential'
    } */
  ];

  return (
    <>
      <Helmet>
        <title>Our Projects | Advanced Electrical Solutions</title>
        <meta name="description" content="View completed electrical projects from Advanced Electrical Solutions. Residential and commercial electrical installations throughout coastal North Carolina." />
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
                Our completed projects
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A showcase of our recent residential and commercial electrical work throughout coastal North Carolina
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you need a simple repair or a complete electrical installation, we are here to help. Contact us for a free consultation and estimate.
              </p>
              <a href="tel:+19105551234" className="inline-block">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 active:scale-[0.98]">
                  Call (910) 555-1234
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

export default ProjectsPage;
