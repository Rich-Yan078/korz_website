import { Info } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/10">
      <div className="relative h-80 overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="mb-4 space-y-1 text-sm bg-yellow-50 p-3 rounded-lg">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Материал:</span>
            <span className="text-gray-600">{product.specifications.material}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Отделка:</span>
            <span className="text-gray-600">{product.specifications.finish}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
          <div>
            <div className="text-xs text-gray-500">от</div>
            <div className="text-2xl font-bold text-yellow-400">₽{product.price.toLocaleString()}</div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="p-3 bg-yellow-50 hover:bg-yellow-100 text-yellow-400 rounded-lg transition-colors"
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