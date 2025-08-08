
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Terms and conditions for using our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">Last updated: January 2025</p>
            
            <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
            <p className="mb-6">By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2 className="text-2xl font-bold text-primary mb-4">Booking and Payment</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>All bookings require a deposit of 30% of the total tour cost</li>
              <li>Full payment is required 30 days before departure</li>
              <li>Prices are subject to change until booking is confirmed</li>
              <li>Additional charges may apply for special requests</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Cancellation Policy</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Cancellations 45+ days before departure: 15% penalty</li>
              <li>Cancellations 30-44 days: 25% penalty</li>
              <li>Cancellations 15-29 days: 50% penalty</li>
              <li>Cancellations less than 15 days: 100% penalty</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mb-4">Travel Documents</h2>
            <p className="mb-6">Travelers are responsible for ensuring they have valid passports, visas, and all required travel documents.</p>

            <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
            <p>For questions about these terms, contact us at legal@himalayanjourneys.com or +91 11 4567 8901.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
