import { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [isRalZoomOpen, setIsRalZoomOpen] = useState(false);

  if (!isOpen || !product) return null;

  return (
    <>
      {/* Фон */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* МОДАЛКА */}
     <div
  className="
    fixed z-50 bg-white shadow-2xl
    inset-x-0 top-0
    h-[100dvh] overflow-y-auto
    md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
    md:h-auto md:max-h-none md:overflow-visible
    w-full md:max-w-6xl
    rounded-t-2xl md:rounded-2xl
  "
>

        {/* Закрыть */}
        <button
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 p-3 bg-yellow-100 hover:bg-yellow-200 rounded-full transition z-10"
        >
          <X size={22} className="text-yellow-600" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 md:p-8">

          {/* Левая колонка */}
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 sm:h-96 md:h-96 object-cover rounded-xl"
            />

            {/* Таблица RAL */}
            <div className="mt-5 text-center">
              <p className="text-gray-700 mb-2 font-semibold">Таблица цветов RAL</p>
              <img
                src="/RAL.jpg"
                alt="RAL"
                className="w-full max-w-xs h-40 object-cover rounded-lg cursor-zoom-in hover:opacity-80 transition"
                onClick={() => setIsRalZoomOpen(true)}
              />
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-5 text-sm md:text-base leading-relaxed">
              {product.description}
            </p>

            {/* Характеристики */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6 mb-5">
              <h3 className="text-lg font-semibold mb-3">Характеристики</h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Материал:</span>
                  <span className="font-medium">{product.specifications.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Отделка:</span>
                  <span className="font-medium">{product.specifications.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Покрытие:</span>
                  <span className="font-medium">{product.specifications.coating}</span>
                </div>
              </div>
            </div>

            {/* Размеры */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-6 mb-5">
              <h3 className="text-sm md:text-lg font-semibold mb-3">Доступные размеры</h3>

              <div className="flex flex-wrap gap-2">
                {product.specifications.sizes.map((size) => (
                  <div
                    key={size}
                    className="px-3 py-1.5 bg-white border border-yellow-300 rounded-lg text-yellow-600 text-xs md:text-sm font-medium"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Цена + кнопка */}
            <div className="mt-auto">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl md:text-4xl font-bold text-yellow-600">
                  ₽{product.price.toLocaleString()}
                </span>
                <span className="text-gray-500 text-sm">Начиная с</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-xl transition"
              >
                Оставить заявку
              </button>

              {/* Плюсы */}
              <div className="mt-5 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-yellow-600" />
                  <span>Год гарантии</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-yellow-600" />
                  <span>Изготавливаем под ваш эскиз</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-yellow-600" />
                  <span>Монтаж</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Увеличение RAL */}
      {isRalZoomOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center cursor-zoom-out"
          onClick={() => setIsRalZoomOpen(false)}
        >
          <img
            src="/RAL.jpg"
            alt="RAL"
            className="max-w-[95vw] max-h-[95vh] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
