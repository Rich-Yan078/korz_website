import { Product, ProjectShowcase } from '../types';

export const products: Product[] = [
  {
    id: '1',
    slug: "korzina-dlya-kondicionera-lameli",
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
    slug: "panel-dlya-kondicionera-lameli",
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
    slug: "panel-dlya-kondicionera-perforaciya-krug",
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
    slug: "korzina-dlya-kondicionera-perforaciya-kirpich",
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
    slug: "korzina-dlya-kondicionera-perforaciya-kvadrat",
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
    slug: "kronshteyni",
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
        location: 'ЖК "Прокшино"',
      },
      {
        src: 'A101(Skandinavia).JPG',
        title: 'A101',
        location: 'ЖК "Скандинавия"',
      },
      {
        src: 'А101(Ispanskiy).JPG',
        title: 'А101',
        location: 'ЖК "Испанские Кварталы"',
      },
      {
        src: 'A101(Desnarechye).JPG',
        title: 'A101',
        location: 'ЖК "Деснаречье"',
        
      },
    ],
  },

  {
    id: '2',
    images: [
      {
        src: 'Samolet(Novoe_vnukovo).JPG',
        title: 'Самолет',
        location: 'ЖК "Новое Внуково"',
      },
      {
        src: 'Samolet(Priberjniy_park).JPG',
        title: 'Самолет',
        location: 'ЖК "Прибрежный Парк"',
      },
      {
        src: 'Samolet(Prigorod_Lesnoye).JPG',
        title: 'Самолет',
        location: 'ЖК "Пригород Лесное"',
      },
      {
        src: 'Samolet(Lyuberci).JPG',
        title: 'Самолет',
        location: 'ЖК "Люберцы"',
      },
    ],
  },

  {
    id: '3',
    images: [
      {
        src: 'Лср(лучи).JPG',
        title: 'ЛСР',
        location: 'ЖК "Лучи"',
      },
      {
        src: 'Parkside.jpg',
        title: 'ЛСР',
        location: 'ЖК "Парксайд"',
      },
      {
        src: 'brusnika.jpg',
        title: 'Первый Квартал',
        location: 'ЖК "Брусника"',
      },
      {
        src: 'Izumrud.jpg',
        title: 'Эталон',
        location: 'ЖК "Изумрудные Холмы"',
      }
    ],
  },

  {
    id: '4',
    images: [
      {
        src: 'am.jpg',
        title: 'Сеть магазинов "АМ"',
        location: 'г. Москва',
      },
      {
        src: 'vinlab.jpg',
        title: 'Сеть магазинов "Винлаб"',
        location: 'г. Санкт-Петербург',
      },
      {
        src: 'buxanka.jpg',
        title: 'Сеть магазинов "Буханка"',
        location: 'г. Новосибирск',
      },
      {
        src: 'vv.jpg',
        title: 'Сеть магазинов "ВкусВилл"',
        location: 'г. Екатеринбург',
      },
    ],
  },
];