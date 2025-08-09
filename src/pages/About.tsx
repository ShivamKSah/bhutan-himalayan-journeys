
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

          {/* Bhutan Discovery Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">
              Bhutan – Discover the Magic Land of the Thunder Dragon
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-8">
                Bhutan, the Land of the Thunder Dragon, is a Himalayan kingdom where ancient traditions meet pristine natural beauty. From breathtaking monasteries perched on cliffs to lush valleys filled with legends, Bhutan is a destination that touches the heart and soul of every traveler.
              </p>
              
              <p className="text-lg leading-relaxed mb-12">
                Whether you're seeking spiritual awakening, cultural immersion, or nature's tranquility, these five must-visit destinations — Thimphu, Paro Tiger's Nest, Punakha, Phobjikha Valley, and Bumthang — will make your Bhutan journey unforgettable.
              </p>

              {/* Destinations */}
              <div className="grid gap-8">
                {/* Thimphu */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-heritage mb-4">1. Thimphu – Bhutan's Cultural Capital</h3>
                  <p className="text-gray-700 mb-4">
                    The charming capital city, Thimphu, blends modern life with deep-rooted traditions. With no traffic lights, vibrant markets, and a backdrop of majestic mountains, it's a place where Bhutan's unique identity shines.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Buddha Dordenma Statue – A towering golden Buddha offering stunning valley views</li>
                      <li>Tashichho Dzong – A grand fortress-monastery and seat of government</li>
                      <li>Folk Heritage Museum – Discover Bhutan's rural life and history</li>
                      <li>Weekend Market – Perfect for local crafts, fresh produce, and souvenirs</li>
                    </ul>
                  </div>
                  <p className="text-sm text-heritage font-semibold">Best Time to Visit: March–May & September–November</p>
                </div>

                {/* Tiger's Nest */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-heritage mb-4">2. Paro Taktsang – The Legendary Tiger's Nest Monastery</h3>
                  <p className="text-gray-700 mb-4">
                    Clinging to a cliff 900 meters above Paro Valley, the Tiger's Nest is Bhutan's most iconic landmark. The 2–3 hour hike takes you through pine forests, colorful prayer flags, and breathtaking views.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Spiritual pilgrimage site tied to Guru Padmasambhava</li>
                      <li>Stunning cliffside architecture and panoramic valley views</li>
                      <li>Midway cafeteria with a perfect view of the monastery</li>
                    </ul>
                  </div>
                  <p className="text-sm text-heritage font-semibold">Best Time to Visit: Spring and autumn for clear skies and pleasant trekking</p>
                </div>

                {/* Punakha */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-heritage mb-4">3. Punakha – The Riverside Jewel</h3>
                  <p className="text-gray-700 mb-4">
                    Punakha, the former capital of Bhutan, is famous for its warm climate, fertile fields, and the stunning Punakha Dzong at the confluence of two rivers.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Punakha Dzong – Known as The Palace of Great Happiness</li>
                      <li>Pho Chhu Suspension Bridge – One of the longest in Bhutan</li>
                      <li>Chimi Lhakhang – The Temple of Fertility</li>
                      <li>Khamsum Yulley Namgyal Chorten – Hilltop stupa with panoramic views</li>
                    </ul>
                  </div>
                  <p className="text-sm text-heritage font-semibold">Best Time to Visit: March–May for blooming jacarandas or September–November for festivals</p>
                </div>

                {/* Phobjikha Valley */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-heritage mb-4">4. Phobjikha Valley – Nature's Peaceful Paradise</h3>
                  <p className="text-gray-700 mb-4">
                    This glacial valley is a haven for nature lovers and birdwatchers. Known as the winter home of the rare black-necked cranes, Phobjikha offers serene landscapes and a deep connection with nature.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Black-necked cranes (late October–March)</li>
                      <li>Gangtey Monastery – 17th-century spiritual center</li>
                      <li>Gangtey Nature Trail – Gentle hike through pine forests and meadows</li>
                    </ul>
                  </div>
                  <p className="text-sm text-heritage font-semibold">Best Time to Visit: October–March for crane migration; March–May for flowers</p>
                </div>

                {/* Bumthang */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-heritage mb-4">5. Bumthang – The Spiritual Heart of Bhutan</h3>
                  <p className="text-gray-700 mb-4">
                    Bumthang is a collection of four valleys filled with ancient temples, sacred sites, and charming villages. It's a place where myths and history come alive.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-primary mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Jakar Dzong – "Castle of the White Bird"</li>
                      <li>Kurje Lhakhang – Sacred site linked to Guru Padmasambhava</li>
                      <li>Mebar Tsho – The mystical "Burning Lake"</li>
                      <li>Ura Valley – Traditional Bhutanese lifestyle</li>
                    </ul>
                  </div>
                  <p className="text-sm text-heritage font-semibold">Best Time to Visit: April–May & September–November for pleasant weather and festivals</p>
                </div>
              </div>

              {/* Travel Tips */}
              <div className="bg-primary/5 rounded-xl p-6 mt-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Travel Tips for Visiting Bhutan</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Dress Modestly</strong> – Especially when visiting religious sites</li>
                  <li><strong>Altitude Awareness</strong> – Take time to acclimatize in higher regions</li>
                  <li><strong>Cash Is King</strong> – Cards are not widely accepted outside major towns</li>
                  <li><strong>Sustainable Tourism</strong> – Bhutan values its environment and culture — travel responsibly</li>
                </ul>
              </div>

              {/* Why Bhutan */}
              <div className="text-center mt-12">
                <h3 className="text-3xl font-bold text-heritage mb-6">Why Bhutan Should Be Your Next Adventure</h3>
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  From the colorful prayer flags fluttering in the wind to the peaceful hum of monks chanting, Bhutan is a journey for the senses and the soul. Whether you stand before the majestic Tiger's Nest, walk through the peaceful Phobjikha Valley, or explore the ancient dzongs of Bumthang, every moment in Bhutan is a step deeper into a world unlike any other.
                </p>
                <p className="text-xl font-semibold text-heritage mb-6">
                  📍 Book your Bhutan tour today and experience a land where happiness is more than a dream — it's a way of life.
                </p>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-heritage text-lg px-8 py-3"
                >
                  Plan Your Bhutan Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
