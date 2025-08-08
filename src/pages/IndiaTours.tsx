
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IndiaTours = () => {
  const tours = [
    {
      title: "Golden Triangle Classic",
      duration: "8 Days / 7 Nights",
      price: "₹65,000",
      highlights: ["Delhi Sightseeing", "Agra Taj Mahal", "Jaipur Pink City", "Heritage Hotels"]
    },
    {
      title: "Rajasthan Royal Tour",
      duration: "14 Days / 13 Nights",
      price: "₹120,000",
      highlights: ["Palace Hotels", "Desert Safari", "Folk Performances", "Udaipur Lakes"]
    },
    {
      title: "Kerala Backwaters",
      duration: "10 Days / 9 Nights",
      price: "₹85,000",
      highlights: ["Houseboat Stay", "Spice Plantations", "Ayurveda Spa", "Beach Resorts"]
    },
    {
      title: "Spiritual India",
      duration: "12 Days / 11 Nights",
      price: "₹95,000",
      highlights: ["Varanasi Ghats", "Rishikesh Yoga", "Golden Temple", "Meditation Sessions"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">India Tours</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Incredible India - A kaleidoscope of colors, cultures, and experiences
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          <div className="bg-card p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-6">Explore India's Diversity</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕌</span>
                </div>
                <h3 className="font-semibold mb-2">Historical Monuments</h3>
                <p className="text-sm text-gray-600">UNESCO World Heritage Sites</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="font-semibold mb-2">Rich Culture</h3>
                <p className="text-sm text-gray-600">Festivals and traditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍛</span>
                </div>
                <h3 className="font-semibold mb-2">Culinary Delights</h3>
                <p className="text-sm text-gray-600">Regional cuisines</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏖️</span>
                </div>
                <h3 className="font-semibold mb-2">Diverse Landscapes</h3>
                <p className="text-sm text-gray-600">Mountains to beaches</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndiaTours;
