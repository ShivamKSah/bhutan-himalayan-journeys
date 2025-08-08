
import PackageCard from './PackageCard';

const PackagesSection = () => {
  const packages = [
    {
      id: '1',
      title: 'Mystical Bhutan Explorer',
      description: 'Experience the Last Shangri-La with visits to Tiger\'s Nest Monastery, Thimphu\'s weekend markets, and the ancient Punakha Dzong. Witness the untouched beauty of Bhutan\'s landscapes.',
      price: '$2,499',
      duration: '8 Days / 7 Nights',
      groupSize: '2-12 People',
      location: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Tiger\'s Nest Monastery trek',
        'Traditional Bhutanese cuisine',
        'Thimphu weekend market',
        'Punakha Dzong fortress',
        'Local festival participation'
      ]
    },
    {
      id: '2',
      title: 'Golden Triangle & Himalayas',
      description: 'Discover India\'s iconic Golden Triangle with Delhi, Agra, and Jaipur, then escape to the serene hill stations of Himachal Pradesh for mountain adventures.',
      price: '$1,899',
      duration: '12 Days / 11 Nights',
      groupSize: '4-16 People',
      location: 'India',
      image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Taj Mahal sunrise visit',
        'Jaipur\'s Pink City exploration',
        'Himalayan hill stations',
        'Local cultural performances',
        'Traditional handicraft shopping'
      ]
    },
    {
      id: '3',
      title: 'Spiritual Journey Combo',
      description: 'A transformative journey through Buddhist monasteries in Bhutan and Hindu temples in India. Perfect for spiritual seekers looking for inner peace.',
      price: '$3,299',
      duration: '14 Days / 13 Nights',
      groupSize: '6-10 People',
      location: 'Bhutan & India',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Meditation sessions with monks',
        'Sacred temple ceremonies',
        'Yoga in the Himalayas',
        'Spiritual counseling sessions',
        'Traditional blessing rituals'
      ]
    },
    {
      id: '4',
      title: 'Adventure Himalayan Trek',
      description: 'For the adventurous souls seeking mountain thrills. Trek through pristine valleys, camp under starlit skies, and experience the raw beauty of the Himalayas.',
      price: '$2,799',
      duration: '10 Days / 9 Nights',
      groupSize: '4-8 People',
      location: 'Bhutan & India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'High-altitude trekking',
        'Mountain camping experience',
        'Local village homestays',
        'Wildlife spotting',
        'Photography workshops'
      ]
    },
    {
      id: '5',
      title: 'Cultural Heritage Tour',
      description: 'Immerse yourself in the rich cultural tapestry of both nations. From ancient architecture to living traditions, experience history come alive.',
      price: '$2,199',
      duration: '9 Days / 8 Nights',
      groupSize: '6-14 People',
      location: 'India & Bhutan',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'UNESCO World Heritage sites',
        'Traditional craft workshops',
        'Local family interactions',
        'Historical monument tours',
        'Cultural dance performances'
      ]
    },
    {
      id: '6',
      title: 'Luxury Palace Experience',
      description: 'Travel in royal style with luxury accommodations, private guides, and exclusive experiences. Perfect for those seeking comfort with adventure.',
      price: '$4,999',
      duration: '11 Days / 10 Nights',
      groupSize: '2-6 People',
      location: 'India & Bhutan',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Luxury palace stays',
        'Private helicopter tours',
        'Exclusive temple access',
        'Personal photography guide',
        'Gourmet dining experiences'
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Handcrafted <span className="text-heritage">Holiday Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated travel experiences that showcase the best of Bhutan and India's
            cultural heritage, natural beauty, and spiritual richness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Can't find the perfect package? We specialize in customized itineraries!
          </p>
          <button 
            onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Create Custom Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
