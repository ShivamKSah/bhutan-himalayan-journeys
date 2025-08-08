
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TravelTips = () => {
  const tips = [
    {
      category: "Planning Your Trip",
      tips: [
        "Book your trip at least 2-3 months in advance for better deals",
        "Check visa requirements and processing times for your destination",
        "Research local customs and cultural etiquette",
        "Pack according to the season and altitude of your destination"
      ]
    },
    {
      category: "Health & Safety",
      tips: [
        "Consult your doctor about required vaccinations",
        "Carry a basic first aid kit and personal medications",
        "Stay hydrated, especially at high altitudes",
        "Purchase comprehensive travel insurance"
      ]
    },
    {
      category: "Cultural Etiquette",
      tips: [
        "Dress modestly when visiting religious sites",
        "Remove shoes before entering temples and homes",
        "Ask permission before photographing people",
        "Respect local customs and traditions"
      ]
    },
    {
      category: "Packing Essentials",
      tips: [
        "Pack layers for varying weather conditions",
        "Bring comfortable walking shoes",
        "Carry a portable charger and universal adapter",
        "Pack light but include rain gear"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Travel Tips</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Essential guidance for your Himalayan adventure
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {tips.map((section, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-primary mb-4">{section.category}</h2>
                <ul className="space-y-3">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-gray-700">
                      <span className="text-heritage mr-3 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelTips;
