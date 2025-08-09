
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Packages', href: '/packages' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/newartours' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/newartours' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/newartours' },
    { name: 'Youtube', icon: Youtube, href: 'https://youtube.com/@newartours' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🏔️</span>
              <span className="text-xl font-bold text-white">NEWAR Tours and travels</span>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Your trusted partner for authentic Bhutan travel experiences. 
              We create unforgettable journeys through the Last Shangri-La.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={16} className="text-heritage flex-shrink-0" />
                <span className="text-sm">New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} className="text-heritage flex-shrink-0" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-heritage flex-shrink-0" />
                <span className="text-sm">info@newartours.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-heritage">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-heritage transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-heritage">Follow Us</h3>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-heritage p-2 rounded-full transition-all duration-300"
                  >
                    <IconComponent size={18} className="text-white" />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-gray-400">Government Approved Agency</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} NEWAR Tours and travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
