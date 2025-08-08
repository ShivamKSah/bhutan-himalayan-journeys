
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TravelInsurance = () => {
  const plans = [
    {
      name: "Basic Coverage",
      price: "₹2,500",
      features: ["Medical Emergency up to ₹5 Lakh", "Trip Cancellation", "Lost Baggage", "24/7 Support"]
    },
    {
      name: "Comprehensive Coverage",
      price: "₹4,500",
      features: ["Medical Emergency up to ₹10 Lakh", "Adventure Sports Coverage", "Trip Interruption", "Emergency Evacuation"]
    },
    {
      name: "Premium Coverage",
      price: "₹7,500",
      features: ["Medical Emergency up to ₹20 Lakh", "High-Risk Activities", "Pre-existing Conditions", "Family Coverage"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Travel Insurance</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Protect your journey with comprehensive travel insurance
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-primary mb-4">{plan.name}</h3>
                <div className="text-3xl font-bold text-heritage mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-heritage mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn-heritage w-full">Choose Plan</button>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Why Travel Insurance is Essential</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-heritage">Medical Emergencies</h3>
                <p className="text-gray-600 text-sm">High altitude sickness, accidents, or sudden illness can happen anywhere.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-heritage">Trip Cancellation</h3>
                <p className="text-gray-600 text-sm">Unforeseen circumstances may force you to cancel or postpone your trip.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-heritage">Adventure Activities</h3>
                <p className="text-gray-600 text-sm">Trekking and adventure sports carry additional risks.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-heritage">Peace of Mind</h3>
                <p className="text-gray-600 text-sm">Travel worry-free knowing you're protected.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelInsurance;
