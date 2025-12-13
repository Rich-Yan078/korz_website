import { Gift } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails }: ProductCardProps) {
  return (
    <div
      className="group bg-white rounded-xl overflow-hidden border border-yellow-200 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl flex flex-col h-[600px] cursor-pointer"
      onClick={() => onViewDetails(product)}
    >
      {/* ——— КАРТИНКА ——— */}
      <div className="relative h-80 w-full overflow-hidden bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* ——— КОНТЕНТ ——— */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        <div className="mb-4 space-y-1 text-sm bg-yellow-50 p-3 rounded-lg">
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Материал:</span>
            <span className="text-gray-600">{product.specifications.material}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Тип:</span>
            <span className="text-gray-600">{product.specifications.finish}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span className="font-medium">Покрытие:</span>
            <span className="text-gray-600">{product.specifications.coating}</span>
          </div>
        </div>

        {/* ——— ЦЕНА + ПОДАРОК ——— */}
        <div className="flex items-center justify-between pt-4 border-t border-yellow-200">
          {/* Цена */}
          <div>
            <div className="text-xs text-gray-500">от</div>
            <div className="text-2xl font-bold text-yellow-400">
              ₽{product.price.toLocaleString()}
            </div>
          </div>

          {/* Подарок — отдельная группа */}
          <div className="relative group/icon" onClick={(e) => e.stopPropagation()}>
            
            {/* ИКОНКА С bounce */}
            <div
              className="
                p-3 bg-yellow-50 hover:bg-yellow-100 
                text-yellow-400 rounded-lg transition-colors 
                cursor-default
                group-hover/icon:animate-bounce-smooth
              "
            >
              <Gift size={20} />
            </div>

            {/* ТУЛТИП СЛЕВА */}
            <div
              className="
                absolute right-full mr-3 top-1/2 -translate-y-1/2
                px-3 py-1.5 
                bg-yellow-100 text-black text-xs font-semibold
                rounded-lg shadow-lg whitespace-nowrap z-50

                opacity-0 scale-75 translate-x-2
                transition-all duration-300 ease-out

                group-hover/icon:opacity-100
                group-hover/icon:scale-100
                group-hover/icon:translate-x-0
              "
              style={{ pointerEvents: 'none' }}
            >
              Покраска в подарок

              {/* Хвостик */}
              <div
                className="
                  absolute left-full top-1/2 -translate-y-1/2
                  w-2 h-2 bg-yellow-100 rotate-45
                "
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
