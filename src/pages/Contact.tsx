
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import InquirySection from '../components/InquirySection';
import WhatsAppSection from '../components/WhatsAppSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our travel experts to plan your dream Bhutan journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-heritage/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="text-heritage" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Travel Street<br />
                Tourism District<br />
                New Delhi, India 110001
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-heritage/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="text-heritage" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Call Us</h3>
              <p className="text-gray-600">
                +91 98765 43210<br />
                +91 87654 32109<br />
                Available 24/7
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-heritage/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="text-heritage" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Email Us</h3>
              <p className="text-gray-600">
                info@newartours.com<br />
                bookings@newartours.com<br />
                Response within 24 hours
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="bg-heritage/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="text-heritage" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Office Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday<br />
                9:00 AM - 7:00 PM<br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppSection />
      <InquirySection />
      <Footer />
    </div>
  );
};

export default Contact;
