import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface CatalogProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export default function Catalog({ products, onViewDetails }: CatalogProps) {
  const [visibleItems, setVisibleItems] = useState<number>(0);
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);

  // Следим за появлением каталога на экране → запускаем анимацию
  useEffect(() => {
    const section = document.getElementById("section-catalog");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted) {
          setAnimationStarted(true);

          // Запускаем красивое последовательное появление
          products.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => prev + 1);
            }, index * 120); // задержка между карточками
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [products, animationStarted]);

  return (
    <section
      id="catalog"
      className="relative py-28 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-t from-transparent to-black/60 pointer-events-none z-10" />

      <img
        src="/catalog_fon.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Наша <span className="text-yellow-300">Коллекция</span>
          </h2>

          <p className="text-white/90 text-lg max-w-2xl mx-auto mt-4">
            Изготавливаем из высококачественного оцинкованного металла и красим порошковой краской.
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-700 ease-out
                ${index < visibleItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
                }`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              <ProductCard
                product={product}
                onViewDetails={onViewDetails}
              />
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">Товары не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
}
