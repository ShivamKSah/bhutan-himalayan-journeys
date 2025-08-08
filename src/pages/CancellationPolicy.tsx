
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cancellation Policy</h1>
            <p className="text-xl text-white/90">
              Understanding our cancellation terms and conditions
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-primary mb-4">Cancellation Charges</h2>
            <div className="bg-card p-6 rounded-lg shadow-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-heritage mb-3">Before Departure</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 45+ days: 15% of tour cost</li>
                    <li>• 30-44 days: 25% of tour cost</li>
                    <li>• 15-29 days: 50% of tour cost</li>
                    <li>• Less than 15 days: 100% of tour cost</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-heritage mb-3">Special Conditions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Peak season bookings have different terms</li>
                    <li>• Festival tours are non-refundable</li>
                    <li>• Flight tickets follow airline policies</li>
                    <li>• Visa fees are non-refundable</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Refund Process</h2>
            <p className="mb-6">Refunds will be processed within 15-20 working days after receiving the cancellation request. The refund amount will be credited to the same payment method used for booking.</p>

            <h2 className="text-2xl font-bold text-primary mb-4">Force Majeure</h2>
            <p className="mb-6">In case of natural disasters, political unrest, or other unforeseeable circumstances, we will work with you to reschedule your trip or provide appropriate compensation as per our terms.</p>

            <h2 className="text-2xl font-bold text-primary mb-4">Travel Insurance</h2>
            <p className="mb-6">We strongly recommend purchasing comprehensive travel insurance to protect against unforeseen circumstances that may require trip cancellation.</p>

            <div className="bg-heritage/10 p-6 rounded-lg">
              <h3 className="font-semibold text-heritage mb-3">Need to Cancel?</h3>
              <p className="text-gray-700 mb-4">Contact our cancellation team immediately:</p>
              <div className="flex space-x-4">
                <a href="tel:+911145678901" className="btn-heritage">Call: +91 11 4567 8901</a>
                <a href="mailto:cancellations@himalayanjourneys.com" className="btn-secondary">Email Cancellations</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CancellationPolicy;
