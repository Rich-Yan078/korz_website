export interface Product {
  id: string;
  slug: string;
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

/* 👇 НОВОЕ */
export interface ProjectImage {
  src: string;
  title: string;
  location?: string;
  
}

export interface ProjectShowcase {
  id: string;
  images: ProjectImage[];
}
