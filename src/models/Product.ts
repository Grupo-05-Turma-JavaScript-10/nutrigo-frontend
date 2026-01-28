import type Category from './Category';

export default interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  healthy: boolean;
  photo: string;
  categoryId: number;
  category?: Category | null;
}
