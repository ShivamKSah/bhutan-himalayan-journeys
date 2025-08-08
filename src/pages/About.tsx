
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Himalayan Journeys</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your gateway to the mystical Himalayas, connecting cultures and creating memories since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010 by passionate travelers and cultural enthusiasts, Himalayan Journeys was born from a deep love for the mystical beauty and rich heritage of the Himalayan region. Our journey began with a simple mission: to share the transformative power of authentic travel experiences in Bhutan and India.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              We believe that travel is more than just visiting places—it's about connecting with cultures, understanding traditions, and creating meaningful experiences that last a lifetime. Our mission is to provide authentic, sustainable, and transformative travel experiences that benefit both travelers and local communities.
            </p>

            <h2 className="text-3xl font-bold text-primary mb-6">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-heritage">Expert Local Knowledge</h3>
                <p className="text-gray-600">Our team consists of local experts who know every hidden gem and cultural nuance.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-heritage">Sustainable Tourism</h3>
                <p className="text-gray-600">We're committed to responsible travel practices that preserve local cultures and environments.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-heritage">Personalized Service</h3>
                <p className="text-gray-600">Every journey is tailored to your interests and preferences for a unique experience.</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-heritage">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated support team is available round the clock during your travels.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mb-6">Our Team</h2>
            <p className="text-gray-700 mb-6">
              Our diverse team of travel specialists, cultural guides, and adventure experts are passionate about creating unforgettable experiences. With decades of combined experience in the Himalayan region, we ensure every detail of your journey is perfectly crafted.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
