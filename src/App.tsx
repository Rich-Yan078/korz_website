import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { products, projects } from './data/products';
import { Product } from './types';
import PersonalDataAgreement from './components/pages/PersonalDataAgreement';
import CookiesPage from './components/Cookies';
import CookieBanner from "./components/CookieBanner";

// Главный компонент для домашней страницы
function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleExplore = () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onExplore={handleExplore} />
      <Catalog products={products} onViewDetails={handleViewDetails} />
      <Projects projects={projects} />
      <FAQ />
      <Contact />
      <Footer />
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/personal-data-agreement" element={<PersonalDataAgreement />} />
      <Route path="/cookies" element={<CookiesPage />} />
    </Routes>

      {/* Футер всегда внизу */}
      

      {/* Баннер вынесен глобально, он сам скрывается после выбора */}
      <CookieBanner />
    </>
  );
}