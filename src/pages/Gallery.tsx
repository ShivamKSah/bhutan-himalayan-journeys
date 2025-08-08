
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Gallery = () => {
  const galleries = [
    {
      title: "Bhutan Monasteries",
      images: ["Tiger's Nest Monastery", "Punakha Dzong", "Thimphu Temple", "Bumthang Valley"]
    },
    {
      title: "Indian Monuments",
      images: ["Taj Mahal", "Red Fort", "Amber Fort", "Golden Temple"]
    },
    {
      title: "Himalayan Landscapes",
      images: ["Mount Everest Base", "Annapurna Circuit", "Valley Views", "Mountain Sunrises"]
    },
    {
      title: "Cultural Experiences",
      images: ["Local Festivals", "Traditional Dance", "Handicraft Markets", "Village Life"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Glimpses of the breathtaking beauty and rich culture of our destinations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleries.map((gallery, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">{gallery.title}</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {gallery.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <span className="text-gray-600 text-center p-4">{image}</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-heritage">{image}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
