import { Product, ProjectShowcase } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Linear Ventilation Grille S-Series',
    series: 'S',
    description: 'Premium linear grille with minimalist design for modern interiors',
    price: 4500,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Linear',
    specifications: {
      material: 'Anodized Aluminum',
      finish: 'Matte Black / Bronze',
      sizes: ['600x100mm', '800x100mm', '1000x100mm']
    }
  },
  {
    id: '2',
    name: 'Decorative Grille M-Series',
    series: 'M',
    description: 'Elegant decorative grille with intricate pattern details',
    price: 6200,
    image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Decorative',
    specifications: {
      material: 'Brass',
      finish: 'Polished Gold / Antique Bronze',
      sizes: ['400x400mm', '500x500mm', '600x600mm']
    }
  },
  {
    id: '3',
    name: 'Ceiling Grille V-Series',
    series: 'V',
    description: 'Versatile ceiling-mounted grille for optimal air distribution',
    price: 3800,
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Ceiling',
    specifications: {
      material: 'Steel',
      finish: 'Powder Coated White / Black',
      sizes: ['300x300mm', '400x400mm', '500x500mm']
    }
  },
  {
    id: '4',
    name: 'Return Air Grille VRC-Series',
    series: 'VRC',
    description: 'High-capacity return air grille with superior airflow',
    price: 5100,
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Return Air',
    specifications: {
      material: 'Aluminum',
      finish: 'Natural / Anodized',
      sizes: ['800x200mm', '1000x250mm', '1200x300mm']
    }
  },
  {
    id: '5',
    name: 'Floor Grille L-Series',
    series: 'L',
    description: 'Durable floor-mounted grille for underfloor ventilation',
    price: 7800,
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Floor',
    specifications: {
      material: 'Stainless Steel',
      finish: 'Brushed / Mirror Polished',
      sizes: ['200x1000mm', '300x1000mm', '400x1200mm']
    }
  },
  {
    id: '6',
    name: 'Adjustable Grille R-Series',
    series: 'R',
    description: 'Multi-directional adjustable grille for precise airflow control',
    price: 4900,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Adjustable',
    specifications: {
      material: 'Plastic / Aluminum',
      finish: 'White / Black / Custom',
      sizes: ['250x250mm', '350x350mm', '450x450mm']
    }
  }
];

export const projects: ProjectShowcase[] = [
  {
    id: '1',
    title: 'Luxury Residential Complex',
    location: 'Moscow City Center',
    image: 'https://images.pexels.com/photos/1488267/pexels-photo-1488267.jpeg?auto=compress&cs=tinysrgb&w=800',
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
