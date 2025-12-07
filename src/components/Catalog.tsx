import { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface CatalogProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

const categories = ['Все', 'Линейные', 'Декоративные', 'Потолочные', 'Возврат воздуха', 'Напольные', 'Регулируемые'];
const categoryMap: { [key: string]: string } = {
  'Все': 'All',
  'Линейные': 'Linear',
  'Декоративные': 'Decorative',
  'Потолочные': 'Ceiling',
  'Возврат воздуха': 'Return Air',
  'Напольные': 'Floor',
  'Регулируемые': 'Adjustable'
};

export default function Catalog({ products, onViewDetails }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts = selectedCategory === 'Все'
    ? products
    : products.filter(p => p.category === categoryMap[selectedCategory]);

  return (
    <section id="catalog" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наша <span className="text-blue-600">Коллекция</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Изучите нашу полную коллекцию премиум-вентиляционных решеток, разработанных для разнообразных архитектурных применений
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg'
                  : 'bg-blue-50 text-gray-600 hover:bg-blue-100 hover:text-blue-600 border border-blue-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Товары в этой категории не найдены</p>
          </div>
        )}
      </div>
    </section>
  );
}
