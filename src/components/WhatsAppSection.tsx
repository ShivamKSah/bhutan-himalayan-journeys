
import { MessageCircle } from 'lucide-react';

const WhatsAppSection = () => {
  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Connect with us on <span className="text-green-600">WhatsApp</span>
          </h2>
          <p className="text-xl text-gray-600">
            Scan the QR code or click the button to start chatting with our travel experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* QR Code Section */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg inline-block">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/+919876543210" 
                alt="WhatsApp QR Code"
                className="w-48 h-48 mx-auto"
              />
            </div>
            <p className="text-gray-600 mt-4">Scan with your phone camera</p>
          </div>

          {/* WhatsApp Button Section */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <MessageCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Chat with us directly</h3>
              <p className="text-gray-600 mb-6">
                Get instant responses to your travel queries and personalized assistance
              </p>
              <a
                href="https://wa.me/+919876543210?text=Hi, I'm interested in Bhutan tour packages"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MessageCircle size={20} />
                <span>Chat on WhatsApp</span>
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Available 24/7 | +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;
