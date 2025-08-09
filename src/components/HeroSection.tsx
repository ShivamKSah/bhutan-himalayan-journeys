
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const packagesSection = document.getElementById('packages');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80')`,
          transform: `translateY(${scrollY * 0.6}px) scale(${1 + scrollY * 0.0001})`,
          transformOrigin: 'center center'
        }}
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      {/* Floating elements for depth */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute top-32 right-20 w-3 h-3 bg-white/20 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        <div 
          className="absolute bottom-40 left-1/4 w-1 h-1 bg-white/40 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div 
            className="animate-fade-in"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Discover the Mystical Beauty of
              <br />
              <span className="text-heritage bg-gradient-to-r from-heritage to-yellow-400 bg-clip-text text-transparent">
                Bhutan
              </span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              Embark on an unforgettable journey through ancient monasteries, sacred temples,
              and breathtaking Himalayan landscapes in the Last Shangri-La
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              style={{ transform: `translateY(${scrollY * -0.02}px)` }}
            >
              <button 
                onClick={handleExploreClick}
                className="btn-heritage text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                Explore Bhutan Packages
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                Plan Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-white/70 text-sm mt-2 text-center">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
