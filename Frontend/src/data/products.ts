import { Product, ProjectShowcase } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Корзина для кондиционера',
    description: 'Premium linear grille with minimalist design for modern interiors',
    price: 5000,
    image: 'korzina.png',
    category: 'Linear',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Ламели',
      coating: 'Powder Coated / Anodized',
      
      sizes: ['600x100mm', '800x100mm', '1000x100mm']
    }
  },
  {
    id: '2',
    name: 'Decorative Grille M-Series',
    description: 'Elegant decorative grille with intricate pattern details',
    price: 6200,
    image: 'panel.png',
    category: 'Decorative',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Ламели',
      coating: 'Powder Coated / Anodized',

      sizes: ['400x400mm', '500x500mm', '600x600mm']
    }
  },
  {
    id: '3',
    name: 'Ceiling Grille V-Series',
    description: 'Versatile ceiling-mounted grille for optimal air distribution',
    price: 3800,
    image: 'panel_krug.png',
    category: 'Ceiling',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Powder Coated White / Black',
      coating: 'Powder Coated / Anodized',

      sizes: ['300x300mm', '400x400mm', '500x500mm']
    }
  },
  {
    id: '4',
    name: 'Return Air Grille VRC-Series',
    description: 'High-capacity return air grille with superior airflow',
    price: 5100,
    image: '',
    category: 'Return Air',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Natural / Anodized',
      coating: 'Powder Coated / Anodized',

      sizes: ['800x200mm', '1000x250mm', '1200x300mm']
    }
  },
  {
    id: '5',
    name: 'Floor Grille L-Series',
    description: 'Durable floor-mounted grille for underfloor ventilation',
    price: 7800,
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Floor',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'Brushed / Mirror Polished',
      coating: 'Powder Coated / Anodized',
      sizes: ['200x1000mm', '300x1000mm', '400x1200mm']
    }
  },
  {
    id: '6',
    name: 'Adjustable Grille R-Series',
    description: 'Multi-directional adjustable grille for precise airflow control',
    price: 4900,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Adjustable',
    specifications: {
      material: 'Оцинкованная сталь',
      finish: 'White / Black / Custom',
      coating: 'Powder Coated / Anodized',
      sizes: ['250x250mm', '350x350mm', '450x450mm']
    }
  }
];

export const projects: ProjectShowcase[] = [
  {
    id: '1',
    title: 'Luxury Residential Complex',
    location: 'Moscow City Center',
    image: 'korzina_orange.png',
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
