
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomPackages = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="relative py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Custom Packages</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tailored experiences designed just for you
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Tell Us Your Dream Journey</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input type="text" className="w-full p-3 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full p-3 border rounded-lg" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Destination</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>India Only</option>
                    <option>Bhutan Only</option>
                    <option>India + Bhutan</option>
                    <option>Surprise Me</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Travel Duration</label>
                  <select className="w-full p-3 border rounded-lg">
                    <option>7-10 days</option>
                    <option>11-15 days</option>
                    <option>16-21 days</option>
                    <option>More than 21 days</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Special Interests</label>
                <textarea rows={4} className="w-full p-3 border rounded-lg" placeholder="Tell us about your interests, preferences, and any special requirements..."></textarea>
              </div>
              <button type="submit" className="btn-heritage w-full">Get Custom Quote</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomPackages;
