
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AdventureTours = () => {
  const tours = [
    {
      title: "Everest Base Camp Trek",
      duration: "16 Days / 15 Nights",
      price: "₹180,000",
      highlights: ["Base Camp Approach", "Sherpa Culture", "Mountain Views", "High Altitude Trekking"]
    },
    {
      title: "Annapurna Circuit",
      duration: "14 Days / 13 Nights",
      price: "₹140,000",
      highlights: ["Thorong La Pass", "Diverse Landscapes", "Local Villages", "Sunrise Views"]
    },
    {
      title: "Bhutan Tiger's Nest Hike",
      duration: "8 Days / 7 Nights",
      price: "₹110,000",
      highlights: ["Iconic Monastery Hike", "Mountain Trails", "Cultural Sites", "Photography"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Adventure Tours</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Conquer peaks, challenge limits, create memories
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

export default AdventureTours;
