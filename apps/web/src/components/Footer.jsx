import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
function Footer() {
  const serviceAreas = ['Swansboro', 'Hubert', 'Jacksonville', 'Maysville', 'Stella', 'Cedar Point', 'Emerald Isle'];
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="https://horizons-cdn.hostinger.com/426f67e7-a8d6-4d4b-9cb8-513116ffb7c0/961ff32daa64acff76102d4c636edb48.png" alt="Advanced Electrical Solutions logo" className="h-10 w-auto" />
              <span className="font-semibold">Advanced Electrical Solutions</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Licensed and insured electrical contractor serving Swansboro, Hubert, Jacksonville, Maysville, Stella, Cedar Point, Emerald Isle, and the surrounding areas with professional service since 2008.
            </p>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Service areas</span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-primary-foreground/80">
              {serviceAreas.map(area => <li key={area} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{area}</span>
                </li>)}
            </ul>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Quick links</span>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Contact info</span>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <a href="tel:+19103829513" className="hover:text-primary-foreground transition-colors">
                  (910) 382-9513
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                <a href="mailto:info@advancedelectrical.com" className="hover:text-primary-foreground transition-colors">
                  aelectricalsolutions@outlook.com
                </a>
              </li>
            </ul>
            <p className="text-sm text-primary-foreground/80 mt-4">
              <span className="block font-medium text-primary-foreground">Business hours:</span>
              Monday - Friday: 6:30am - 3:30pm<br />
              Saturday & Sunday: Closed
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; 2026 Advanced Electrical Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;