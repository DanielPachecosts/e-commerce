import { Category } from "./category.model";


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface CartProduct extends Product {
  qty: number
}