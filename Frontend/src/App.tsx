import { useState, useEffect } from 'react';
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

// ---------- ГЛАВНАЯ СТРАНИЦА ----------
function HomePage() {

  // ★ ДОБАВЛЕНО: данные заказа
  const [orderData, setOrderData] = useState({
    product: "",
    size: "",
    color: "",
    price: 0
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleExplore = () => {
    document.getElementById('section-catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ПЛАВНЫЙ ПЕРЕХОД только с HERO → CATALOG
  const [isHeroAnimating, setIsHeroAnimating] = useState(false);
  const heroId = 'section-hero';
  const catalogId = 'section-catalog';

  useEffect(() => {
    let touchStartY = 0;

    function atHeroTop() {
      const hero = document.getElementById(heroId);
      if (!hero) return false;

      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;

      return scrollY < heroHeight * 0.4;
    }

    const startTouch = (e: TouchEvent) => {
      touchStartY = e.touches?.[0]?.clientY ?? 0;
    };

    const endTouch = (e: TouchEvent) => {
      if (!atHeroTop()) return;

      const endY = e.changedTouches?.[0]?.clientY ?? 0;
      const delta = touchStartY - endY;

      if (delta > 30) triggerHeroTransition();
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0) return;
      if (!atHeroTop()) return;

      if (isHeroAnimating) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0) {
        e.preventDefault();
        triggerHeroTransition();
      }
    };

    function triggerHeroTransition() {
      if (isHeroAnimating) return;

      const heroEl = document.getElementById(heroId);
      const catalogEl = document.getElementById(catalogId);
      if (!heroEl || !catalogEl) return;

      setIsHeroAnimating(true);
      heroEl.classList.add('hero-animating');

      setTimeout(() => {
        catalogEl.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          heroEl.classList.remove("hero-animating");
          setIsHeroAnimating(false);
        }, 600);
      }, 700);
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", startTouch, { passive: true });
    window.addEventListener("touchend", endTouch, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", startTouch);
      window.removeEventListener("touchend", endTouch);
    };
  }, [isHeroAnimating]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section id="section-hero" className="relative">
        <Hero onExplore={handleExplore} />
      </section>

      {/* CATALOG */}
      <section id="section-catalog">
        <Catalog products={products} onViewDetails={handleViewDetails} />
      </section>

      <Projects projects={projects} />
      <FAQ />

      {/* ★ ДОБАВЛЕНО: передача orderData */}
      <Contact orderData={orderData} setOrderData={setOrderData} />

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}

        // ★ ДОБАВЛЕНО — получение данных конфигурации:
        onSelectConfig={setOrderData}
      />
    </div>
  );
}

// ---------- APP ----------
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/personal-data-agreement" element={<PersonalDataAgreement />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>

      <CookieBanner />
    </>
  );
}
