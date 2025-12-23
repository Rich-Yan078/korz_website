import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface CatalogProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export default function Catalog({ products, onViewDetails }: CatalogProps) {
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // 📱 Мобильные — сразу показываем все карточки
    if (isMobile) {
      setVisibleItems(products.length);
      return;
    }

    const section = document.getElementById("catalog");

    if (!section) {
      setVisibleItems(products.length);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        products.forEach((_, index) => {
          setTimeout(() => {
            setVisibleItems((prev) =>
              Math.min(prev + 1, products.length)
            );
          }, index * 100);
        });

        observer.disconnect();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [products]);

  return (
    <section id="catalog" className="relative py-28 overflow-hidden">
      
      {/* ФОНОВОЕ ИЗОБРАЖЕНИЕ */}
      <img
        src="/catalog_fon.jpg"
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ЗАТЕМНЕНИЕ */}
      <div className="absolute inset-0 bg-black/70" />

      {/* КОНТЕНТ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">

        {/* ЗАГОЛОВОК КАТАЛОГА */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Каталог
            </span>
          </h2>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Изготавливаем из высококачественного оцинкованного металла, красим в любой цвет порошковой краской, что дополнительно защищает от коррозии.
          </p>
        </div>

        {/* КАРТОЧКИ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-500 ease-out ${
                index < visibleItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <ProductCard
                product={product}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-white/80 mt-10">
            Товары не найдены
          </p>
        )}
      </div>
    </section>
  );
}
