
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Gallery = () => {
  const galleries = [
    {
      title: "Bhutan Monasteries",
      images: [
        {
          name: "Tiger's Nest Monastery",
          url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Punakha Dzong",
          url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Thimphu Temple",
          url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Bumthang Valley Monastery",
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Himalayan Landscapes",
      images: [
        {
          name: "Mountain Peaks View",
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Paro Valley",
          url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Thimphu Valley Views",
          url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Mountain Sunrises",
          url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Cultural Experiences",
      images: [
        {
          name: "Local Festivals",
          url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Traditional Dance",
          url: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Handicraft Markets",
          url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Village Life",
          url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bhutan Photo Gallery</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Glimpses of the breathtaking beauty and rich culture of the Land of the Thunder Dragon
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
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={image.url} 
                        alt={image.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-heritage">{image.name}</h3>
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
