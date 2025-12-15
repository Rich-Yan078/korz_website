export interface Product {
  id: string;
  name: string;
  description: string[];
  price: number;
  image: string;
  category: string;
  specifications: {
    material: string;
    finish: string;
    coating: string;
    sizes: string[];
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  location: string;
  image: string;
  description: string;
}
