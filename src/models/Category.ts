import type Product from "./Product";

export default interface Category {
  id: number;
  descricao: string;
  produto?: Product[];
}
