
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BhutanTours = () => {
  const tours = [
    {
      title: "Classic Bhutan Experience",
      duration: "7 Days / 6 Nights",
      price: "₹85,000",
      highlights: ["Thimphu & Paro", "Tiger's Nest Monastery", "Punakha Dzong", "Local Markets"]
    },
    {
      title: "Bhutan Festival Tour",
      duration: "9 Days / 8 Nights",
      price: "₹110,000",
      highlights: ["Traditional Festivals", "Masked Dances", "Cultural Shows", "Temple Visits"]
    },
    {
      title: "Eastern Bhutan Explorer",
      duration: "12 Days / 11 Nights",
      price: "₹140,000",
      highlights: ["Remote Villages", "Unique Culture", "Textile Weaving", "Mongar & Trashigang"]
    },
    {
      title: "Bhutan Photography Tour",
      duration: "10 Days / 9 Nights",
      price: "₹125,000",
      highlights: ["Golden Hour Shots", "Wildlife Photography", "Landscape Views", "Cultural Portraits"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bhutan Tours</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover the Last Shangri-La - Land of Gross National Happiness
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
            <h2 className="text-2xl font-bold text-primary mb-4">Why Choose Bhutan?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏔️</span>
                </div>
                <h3 className="font-semibold mb-2">Pristine Nature</h3>
                <p className="text-sm text-gray-600">70% forest coverage and carbon-negative country</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-semibold mb-2">Rich Culture</h3>
                <p className="text-sm text-gray-600">Ancient Buddhist traditions preserved authentically</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😊</span>
                </div>
                <h3 className="font-semibold mb-2">Gross National Happiness</h3>
                <p className="text-sm text-gray-600">Unique philosophy prioritizing well-being over GDP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BhutanTours;
