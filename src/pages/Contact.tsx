
import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, Instagram } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    destination: '',
    groupSize: '',
    preferredDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Thank you for your inquiry! We will get back to you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        destination: '',
        groupSize: '',
        preferredDate: '',
        message: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-heritage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Ready to embark on your Himalayan adventure? We're here to help you plan the perfect journey.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-12">
            Choose your preferred way to connect with us or send enquiry. We're available 24/7 to assist you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-600 mb-4">Get instant responses and quick assistance</p>
              <button 
                onClick={() => window.open('https://wa.me/919876543210?text=Hi! I\'m interested in Bhutan tour packages. Could you provide more details?', '_blank')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Chat Now
              </button>
            </div>

            {/* Phone Call */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone Call</h3>
              <p className="text-sm text-gray-600 mb-4">Direct call for immediate assistance</p>
              <button 
                onClick={() => window.open('tel:+919876543210', '_self')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Call Now
              </button>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-4">Detailed inquiry and documentation</p>
              <button 
                onClick={() => window.open('mailto:info@newartours.com', '_blank')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Send Email
              </button>
            </div>

            {/* Instagram */}
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
              <p className="text-sm text-gray-600 mb-4">Follow our journey and get inspired</p>
              <button 
                onClick={() => window.open('https://instagram.com/newartours', '_blank')}
                className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Follow Us
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Office Information */}
          <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Office Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-heritage/10 p-3 rounded-lg">
                    <MapPin className="text-heritage" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Main Office</h4>
                    <p className="text-gray-600 mt-1">
                      123 Travel Street<br />
                      Tourism District<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-heritage/10 p-3 rounded-lg">
                    <Phone className="text-heritage" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call / WhatsApp</h4>
                    <p className="text-gray-600 mt-1">
                      +91 98765 43210<br />
                      Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-heritage/10 p-3 rounded-lg">
                    <Mail className="text-heritage" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Address</h4>
                    <p className="text-gray-600 mt-1">
                      info@newartours.com<br />
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                <p className="text-gray-500">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us an Inquiry</h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our travel experts will get back to you within 24 hours with a personalized itinerary.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                      Select Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent"
                    >
                      <option value="">Choose destination</option>
                      <option value="thimphu">Thimphu</option>
                      <option value="paro">Paro & Tiger's Nest</option>
                      <option value="punakha">Punakha</option>
                      <option value="phobjikha">Phobjikha Valley</option>
                      <option value="bumthang">Bumthang</option>
                      <option value="custom">Custom Itinerary</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-semibold text-gray-700 mb-2">
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent"
                    >
                      <option value="">Select group size</option>
                      <option value="1-2">1-2 People</option>
                      <option value="3-5">3-5 People</option>
                      <option value="6-10">6-10 People</option>
                      <option value="10+">10+ People</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-heritage focus:border-transparent resize-none"
                    placeholder="Tell us about your travel preferences, special requirements, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-heritage hover:bg-heritage/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Follow Our Journey */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Follow Our Journey</h3>
          <p className="text-gray-600 mb-8">
            Stay connected with us on social media for travel inspiration, tips, and updates from our adventures in Bhutan.
          </p>
          
          <div className="flex justify-center space-x-6">
            <button 
              onClick={() => window.open('https://instagram.com/newartours', '_blank')}
              className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </button>
            <button 
              onClick={() => window.open('https://wa.me/919876543210', '_blank')}
              className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-green-600" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
