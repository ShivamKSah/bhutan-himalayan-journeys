
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90">
              Your privacy and data security are our top priorities
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
            <p className="mb-6">We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support. This may include your name, email address, phone number, travel preferences, and payment information.</p>

            <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>To provide and improve our travel services</li>
              <li>To process bookings and payments</li>
              <li>To communicate with you about your trips</li>
              <li>To send promotional materials (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
            <p className="mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@himalayanjourneys.com or call +91 11 4567 8901.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
