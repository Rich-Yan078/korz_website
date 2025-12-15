import { Product, ProjectShowcase } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Корзина для кондиционера',
    description: [
  'Актуальную стоимость изделия и доставки уточняйте у наших менеджеров.',
  'Мы производим корзины для кондиционеров с разнообразной перфорацией и разной комплектацией на заказ.'
                  ],
    price: 6000,
    image: 'korzina.png',
    category: 'Linear',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Ламели',
      coating: 'Порошковое покрытие',
      
      sizes: ['900x600х500mm', '1000x600х500mm', '1200x600х500mm']
    }
  },
  {
    id: '2',
    name: 'Панель для кондиционера',
    description: [
  'Актуальную стоимость изделия и доставки уточняйте у наших менеджеров.',
  'Мы производим корзины для кондиционеров с разнообразной перфорацией и разной комплектацией на заказ.'
                  ],
    price: 6000,
    image: 'panel.png',
    category: 'Decorative',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Ламели',
      coating: 'Порошковое покрытие',

      sizes: ['900x600х500mm', '1000x600х500mm', '1200x600х500mm']
    }
  },
  {
    id: '3',
    name: 'Панель для кондиционера',
    description: [
  'Актуальную стоимость изделия и доставки уточняйте у наших менеджеров.',
  'Мы производим корзины для кондиционеров с разнообразной перфорацией и разной комплектацией на заказ.'
                  ],
    price: 6000,
    image: 'panel_krug.png',
    category: 'Ceiling',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Перфорация-круг',
      coating: 'Порошковое покрытие',

      sizes: ['900x600х500mm', '1000x600х500mm', '1200x600х500mm']
    }
  },
  {
    id: '4',
    name: 'Корзина для кондиционера',
    description: [
  'Актуальную стоимость изделия и доставки уточняйте у наших менеджеров.',
  'Мы производим корзины для кондиционеров с разнообразной перфорацией и разной комплектацией на заказ.'
                  ],
    price: 6000,
    image: 'kirpich_korzina.png',
    category: 'Return Air',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Перфорация-кирпич',
      coating: 'Порошковое покрытие',

      sizes: ['900x600х500mm', '1000x600х500mm', '1200x600х500mm']
    }
  },
  {
    id: '5',
    name: 'Корзина для кондиционера',
    description: [
  'Актуальную стоимость изделия и доставки уточняйте у наших менеджеров.',
  'Мы производим корзины для кондиционеров с разнообразной перфорацией и разной комплектацией на заказ.'
                  ],
    price: 6000,
    image: 'korzina_kvadrat.png',
    category: 'Floor',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Перфорация-квадрат',
      coating: 'Порошковое покрытие',
      sizes: ['900x600х500mm', '1000x600х500mm', '1200x600х500mm']
    }
  },
  {
    id: '6',
    name: 'Кронштейны ',
    description: [
  'Актуальную стоимость изделия и доставки уточняйте у наших менеджеров.',
  'Мы производим корзины для кондиционеров с разнообразной перфорацией и разной комплектацией на заказ.'
                  ],
    price: 3500,
    image: 'kronshteyni.png',
    category: 'Adjustable',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Кронштейн',
      coating: 'Порошковое покрытие',
      sizes: ['900x600х500mm', '1000x600х500mm', '1200x600х500mm']
    }
  }
];

export const projects: ProjectShowcase[] = [
  {
    id: '1',
    title: 'Luxury Residential Complex',
    location: 'Moscow City Center',
    image: 'A101.JPG',
    description: 'Complete ventilation system with custom bronze grilles for 50 premium apartments'
  },
  {
    id: '2',
    title: 'Modern Office Tower',
    location: 'Business District',
    image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Industrial-style exposed ventilation with black linear grilles across 15 floors'
  },
  {
    id: '3',
    title: 'Boutique Hotel',
    location: 'Historic District',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Decorative brass grilles seamlessly integrated into classical interior design'
  },
  {
    id: '4',
    title: 'Contemporary Restaurant',
    location: 'Downtown',
    image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Custom floor and ceiling ventilation solution with architectural elegance'
  }
];
