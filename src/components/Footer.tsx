
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Packages', href: '#packages' },
    { name: 'Travel Tips', href: '#tips' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '#blog' },
    { name: 'Testimonials', href: '#testimonials' }
  ];

  const destinations = [
    { name: 'Bhutan Tours', href: '#bhutan' },
    { name: 'India Tours', href: '#india' },
    { name: 'Combined Tours', href: '#combined' },
    { name: 'Custom Packages', href: '#custom' },
    { name: 'Spiritual Journeys', href: '#spiritual' },
    { name: 'Adventure Tours', href: '#adventure' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cancellation Policy', href: '/cancellation' },
    { name: 'Travel Insurance', href: '/insurance' },
    { name: 'Safety Guidelines', href: '/safety' },
    { name: 'FAQ', href: '/faq' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-2xl">🏔️</span>
            <span className="text-xl font-bold text-white">Himalayan Journeys</span>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Your trusted partner for authentic travel experiences in Bhutan and India. 
            We specialize in creating unforgettable journeys that connect you with 
            the rich culture, spirituality, and natural beauty of the Himalayas.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-300">
              <MapPin size={18} className="text-heritage" />
              <span className="text-sm">123 Travel Street, New Delhi, India 110001</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Phone size={18} className="text-heritage" />
              <span className="text-sm">+91 PHONE_NUMBER</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Mail size={18} className="text-heritage" />
              <span className="text-sm">info@himalayanjourneys.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <button 
                  onClick={() => handleLinkClick(link.href)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Destinations */}
        <div className="footer-section">
          <h3>Destinations</h3>
          <ul>
            {destinations.map((destination) => (
              <li key={destination.name}>
                <button 
                  onClick={() => handleLinkClick(destination.href)}
                  className="text-gray-300 hover:text-white transition-colors text-left"
                >
                  {destination.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies & Support */}
        <div className="footer-section">
          <h3>Support & Policies</h3>
          <ul>
            {policies.map((policy) => (
              <li key={policy.name}>
                <a 
                  href={policy.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {policy.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Media */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4 text-heritage">Follow Our Journey</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 hover:bg-heritage p-2 rounded-full transition-colors"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Himalayan Journeys. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Crafted with ❤️ for travelers</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">Licensed & Insured</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
