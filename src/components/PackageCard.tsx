
import { Phone, MessageCircle, MapPin, Clock, Users } from 'lucide-react';

interface PackageCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  groupSize: string;
  location: string;
  image: string;
  highlights: string[];
}

const PackageCard = ({ 
  id, 
  title, 
  description, 
  price, 
  duration, 
  groupSize, 
  location, 
  image, 
  highlights 
}: PackageCardProps) => {
  
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${title} package. Could you provide more details?`);
    window.open(`https://wa.me/WHATSAPP_NUMBER?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:PHONE_NUMBER', '_self');
  };

  return (
    <div className="package-card group relative">
      <div className="package-image-container relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="package-image"
        />
        <div className="absolute top-4 right-4 bg-heritage text-heritage-foreground px-3 py-1 rounded-full font-bold">
          {price}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center text-white bg-black/50 px-3 py-1 rounded-full">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
      </div>

      <div className="package-content">
        <h3 className="package-title">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{groupSize}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-primary">Package Highlights:</h4>
          <ul className="space-y-1">
            {highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-heritage rounded-full mr-2"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="contact-buttons">
          <button 
            onClick={handleWhatsApp}
            className="btn-whatsapp"
          >
            <MessageCircle size={18} />
            WhatsApp
          </button>
          <button 
            onClick={handleCall}
            className="btn-call"
          >
            <Phone size={18} />
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
