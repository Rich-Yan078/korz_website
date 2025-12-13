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

      {/* Модалка */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl 
        shadow-2xl z-50 m-4"
      >
        {/* Закрыть */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-yellow-100 hover:bg-yellow-200 rounded-full transition z-10"
        >
          <X size={24} className="text-yellow-600" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">

          {/* Левая колонка */}
          <div className="flex flex-col items-center">
            <div className="relative w-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl"
              />

              
            </div>

            {/* Таблица RAL */}
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-2 font-semibold">Таблица цветов RAL</p>
              <img
                src="/RAL.jpg"
                alt="RAL"
                className="w-[380px] h-[200px] object-cover rounded-lg cursor-zoom-in hover:opacity-80 transition"
                onClick={() => setIsRalZoomOpen(true)}
              />
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {product.name}
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Характеристики */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Характеристики</h3>

              <div className="space-y-3">
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

            {/* Размеры (НЕ кнопки) */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Доступные размеры</h3>

              <div className="flex flex-wrap gap-2">
                {product.specifications.sizes.map((size) => (
                  <div
                    key={size}
                    className="px-4 py-2 bg-white border border-yellow-300 
                      rounded-lg text-yellow-600 text-sm font-medium"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Цена + кнопка */}
            <div className="mt-auto">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-bold text-yellow-600">
                  ₽{product.price.toLocaleString()}
                </span>
                <span className="text-gray-500">Начиная с</span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 
                  text-black font-bold rounded-lg hover:shadow-xl transition"
              >
                Оставить заявку
              </button>

              {/* Плюсы */}
              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-yellow-600" />
                  <span>5-летняя гарантия</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-yellow-600" />
                  <span>Нестандартные размеры</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-yellow-600" />
                  <span>Поддержка при установке</span>
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
