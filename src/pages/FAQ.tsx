
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQ = () => {
  const faqs = [
    {
      question: "What is the best time to visit Bhutan?",
      answer: "The best time to visit Bhutan is during spring (March-May) and autumn (September-November) when the weather is clear and pleasant."
    },
    {
      question: "Do I need a visa for Bhutan?",
      answer: "Yes, most visitors need a visa for Bhutan. We handle all visa arrangements as part of our tour packages."
    },
    {
      question: "What is included in the tour packages?",
      answer: "Our packages typically include accommodation, meals, transportation, guide services, and entrance fees to attractions."
    },
    {
      question: "Can I customize my itinerary?",
      answer: "Absolutely! We specialize in creating customized itineraries based on your interests and preferences."
    },
    {
      question: "What about travel insurance?",
      answer: "We strongly recommend travel insurance. We can help you choose the right coverage for your trip."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about our travel services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">Contact our team for personalized assistance</p>
            <div className="flex justify-center space-x-4">
              <a href="tel:+911145678901" className="btn-heritage">Call Us</a>
              <a href="mailto:info@himalayanjourneys.com" className="btn-secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
