
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Packages', href: '/packages' },
    { name: 'Travel Tips', href: '/travel-tips' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Testimonials', href: '/testimonials' }
  ];

  const destinations = [
    { name: 'Bhutan Tours', href: '/destinations/bhutan' },
    { name: 'India Tours', href: '/destinations/india' },
    { name: 'Combined Tours', href: '/destinations/combined' },
    { name: 'Custom Packages', href: '/destinations/custom' },
    { name: 'Spiritual Journeys', href: '/destinations/spiritual' },
    { name: 'Adventure Tours', href: '/destinations/adventure' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Cancellation Policy', href: '/cancellation-policy' },
    { name: 'Travel Insurance', href: '/travel-insurance' },
    { name: 'Safety Guidelines', href: '/safety-guidelines' },
    { name: 'FAQ', href: '/faq' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/himalayanjourneys' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/himalayanjourneys' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/himalayanjourneys' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com/@himalayanjourneys' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-3xl">🏔️</span>
            <span className="text-xl font-bold text-white">Himalayan Journeys</span>
          </div>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm">
            Your trusted partner for authentic travel experiences in Bhutan and India. 
            We specialize in creating unforgettable journeys that connect you with 
            the rich culture, spirituality, and natural beauty of the Himalayas.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3 text-gray-300">
              <MapPin size={18} className="text-heritage mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Head Office:</p>
                <p className="text-sm">123 Travel Street, Connaught Place</p>
                <p className="text-sm">New Delhi, India 110001</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone size={18} className="text-heritage flex-shrink-0" />
              <div>
                <p className="text-sm">+91 11 4567 8901</p>
                <p className="text-sm">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail size={18} className="text-heritage flex-shrink-0" />
              <div>
                <p className="text-sm">info@himalayanjourneys.com</p>
                <p className="text-sm">bookings@himalayanjourneys.com</p>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h4 className="text-heritage font-semibold mb-2">Business Hours</h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: 11:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:text-heritage transition-colors text-sm block py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div className="footer-section">
          <h3>Our Destinations</h3>
          <ul className="space-y-3">
            {destinations.map((destination) => (
              <li key={destination.name}>
                <a 
                  href={destination.href}
                  className="text-gray-300 hover:text-white hover:text-heritage transition-colors text-sm block py-1"
                >
                  {destination.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies & Support */}
        <div className="footer-section">
          <h3>Support & Policies</h3>
          <ul className="space-y-3 mb-8">
            {policies.map((policy) => (
              <li key={policy.name}>
                <a 
                  href={policy.href}
                  className="text-gray-300 hover:text-white hover:text-heritage transition-colors text-sm block py-1"
                >
                  {policy.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Certifications */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-3 text-heritage">Certifications</h4>
            <div className="text-sm text-gray-300 space-y-2">
              <p>✓ Government of India Approved</p>
              <p>✓ IATA Certified Agency</p>
              <p>✓ Bhutan Tourism Board Licensed</p>
              <p>✓ ISO 9001:2015 Certified</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-heritage">Follow Our Journey</h4>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-heritage p-3 rounded-full transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} className="text-white" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-gray-400">Join 10,000+ travelers on social media</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Himalayan Journeys. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Reg. No: TRV/DL/2020/12345 | GST: 07AABCH1234A1Z5
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <span className="text-gray-400 text-sm">Crafted with ❤️ for travelers</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Licensed & Insured</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
