import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import CancellationPolicy from "./pages/CancellationPolicy";
import TravelTips from "./pages/TravelTips";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import BhutanTours from "./pages/BhutanTours";
import IndiaTours from "./pages/IndiaTours";
import CombinedTours from "./pages/CombinedTours";
import CustomPackages from "./pages/CustomPackages";
import SpiritualJourneys from "./pages/SpiritualJourneys";
import AdventureTours from "./pages/AdventureTours";
import TravelInsurance from "./pages/TravelInsurance";
import SafetyGuidelines from "./pages/SafetyGuidelines";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/travel-tips" element={<TravelTips />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/destinations/bhutan" element={<BhutanTours />} />
          <Route path="/destinations/india" element={<IndiaTours />} />
          <Route path="/destinations/combined" element={<CombinedTours />} />
          <Route path="/destinations/custom" element={<CustomPackages />} />
          <Route path="/destinations/spiritual" element={<SpiritualJourneys />} />
          <Route path="/destinations/adventure" element={<AdventureTours />} />
          <Route path="/travel-insurance" element={<TravelInsurance />} />
          <Route path="/safety-guidelines" element={<SafetyGuidelines />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
