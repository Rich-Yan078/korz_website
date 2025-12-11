import { X, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !product) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" onClick={onClose}></div>

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50 m-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-blue-100 hover:bg-yellow-200 rounded-full transition-colors z-10"
        >
          <X className="text-yellow-600" size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Характеристики</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Материал:</span>
                  <span className="text-gray-900 font-medium">{product.specifications.material}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Отделка:</span>
                  <span className="text-gray-900 font-medium">{product.specifications.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Категория:</span>
                  <span className="text-gray-900 font-medium">{product.category}</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Доступные размеры</h3>
              <div className="flex flex-wrap gap-2">
                {product.specifications.sizes.map((size) => (
                  <div
                    key={size}
                    className="px-4 py-2 bg-white border border-blue-300 rounded-lg text-blue-600 text-sm font-medium"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-gray-500">от</span>
                <span className="text-4xl font-yellow text-yellow-600">₽{product.price.toLocaleString()}</span>
              </div>

              <button
                onClick={onClose}
                className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-yellow-600/30 transition-all duration-300"
              >
                Запросить консультацию
              </button>

              <div className="mt-6 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="text-yellow-600" size={16} />
                  <span>5-летняя гарантия включена</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-yellow-600" size={16} />
                  <span>Доступны нестандартные размеры</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-yellow-600" size={16} />
                  <span>Профессиональная поддержка установки</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
