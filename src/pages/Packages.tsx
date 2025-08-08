
import { useState } from 'react';
import { Search, Filter, Star, Clock, Users, MapPin, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Packages = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedPackageTypes, setSelectedPackageTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Most Popular');
  const [searchTerm, setSearchTerm] = useState('');

  const allPackages = [
    {
      id: 1,
      title: "Bhutan Cultural Heritage",
      location: "Thimphu, Bhutan",
      duration: "7 Days",
      price: "$1,299",
      originalPrice: "$1,599",
      rating: 4.8,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore ancient monasteries, traditional festivals, and pristine nature",
      destination: "Bhutan",
      priceRange: "$1000-$2000",
      packageType: "Cultural",
      highlights: ["Tiger's Nest Monastery", "Thimphu Weekend Market", "Punakha Dzong"]
    },
    {
      id: 2,
      title: "Golden Triangle India",
      location: "Delhi, Agra, Jaipur",
      duration: "10 Days",
      price: "$899",
      originalPrice: "$1,199",
      rating: 4.6,
      reviews: 512,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience India's most iconic destinations including the magnificent Taj Mahal",
      destination: "India",
      priceRange: "$500-$1000",
      packageType: "Cultural",
      highlights: ["Taj Mahal Sunrise", "Red Fort Delhi", "Amber Palace Jaipur"]
    },
    {
      id: 3,
      title: "Himalayan Adventure Trek",
      location: "Nepal & Bhutan",
      duration: "15 Days",
      price: "$1,899",
      originalPrice: "$2,299",
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Trek through pristine mountain trails and witness breathtaking Himalayan views",
      destination: "Combined",
      priceRange: "$1000-$2000",
      packageType: "Adventure",
      highlights: ["Everest Base Camp", "Mountain Villages", "Sherpa Culture"]
    },
    {
      id: 4,
      title: "Kerala Backwaters Cruise",
      location: "Alleppey, India",
      duration: "5 Days",
      price: "$699",
      originalPrice: "$899",
      rating: 4.7,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sail through serene backwaters, experience local culture and cuisine",
      destination: "India",
      priceRange: "$500-$1000",
      packageType: "Luxury",
      highlights: ["Houseboat Stay", "Spice Gardens", "Traditional Cuisine"]
    },
    {
      id: 5,
      title: "Rajasthan Royal Heritage",
      location: "Rajasthan, India",
      duration: "12 Days",
      price: "$1,199",
      originalPrice: "$1,499",
      rating: 4.8,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore magnificent palaces, desert landscapes, and royal heritage",
      destination: "India",
      priceRange: "$1000-$2000",
      packageType: "Luxury",
      highlights: ["Palace Hotels", "Desert Safari", "Folk Performances"]
    },
    {
      id: 6,
      title: "Bhutan & Nepal Combined",
      location: "Kathmandu & Thimphu",
      duration: "14 Days",
      price: "$2,299",
      originalPrice: "$2,799",
      rating: 4.9,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience the best of both Himalayan kingdoms in one incredible journey",
      destination: "Combined",
      priceRange: "$2000+",
      packageType: "Cultural",
      highlights: ["Two Countries", "Mountain Views", "Buddhist Monasteries"]
    },
    {
      id: 7,
      title: "Spiritual India Journey",
      location: "Varanasi, Rishikesh",
      duration: "9 Days",
      price: "$999",
      originalPrice: "$1,299",
      rating: 4.6,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Embark on a transformative spiritual journey through sacred India",
      destination: "India",
      priceRange: "$500-$1000",
      packageType: "Spiritual",
      highlights: ["Ganga Aarti", "Yoga Sessions", "Meditation Retreats"]
    },
    {
      id: 8,
      title: "Eastern Bhutan Explorer",
      location: "Mongar, Trashigang",
      duration: "11 Days",
      price: "$1,599",
      originalPrice: "$1,899",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover remote villages and untouched landscapes of Eastern Bhutan",
      destination: "Bhutan",
      priceRange: "$1000-$2000",
      packageType: "Adventure",
      highlights: ["Remote Villages", "Textile Weaving", "Pristine Nature"]
    },
    {
      id: 9,
      title: "Goa Beach Paradise",
      location: "North & South Goa",
      duration: "6 Days",
      price: "$599",
      originalPrice: "$799",
      rating: 4.5,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Relax on pristine beaches, enjoy water sports and vibrant nightlife",
      destination: "India",
      priceRange: "Under $500",
      packageType: "Luxury",
      highlights: ["Beach Resorts", "Water Sports", "Portuguese Heritage"]
    }
  ];

  const destinations = ["Bhutan", "India", "Combined"];
  const durations = ["1-5 Days", "6-8 Days", "7-10 Days", "10+ Days"];
  const priceRanges = ["Under $500", "$500-$1000", "$1000-$2000", "$2000+"];
  const packageTypes = ["Cultural", "Adventure", "Spiritual", "Luxury"];

  const filteredPackages = allPackages.filter(pkg => {
    const matchesDestination = selectedDestinations.length === 0 || selectedDestinations.includes(pkg.destination);
    const matchesDuration = selectedDurations.length === 0 || selectedDurations.some(duration => {
      const days = parseInt(pkg.duration);
      switch(duration) {
        case "1-5 Days": return days <= 5;
        case "6-8 Days": return days >= 6 && days <= 8;
        case "7-10 Days": return days >= 7 && days <= 10;
        case "10+ Days": return days >= 10;
        default: return true;
      }
    });
    const matchesPrice = selectedPriceRanges.length === 0 || selectedPriceRanges.includes(pkg.priceRange);
    const matchesType = selectedPackageTypes.length === 0 || selectedPackageTypes.includes(pkg.packageType);
    const matchesSearch = searchTerm === '' || pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDestination && matchesDuration && matchesPrice && matchesType && matchesSearch;
  });

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    switch(filterType) {
      case 'destination':
        setSelectedDestinations(prev => 
          checked ? [...prev, value] : prev.filter(item => item !== value)
        );
        break;
      case 'duration':
        setSelectedDurations(prev => 
          checked ? [...prev, value] : prev.filter(item => item !== value)
        );
        break;
      case 'price':
        setSelectedPriceRanges(prev => 
          checked ? [...prev, value] : prev.filter(item => item !== value)
        );
        break;
      case 'type':
        setSelectedPackageTypes(prev => 
          checked ? [...prev, value] : prev.filter(item => item !== value)
        );
        break;
    }
  };

  const clearAllFilters = () => {
    setSelectedDestinations([]);
    setSelectedDurations([]);
    setSelectedPriceRanges([]);
    setSelectedPackageTypes([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Holiday Packages</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover amazing destinations in Bhutan and India with our carefully curated travel packages
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search packages..."
              className="w-full pl-12 pr-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-heritage"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold flex items-center">
                  <Filter size={20} className="mr-2" />
                  Filters
                </h3>
                <button 
                  onClick={clearAllFilters}
                  className="text-heritage hover:text-heritage/80 text-sm font-medium"
                >
                  Clear all
                </button>
              </div>

              {/* Destinations Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Destinations</h4>
                {destinations.map(destination => (
                  <label key={destination} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-3 rounded"
                      checked={selectedDestinations.includes(destination)}
                      onChange={(e) => handleFilterChange('destination', destination, e.target.checked)}
                    />
                    <span className="text-sm">{destination}</span>
                    <span className="ml-auto text-xs text-gray-500">
                      {allPackages.filter(pkg => pkg.destination === destination).length}
                    </span>
                  </label>
                ))}
              </div>

              {/* Duration Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Duration</h4>
                {durations.map(duration => (
                  <label key={duration} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-3 rounded"
                      checked={selectedDurations.includes(duration)}
                      onChange={(e) => handleFilterChange('duration', duration, e.target.checked)}
                    />
                    <span className="text-sm">{duration}</span>
                  </label>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Price Range (USD)</h4>
                {priceRanges.map(range => (
                  <label key={range} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-3 rounded"
                      checked={selectedPriceRanges.includes(range)}
                      onChange={(e) => handleFilterChange('price', range, e.target.checked)}
                    />
                    <span className="text-sm">{range}</span>
                  </label>
                ))}
              </div>

              {/* Package Type Filter */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Package Type</h4>
                {packageTypes.map(type => (
                  <label key={type} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      className="mr-3 rounded"
                      checked={selectedPackageTypes.includes(type)}
                      onChange={(e) => handleFilterChange('type', type, e.target.checked)}
                    />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Packages Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {filteredPackages.length} Packages Found
                </h2>
                <p className="text-gray-600">Showing results for your selected filters</p>
              </div>
              
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Short to Long</option>
                <option>Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map(pkg => (
                <div key={pkg.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                  <div className="relative">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-heritage text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.duration}
                    </div>
                    <button className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors">
                      <Heart size={16} />
                    </button>
                    <div className="absolute bottom-4 left-4 flex items-center text-white bg-black/50 px-3 py-1 rounded-full">
                      <MapPin size={14} className="mr-1" />
                      <span className="text-sm">{pkg.location}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.description}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-400 fill-current mr-1" />
                        <span className="font-medium">{pkg.rating}</span>
                        <span className="ml-1">({pkg.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1" />
                        <span>Small Group</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">Package highlights:</div>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-heritage">{pkg.price}</span>
                          <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                        </div>
                        <div className="text-xs text-gray-500">per person</div>
                      </div>
                      <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-semibold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📦</div>
                <h3 className="text-xl font-semibold mb-2">No packages found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                <button 
                  onClick={clearAllFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            <div className="text-center mt-12">
              <button className="bg-heritage hover:bg-heritage/90 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Load More Packages
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Packages;
