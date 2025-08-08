
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "London, UK",
      rating: 5,
      text: "Our Bhutan cultural tour was absolutely magical! The team at Himalayan Journeys took care of every detail, and our guide was incredibly knowledgeable. The monasteries and festivals were breathtaking.",
      trip: "Bhutan Cultural Heritage Tour"
    },
    {
      name: "Rajesh Patel",
      location: "Mumbai, India",
      rating: 5,
      text: "The Golden Triangle tour exceeded all our expectations. From the Taj Mahal to the Pink City, every moment was perfectly planned. Excellent service and great value for money.",
      trip: "India Golden Triangle"
    },
    {
      name: "Emma Thompson",
      location: "Sydney, Australia",
      rating: 5,
      text: "The Himalayan trek was challenging but incredibly rewarding. The views were stunning, and our guides were professional and supportive throughout the journey.",
      trip: "Himalayan Adventure Trek"
    },
    {
      name: "Michael Chen",
      location: "San Francisco, USA",
      rating: 5,
      text: "Fantastic experience! The spiritual journey through both India and Bhutan was transformative. Great organization and authentic cultural experiences.",
      trip: "Combined Spiritual Journey"
    },
    {
      name: "Lisa Anderson",
      location: "Toronto, Canada",
      rating: 5,
      text: "Professional, friendly, and incredibly organized. The custom itinerary they created for us was perfect. We felt safe and well-cared for throughout our trip.",
      trip: "Custom Package"
    },
    {
      name: "David Wilson",
      location: "Melbourne, Australia",
      rating: 5,
      text: "Outstanding service from start to finish. The team's attention to detail and local expertise made our journey unforgettable. Highly recommended!",
      trip: "Bhutan Adventure Tour"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">What Our Travelers Say</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Real experiences from real travelers who've journeyed with us
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-heritage font-medium mt-1">{testimonial.trip}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-primary mb-4">Ready to Create Your Own Story?</h2>
            <p className="text-gray-600 mb-6">Join thousands of satisfied travelers</p>
            <button className="btn-heritage">Start Your Journey</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
