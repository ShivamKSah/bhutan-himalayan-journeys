
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Packages = () => {
  const packages = [
    {
      title: "Bhutan Cultural Heritage Tour",
      duration: "7 Days / 6 Nights",
      price: "₹85,000",
      highlights: ["Thimphu Monastery", "Paro Taktsang", "Traditional Festivals", "Local Cuisine"]
    },
    {
      title: "India Golden Triangle",
      duration: "8 Days / 7 Nights", 
      price: "₹65,000",
      highlights: ["Delhi Red Fort", "Agra Taj Mahal", "Jaipur Palace", "Cultural Shows"]
    },
    {
      title: "Himalayan Adventure Trek",
      duration: "12 Days / 11 Nights",
      price: "₹120,000", 
      highlights: ["Mountain Trekking", "Base Camps", "Wildlife Spotting", "Photography"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Travel Packages</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Carefully curated journeys designed to showcase the best of Bhutan and India
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="package-card">
                <div className="package-content">
                  <h3 className="package-title">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.duration}</p>
                  <div className="package-price">{pkg.price}</div>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, idx) => (
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

export default Packages;
