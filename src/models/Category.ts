import type Product from './Product';

export default interface Category {
  id: number;
  description: string;
  products?: Product[] | null;
}
