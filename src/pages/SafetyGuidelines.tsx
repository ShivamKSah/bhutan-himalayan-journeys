
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SafetyGuidelines = () => {
  const guidelines = [
    {
      category: "Health & Medical",
      points: [
        "Consult your doctor before traveling, especially for high-altitude destinations",
        "Carry prescription medications and a basic first-aid kit",
        "Stay hydrated and avoid overexertion",
        "Be aware of altitude sickness symptoms"
      ]
    },
    {
      category: "Travel Documents",
      points: [
        "Keep photocopies of important documents separately",
        "Register with your embassy when traveling abroad",
        "Ensure your passport has at least 6 months validity",
        "Keep emergency contacts readily available"
      ]
    },
    {
      category: "Personal Safety",
      points: [
        "Stay with your group and follow guide instructions",
        "Don't venture out alone, especially at night",
        "Keep valuables secure and avoid displaying wealth",
        "Trust your instincts and be aware of your surroundings"
      ]
    },
    {
      category: "Cultural Sensitivity",
      points: [
        "Dress modestly, especially when visiting religious sites",
        "Respect local customs and traditions",
        "Ask permission before photographing people",
        "Be mindful of cultural differences and practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Safety Guidelines</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your safety is our priority - essential guidelines for a secure journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {guidelines.map((section, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-primary mb-4">{section.category}</h2>
                <ul className="space-y-3">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start text-gray-700">
                      <span className="text-heritage mr-3 mt-1">•</span>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-heritage/10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Emergency Contacts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">24/7 Emergency Helpline</h3>
                <p className="text-heritage font-semibold">+91 98765 43210</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Medical Emergency</h3>
                <p className="text-heritage font-semibold">emergency@himalayanjourneys.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Local Police (India)</h3>
                <p className="text-heritage font-semibold">100</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SafetyGuidelines;
