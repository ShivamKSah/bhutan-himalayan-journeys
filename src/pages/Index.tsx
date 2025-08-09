
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import PackagesSection from '../components/PackagesSection';
import AboutSection from '../components/AboutSection';
import InquirySection from '../components/InquirySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PackagesSection />
      <AboutSection />
      <InquirySection />
      <Footer />
    </div>
  );
};

export default Index;
