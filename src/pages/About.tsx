
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About NEWAR Tours and travels</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your gateway to the mystical kingdom of Bhutan - The Last Shangri-La
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At NEWAR Tours and travels, we are dedicated to providing authentic and transformative 
                experiences in Bhutan. We believe in sustainable tourism that respects local culture, 
                supports communities, and preserves the pristine environment that makes Bhutan unique.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team consists of experienced local guides, cultural experts, and travel professionals 
                who share a deep love for Bhutan's heritage. We ensure every journey is not just a trip, 
                but a meaningful exploration of one of the world's last unspoiled kingdoms.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bhutan Landscape"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 text-center">Why Choose Us for Your Bhutan Journey?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="font-semibold mb-2">Local Expertise</h3>
                <p className="text-sm text-gray-600">Native guides with deep knowledge of Bhutanese culture and traditions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold mb-2">Customized Tours</h3>
                <p className="text-sm text-gray-600">Tailored itineraries based on your interests and preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-sm text-gray-600">Sustainable practices that protect Bhutan's pristine environment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold mb-2">Community Support</h3>
                <p className="text-sm text-gray-600">Tourism that benefits local communities and preserves culture</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Explore Bhutan?</h2>
            <p className="text-gray-600 mb-6">
              Let us help you discover the magic of the Last Shangri-La with our expertly crafted tours.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-heritage"
            >
              Plan Your Bhutan Adventure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
