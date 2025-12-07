import { Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/10">
      <div className="relative h-80 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.series}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="mb-4 space-y-1 text-sm bg-blue-50 p-3 rounded-lg">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Материал:</span>
            <span className="text-gray-600">{product.specifications.material}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Отделка:</span>
            <span className="text-gray-600">{product.specifications.finish}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-blue-200">
          <div>
            <div className="text-2xl font-bold text-blue-600">₽{product.price.toLocaleString()}</div>
            <div className="text-xs text-gray-500">Начиная с</div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="p-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
              aria-label="View details"
            >
              <Info size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
