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
    images: [
      {
        src: 'A101.JPG',
        title: 'A101',
        location: 'Moscow City Center',
        description: 'Фасадные вентиляционные корзины в бронзовом исполнении',
      },
      {
        src: 'A102.JPG',
        title: 'A101',
        location: 'Moscow City Center',
        description: 'Индивидуальные корзины под нестандартные проёмы',
      },
      {
        src: 'A103.JPG',
        title: 'A101',
        location: 'Moscow City Center',
        description: 'Скрытая вентиляция без нарушения архитектуры',
      },
      {
        src: 'A104.JPG',
        title: 'A101',
        location: 'Moscow City Center',
        description: 'Комплексное решение для премиум-апартаментов',
      },
    ],
  },

  {
    id: '2',
    images: [
      {
        src: 'office1.jpg',
        title: 'Office Tower',
        location: 'Business District',
        description: 'Линейные решётки в офисных пространствах',
      },
      {
        src: 'office2.jpg',
        title: 'Office Tower',
        location: 'Business District',
        description: 'Единый стиль на всех этажах',
      },
      {
        src: 'office3.jpg',
        title: 'Office Tower',
        location: 'Business District',
        description: 'Черные матовые решётки',
      },
      {
        src: 'office4.jpg',
        title: 'Office Tower',
        location: 'Business District',
        description: 'Индустриальный дизайн вентиляции',
      },
    ],
  },

  {
    id: '3',
    images: [
      {
        src: 'hotel1.jpg',
        title: 'Boutique Hotel',
        location: 'Historic District',
        description: 'Декоративные вентиляционные панели',
      },
      {
        src: 'hotel2.jpg',
        title: 'Boutique Hotel',
        location: 'Historic District',
        description: 'Интеграция в классический интерьер',
      },
      {
        src: 'hotel3.jpg',
        title: 'Boutique Hotel',
        location: 'Historic District',
        description: 'Латунные решётки ручной работы',
      },
      {
        src: 'hotel4.jpg',
        title: 'Boutique Hotel',
        location: 'Historic District',
        description: 'Единый архитектурный стиль',
      },
    ],
  },

  {
    id: '4',
    images: [
      {
        src: 'restaurant1.jpg',
        title: 'Restaurant',
        location: 'Downtown',
        description: 'Потолочные вентиляционные решения',
      },
      {
        src: 'restaurant2.jpg',
        title: 'Restaurant',
        location: 'Downtown',
        description: 'Скрытая система вентиляции',
      },
      {
        src: 'restaurant3.jpg',
        title: 'Restaurant',
        location: 'Downtown',
        description: 'Современный индустриальный стиль',
      },
      {
        src: 'restaurant4.jpg',
        title: 'Restaurant',
        location: 'Downtown',
        description: 'Индивидуальное проектирование',
      },
    ],
  },
];