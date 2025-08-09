
import PackageCard from './PackageCard';

const PackagesSection = () => {
  const packages = [
    {
      id: '1',
      title: 'Mystical Bhutan Explorer',
      description: 'Experience the Last Shangri-La with visits to Tiger\'s Nest Monastery, Thimphu\'s weekend markets, and the ancient Punakha Dzong. Witness the untouched beauty of Bhutan\'s landscapes.',
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
      title: 'Bhutan Cultural Heritage',
      description: 'Immerse yourself in Bhutan\'s rich Buddhist culture, ancient monasteries, and traditional way of life. Experience authentic Bhutanese hospitality and customs.',
      duration: '7 Days / 6 Nights',
      groupSize: '4-10 People',
      location: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Buddhist monastery visits',
        'Traditional craft workshops',
        'Local family interactions',
        'Cultural dance performances',
        'Dzong fortress exploration'
      ]
    },
    {
      id: '3',
      title: 'Bhutan Adventure Trek',
      description: 'For the adventurous souls seeking mountain thrills. Trek through pristine valleys, camp under starlit skies, and experience the raw beauty of Bhutan\'s Himalayas.',
      duration: '10 Days / 9 Nights',
      groupSize: '4-8 People',
      location: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'High-altitude trekking',
        'Mountain camping experience',
        'Remote village visits',
        'Wildlife spotting',
        'Photography workshops'
      ]
    },
    {
      id: '4',
      title: 'Eastern Bhutan Discovery',
      description: 'Explore the lesser-known eastern regions of Bhutan. Discover remote villages, unique textiles, and pristine landscapes away from the usual tourist trails.',
      duration: '12 Days / 11 Nights',
      groupSize: '6-10 People',
      location: 'Eastern Bhutan',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Remote village homestays',
        'Traditional textile weaving',
        'Untouched mountain landscapes',
        'Local shamanic practices',
        'Organic farming experiences'
      ]
    },
    {
      id: '5',
      title: 'Bhutan Spiritual Journey',
      description: 'A transformative journey through Buddhist monasteries and sacred sites. Perfect for spiritual seekers looking for inner peace and enlightenment.',
      duration: '9 Days / 8 Nights',
      groupSize: '6-12 People',
      location: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Meditation sessions with monks',
        'Sacred temple ceremonies',
        'Mindfulness workshops',
        'Spiritual counseling sessions',
        'Traditional blessing rituals'
      ]
    },
    {
      id: '6',
      title: 'Bhutan Festival Experience',
      description: 'Time your visit with Bhutan\'s colorful festivals. Witness masked dances, traditional music, and vibrant celebrations in ancient monastery courtyards.',
      duration: '8 Days / 7 Nights',
      groupSize: '4-14 People',
      location: 'Bhutan',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Traditional festival participation',
        'Masked dance performances',
        'Local music experiences',
        'Ceremonial photography',
        'Cultural immersion activities'
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Handcrafted <span className="text-heritage">Bhutan Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated travel experiences that showcase the best of Bhutan's
            cultural heritage, natural beauty, and spiritual richness in the Last Shangri-La.
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
            Can't find the perfect Bhutan package? We specialize in customized itineraries!
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Create Custom Bhutan Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
