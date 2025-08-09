
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-heritage">NEWAR Tours and travels</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for authentic Bhutanese experiences and unforgettable journeys to the Last Shangri-La.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Bhutan Monastery"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              NEWAR Tours and travels was founded with a passion for sharing the incredible beauty and rich culture 
              of Bhutan with the world. We specialize exclusively in Bhutanese tourism, ensuring authentic and 
              meaningful experiences for every traveler.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With years of experience and deep local connections, we provide insider access to Bhutan's most 
              sacred sites, hidden gems, and cultural treasures. Our expert guides are native Bhutanese who 
              share their homeland's stories with genuine pride and knowledge.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage">500+</div>
                <div className="text-sm text-gray-600">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-heritage">50+</div>
                <div className="text-sm text-gray-600">Sacred Sites</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏔️</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Authentic Experiences</h3>
            <p className="text-gray-600">
              We provide genuine cultural immersion with local families, monks, and artisans in Bhutan.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧭</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
            <p className="text-gray-600">
              Our native Bhutanese guides offer deep insights into local customs, history, and spirituality.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-heritage/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Sustainable Tourism</h3>
            <p className="text-gray-600">
              We practice responsible tourism that supports local communities and preserves Bhutan's pristine environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
