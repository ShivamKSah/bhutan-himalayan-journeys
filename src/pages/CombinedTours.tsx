
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CombinedTours = () => {
  const tours = [
    {
      title: "India-Bhutan Grand Tour",
      duration: "15 Days / 14 Nights",
      price: "₹180,000",
      highlights: ["Golden Triangle", "Bhutan Highlights", "Cultural Immersion", "Two Countries"]
    },
    {
      title: "Himalayan Cultural Journey",
      duration: "18 Days / 17 Nights",
      price: "₹220,000",
      highlights: ["Delhi to Thimphu", "Mountain Views", "Monasteries", "Local Experiences"]
    },
    {
      title: "Spiritual Odyssey",
      duration: "21 Days / 20 Nights",
      price: "₹250,000",
      highlights: ["Sacred Sites", "Meditation Retreats", "Yoga Sessions", "Spiritual Guides"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Combined Tours</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience the best of both worlds - India & Bhutan in one incredible journey
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="package-card">
                <div className="package-content">
                  <h3 className="package-title">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.duration}</p>
                  <div className="package-price">{tour.price}</div>
                  <ul className="space-y-2 mb-6">
                    {tour.highlights.map((highlight, idx) => (
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

export default CombinedTours;
