
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SpiritualJourneys = () => {
  const journeys = [
    {
      title: "Buddhist Pilgrimage",
      duration: "14 Days / 13 Nights",
      price: "₹150,000",
      highlights: ["Sacred Buddhist Sites", "Meditation Sessions", "Monastery Stays", "Dharma Teachings"]
    },
    {
      title: "Hindu Sacred Circuit",
      duration: "12 Days / 11 Nights",
      price: "₹110,000",
      highlights: ["Char Dham Yatra", "Ganga Aarti", "Temple Visits", "Spiritual Discourses"]
    },
    {
      title: "Yoga & Meditation Retreat",
      duration: "10 Days / 9 Nights",
      price: "₹95,000",
      highlights: ["Daily Yoga Practice", "Meditation Training", "Ayurveda Treatments", "Spiritual Guidance"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Spiritual Journeys</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Inner transformation through sacred travels
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <div key={index} className="package-card">
                <div className="package-content">
                  <h3 className="package-title">{journey.title}</h3>
                  <p className="text-gray-600 mb-4">{journey.duration}</p>
                  <div className="package-price">{journey.price}</div>
                  <ul className="space-y-2 mb-6">
                    {journey.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="text-heritage mr-2">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <button className="btn-heritage w-full">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpiritualJourneys;
