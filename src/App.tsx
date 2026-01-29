import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import CategoryFilter from './components/categoryfilter/CategoryFilter';
import ProductListTest from './components/productlisttest/ProductListTest';
import HomeHero from "./components/homehero/HomeHero";

import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiePolicy from "./pages/legal/CookiePolicy";
import About from "./pages/about/About";
import Admin from './pages/admin/Admin';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [healthyOnly, setHealthyOnly] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-nutrigo-cream px-6 pb-12 pt-4 text-[#2f2f2f] sm:px-8">
        <Routes>
          <Route path="/" element={
            <>
              <HomeHero />
              <CategoryFilter 
                onCategoryChange={setSelectedCategory}
                onHealthyChange={setHealthyOnly}
              />
              <ProductListTest 
                selectedCategory={selectedCategory}
                healthyOnly={healthyOnly}
              />
            </>
          } />
          
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
