
import { useState } from 'react';
import { Search, Filter, Star, Clock, Users, MapPin, Heart, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '../components/ui/pagination';

const Packages = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);
  const [selectedPackageTypes, setSelectedPackageTypes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('Most Popular');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 9;

  const allPackages = [
    {
      id: 1,
      title: "Bhutan Cultural Heritage",
      location: "Thimphu, Bhutan",
      duration: "7 Days",
      price: 1299,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 245,
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore ancient monasteries, traditional festivals, and pristine nature in the Land of the Thunder Dragon",
      destination: "Bhutan",
      priceRange: "$1000-$2000",
      packageType: "Cultural",
      highlights: ["Tiger's Nest Monastery", "Thimphu Weekend Market", "Punakha Dzong", "Traditional Festivals"]
    },
    {
      id: 2,
      title: "Golden Triangle India",
      location: "Delhi, Agra, Jaipur",
      duration: "10 Days",
      price: 899,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 512,
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience India's most iconic destinations including the magnificent Taj Mahal and royal palaces",
      destination: "India",
      priceRange: "$500-$1000",
      packageType: "Cultural",
      highlights: ["Taj Mahal Sunrise", "Red Fort Delhi", "Amber Palace Jaipur", "Local Cuisine"]
    },
    {
      id: 3,
      title: "Himalayan Adventure Trek",
      location: "Nepal & Bhutan",
      duration: "15 Days",
      price: 1899,
      originalPrice: 2299,
      rating: 4.9,
      reviews: 128,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Trek through pristine mountain trails and witness breathtaking Himalayan views with expert guides",
      destination: "Combined",
      priceRange: "$1000-$2000",
      packageType: "Adventure",
      highlights: ["Everest Base Camp", "Mountain Villages", "Sherpa Culture", "High Altitude Lakes"]
    },
    {
      id: 4,
      title: "Kerala Backwaters Cruise",
      location: "Alleppey, India",
      duration: "5 Days",
      price: 699,
      originalPrice: 899,
      rating: 4.7,
      reviews: 342,
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sail through serene backwaters on traditional houseboats and experience Kerala's natural beauty",
      destination: "India",
      priceRange: "$500-$1000",
      packageType: "Luxury",
      highlights: ["Houseboat Stay", "Spice Gardens", "Traditional Cuisine", "Ayurvedic Treatments"]
    },
    {
      id: 5,
      title: "Rajasthan Royal Heritage",
      location: "Rajasthan, India",
      duration: "12 Days",
      price: 1199,
      originalPrice: 1499,
      rating: 4.8,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore magnificent palaces, desert landscapes, and experience royal heritage in luxury",
      destination: "India",
      priceRange: "$1000-$2000",
      packageType: "Luxury",
      highlights: ["Palace Hotels", "Desert Safari", "Folk Performances", "Camel Rides"]
    },
    {
      id: 6,
      title: "Bhutan & Nepal Combined",
      location: "Kathmandu & Thimphu",
      duration: "14 Days",
      price: 2299,
      originalPrice: 2799,
      rating: 4.9,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience the best of both Himalayan kingdoms in one incredible spiritual journey",
      destination: "Combined",
      priceRange: "$2000+",
      packageType: "Cultural",
      highlights: ["Two Countries", "Mountain Views", "Buddhist Monasteries", "Cultural Immersion"]
    },
    {
      id: 7,
      title: "Spiritual India Journey",
      location: "Varanasi, Rishikesh",
      duration: "9 Days",
      price: 999,
      originalPrice: 1299,
      rating: 4.6,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Embark on a transformative spiritual journey through India's most sacred destinations",
      destination: "India",
      priceRange: "$500-$1000",
      packageType: "Spiritual",
      highlights: ["Ganga Aarti", "Yoga Sessions", "Meditation Retreats", "Sacred Temples"]
    },
    {
      id: 8,
      title: "Eastern Bhutan Explorer",
      location: "Mongar, Trashigang",
      duration: "11 Days",
      price: 1599,
      originalPrice: 1899,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover remote villages and untouched landscapes of Eastern Bhutan's hidden treasures",
      destination: "Bhutan",
      priceRange: "$1000-$2000",
      packageType: "Adventure",
      highlights: ["Remote Villages", "Textile Weaving", "Pristine Nature", "Local Communities"]
    },
    {
      id: 9,
      title: "Goa Beach Paradise",
      location: "North & South Goa",
      duration: "6 Days",
      price: 599,
      originalPrice: 799,
      rating: 4.5,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Relax on pristine beaches, enjoy water sports and vibrant nightlife in tropical paradise",
      destination: "India",
      priceRange: "Under $500",
      packageType: "Luxury",
      highlights: ["Beach Resorts", "Water Sports", "Portuguese Heritage", "Nightlife"]
    },
    {
      id: 10,
      title: "Kashmir Valley Dream",
      location: "Srinagar, Kashmir",
      duration: "8 Days",
      price: 1099,
      originalPrice: 1399,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience the breathtaking beauty of Kashmir's valleys, lakes, and snow-capped mountains",
      destination: "India",
      priceRange: "$1000-$2000",
      packageType: "Adventure",
      highlights: ["Dal Lake", "Houseboats", "Shalimar Gardens", "Snow Mountains"]
    },
    {
      id: 11,
      title: "Sikkim Monastery Circuit",
      location: "Gangtok, Sikkim",
      duration: "7 Days",
      price: 899,
      originalPrice: 1149,
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore ancient monasteries and witness stunning views of Kanchenjunga in Sikkim",
      destination: "India",
      priceRange: "$500-$1000",
      packageType: "Spiritual",
      highlights: ["Rumtek Monastery", "Kanchenjunga Views", "Tea Gardens", "Buddhist Culture"]
    },
    {
      id: 12,
      title: "Western Bhutan Discovery",
      location: "Paro, Haa Valley",
      duration: "10 Days",
      price: 1399,
      originalPrice: 1699,
      rating: 4.9,
      reviews: 134,
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover the pristine valleys and ancient fortresses of Western Bhutan's cultural heartland",
      destination: "Bhutan",
      priceRange: "$1000-$2000",
      packageType: "Cultural",
      highlights: ["Haa Valley", "Ancient Dzongs", "Prayer Flags", "Local Festivals"]
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

  // Pagination logic
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  const startIndex = (currentPage - 1) * packagesPerPage;
  const paginatedPackages = filteredPackages.slice(startIndex, startIndex + packagesPerPage);

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    setCurrentPage(1); // Reset to first page when filters change
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
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Holiday <span className="text-heritage">Packages</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-white/90 leading-relaxed">
            Discover amazing destinations in Bhutan and India with our carefully curated travel packages
          </p>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search destinations, activities, or experiences..."
              className="w-full pl-16 pr-6 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-heritage/50 transition-all duration-300 text-lg font-medium shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Quick Filter Tags */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Tabs defaultValue="all" className="w-full max-w-4xl">
              <TabsList className="bg-white/10 backdrop-blur-sm">
                <TabsTrigger value="all" className="data-[state=active]:bg-heritage data-[state=active]:text-white">
                  All Packages
                </TabsTrigger>
                <TabsTrigger value="7-10" className="data-[state=active]:bg-heritage data-[state=active]:text-white">
                  7-10 Days
                </TabsTrigger>
                <TabsTrigger value="cultural" className="data-[state=active]:bg-heritage data-[state=active]:text-white">
                  Cultural
                </TabsTrigger>
                <TabsTrigger value="adventure" className="data-[state=active]:bg-heritage data-[state=active]:text-white">
                  Adventure
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Enhanced Filters Sidebar */}
          <div className="w-80 flex-shrink-0">
            <Card className="sticky top-6 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-display font-bold flex items-center">
                    <Filter size={20} className="mr-3 text-primary" />
                    Filters
                  </h3>
                  <button 
                    onClick={clearAllFilters}
                    className="text-heritage hover:text-heritage/80 text-sm font-semibold transition-colors"
                  >
                    Clear all
                  </button>
                </div>

                {/* Destinations Filter */}
                <div className="mb-8">
                  <h4 className="font-display font-semibold mb-4 text-foreground">Destinations</h4>
                  <div className="space-y-3">
                    {destinations.map(destination => (
                      <label key={destination} className="flex items-center group cursor-pointer">
                        <input
                          type="checkbox"
                          className="mr-3 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                          checked={selectedDestinations.includes(destination)}
                          onChange={(e) => handleFilterChange('destination', destination, e.target.checked)}
                        />
                        <span className="text-sm group-hover:text-primary transition-colors font-medium">{destination}</span>
                        <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {allPackages.filter(pkg => pkg.destination === destination).length}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration Filter */}
                <div className="mb-8">
                  <h4 className="font-display font-semibold mb-4 text-foreground">Duration</h4>
                  <div className="space-y-3">
                    {durations.map(duration => (
                      <label key={duration} className="flex items-center group cursor-pointer">
                        <input
                          type="checkbox"
                          className="mr-3 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                          checked={selectedDurations.includes(duration)}
                          onChange={(e) => handleFilterChange('duration', duration, e.target.checked)}
                        />
                        <span className="text-sm group-hover:text-primary transition-colors font-medium">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-8">
                  <h4 className="font-display font-semibold mb-4 text-foreground">Price Range (USD)</h4>
                  <div className="space-y-3">
                    {priceRanges.map(range => (
                      <label key={range} className="flex items-center group cursor-pointer">
                        <input
                          type="checkbox"
                          className="mr-3 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                          checked={selectedPriceRanges.includes(range)}
                          onChange={(e) => handleFilterChange('price', range, e.target.checked)}
                        />
                        <span className="text-sm group-hover:text-primary transition-colors font-medium">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Package Type Filter */}
                <div className="mb-6">
                  <h4 className="font-display font-semibold mb-4 text-foreground">Package Type</h4>
                  <div className="space-y-3">
                    {packageTypes.map(type => (
                      <label key={type} className="flex items-center group cursor-pointer">
                        <input
                          type="checkbox"
                          className="mr-3 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded transition-colors"
                          checked={selectedPackageTypes.includes(type)}
                          onChange={(e) => handleFilterChange('type', type, e.target.checked)}
                        />
                        <span className="text-sm group-hover:text-primary transition-colors font-medium">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Packages Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                  {filteredPackages.length} Packages Found
                </h2>
                <p className="text-muted-foreground font-medium">Showing results for your selected filters</p>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Most Popular">Most Popular</SelectItem>
                  <SelectItem value="Price: Low to High">Price: Low to High</SelectItem>
                  <SelectItem value="Price: High to Low">Price: High to Low</SelectItem>
                  <SelectItem value="Duration: Short to Long">Duration: Short to Long</SelectItem>
                  <SelectItem value="Highest Rated">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPackages.map(pkg => (
                <Card key={pkg.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg">
                  <div className="relative">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-heritage text-heritage-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                        {pkg.duration}
                      </span>
                    </div>
                    <button className="absolute top-4 right-4 p-2.5 bg-white/90 hover:bg-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg">
                      <Heart size={16} className="text-gray-600" />
                    </button>
                    <div className="absolute bottom-4 left-4 flex items-center text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <MapPin size={14} className="mr-2" />
                      <span className="text-sm font-medium">{pkg.location}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-display font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                      {pkg.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">{pkg.description}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-400 fill-current mr-1.5" />
                        <span className="font-semibold text-foreground">{pkg.rating}</span>
                        <span className="ml-1">({pkg.reviews})</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={14} className="mr-1.5" />
                        <span>Small Group</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Package highlights:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-heritage">${pkg.price}</span>
                          <span className="text-sm text-muted-foreground line-through">${pkg.originalPrice}</span>
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">per person</div>
                      </div>
                      <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                        View Details
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredPackages.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-300 text-8xl mb-6">🎒</div>
                <h3 className="text-2xl font-display font-bold mb-3 text-foreground">No packages found</h3>
                <p className="text-muted-foreground mb-6 text-lg">Try adjusting your filters to see more results</p>
                <button 
                  onClick={clearAllFilters}
                  className="btn-primary"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Enhanced Pagination */}
            {totalPages > 1 && (
              <div className="mt-12">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}

            <div className="text-center mt-12">
              <button className="bg-heritage hover:bg-heritage/90 text-heritage-foreground px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
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
