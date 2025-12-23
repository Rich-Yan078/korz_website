// src/App.tsx
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Projects from './components/Projects';
import Works from './components/Works';
import Contact from './components/Contact';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { products, projects } from './data/products';
import { Product } from './types';
import PersonalDataAgreement from './components/pages/PersonalDataAgreement';
import CookiesPage from './components/Cookies';
import CookieBanner from "./components/CookieBanner";
import PrivacyPolicy from './components/pages/PrivacyPolicy';

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // ★ Данные заказа (локально)
  const [orderData, setOrderData] = useState({
    product: "",
    size: "",
    color: "",
    price: 0
  });

  // images for Works
  const workImages = [
    '/works/1.jpg','/works/2.jpg','/works/3.jpg','/works/4.jpg','/works/5.jpg',
    '/works/6.jpg','/works/7.jpg','/works/8.jpg','/works/9.jpg','/works/10.jpg',
    '/works/11.jpg','/works/12.jpg','/works/13.jpg','/works/14.jpg','/works/15.jpg',
    '/works/16.jpg','/works/17.jpg','/works/18.jpg','/works/19.jpg','/works/20.jpg',
  ];

  /**
   * Навигация при клике на карточку:
   * - добавляем state.backgroundLocation = текущая локация,
   *   чтобы React Router мог отрисовать фон + overlay
   */
  const handleViewDetails = (product: Product) => {
    navigate(`/product/${product.slug}`, { state: { backgroundLocation: location } });
  };

  const handleExplore = () => {
    document.getElementById('section-catalog')?.scrollIntoView({ behavior: 'smooth' });
  };

  // ПЛАВНЫЙ ПЕРЕХОД HERO -> CATALOG (сохранён как был)
  const [isHeroAnimating, setIsHeroAnimating] = useState(false);
  const heroId = 'section-hero';
  const catalogId = 'section-catalog';

  useEffect(() => {
    let touchStartY = 0;

    function atHeroTop() {
      const hero = document.getElementById(heroId);
      if (!hero) return false;
      return window.scrollY < hero.offsetHeight * 0.4;
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
      if (e.deltaY < 0 || !atHeroTop()) return;
      if (isHeroAnimating) {
        e.preventDefault();
        return;
      }
      e.preventDefault();
      triggerHeroTransition();
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
      <Works images={workImages} />

      {/* ★ ДОБАВЛЕНО: передача orderData */}
      <Contact orderData={orderData} setOrderData={setOrderData} />

      <Footer />
    </div>
  );
}

/**
 * Product modal overlay route (когда навигация с фона передала backgroundLocation)
 * Рендерится поверх фоновой страницы; close => navigate(-1) (с fallback)
 */
function ProductModalRouteOverlay() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug) || null;

  if (!product) return null;

  const safeClose = () => {
    // если есть история — назад, иначе на главную
    try {
      if (window.history.length > 1) navigate(-1);
      else navigate('/', { replace: true });
    } catch {
      navigate('/', { replace: true });
    }
  };

  return (
    <ProductModal
      product={product}
      isOpen={true}
      onClose={safeClose}
      onSelectConfig={(cfg) => {
        // fallback: сохраняем заказ и возвращаем на главную + прокрутка к контакту
        try { localStorage.setItem('orderData', JSON.stringify(cfg)); } catch {}
        navigate('/', { replace: true });
        setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
      }}
    />
  );
}

/**
 * Product page (когда пользователь зашёл напрямую на /product/:slug)
 * Показываем ту же разметку товара, но как "страницу".
 */
function ProductPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug) || null;

  if (!product) {
    // безопасно редиректим на главную
    return <Navigate to="/" replace />;
  }

  const safeClose = () => {
    try {
      if (window.history.length > 1) navigate(-1);
      else navigate('/', { replace: true });
    } catch {
      navigate('/', { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="max-w-5xl mx-auto px-4 py-12">
        <ProductModal
          product={product}
          isOpen={true}
          onClose={safeClose}
          onSelectConfig={(cfg) => {
            try { localStorage.setItem('orderData', JSON.stringify(cfg)); } catch {}
            navigate('/', { replace: true });
            setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200);
          }}
        />
      </section>
      <Footer />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location } | undefined;

  return (
    <HelmetProvider>
      <>
        {/* основной роутинг: если есть backgroundLocation — используем его как location (фон) */}
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<HomePage />} />
          {/* прямой заход на товар покажет ProductPage (не overlay) */}
          <Route path="/product/:slug" element={<ProductPage />} />
          <Route path="/personal-data-agreement" element={<PersonalDataAgreement />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>

        {/* overlay route: если навигация содержала backgroundLocation, то отрисуем оверлей модалки */}
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/product/:slug" element={<ProductModalRouteOverlay />} />
          </Routes>
        )}

        <CookieBanner />
      </>
    </HelmetProvider>
  );
}
