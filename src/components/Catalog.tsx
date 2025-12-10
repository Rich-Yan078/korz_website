import { useEffect } from "react";
import { Product } from "../types";
import ProductCard from "./ProductCard";

interface CatalogProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export default function Catalog({ products, onViewDetails }: CatalogProps) {

  //  Эффект приближения фона при скролле
  useEffect(() => {
    const catalog = document.getElementById("section-catalog-bg");

    const handleScroll = () => {
      if (!catalog) return;

      const scrolled = window.scrollY;
      const zoom = 1 + Math.min(scrolled / 1500, 0.15); 
      catalog.style.transform = `scale(${zoom})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="catalog" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-black/80 pointer-events-none z-10" />

      {/* --- Фон с фото и плавным зумом --- */}
      <div
        id="section-catalog-bg"
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[300ms]"
        style={{
          backgroundImage: `url("/catalog_fon.png")`, // имя файла
        }}
      />

      {/* --- Затемнение (overlay) --- */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-[3px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            Наша <span className="text-yellow-300">Коллекция</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mt-4">
            Изготавливаем из высококачественного оцинкованного металла и красим порошковой краской.
          </p>
        </div>

        {/* Товары */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* Если товаров нет */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/80 text-lg">Товары не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
}
