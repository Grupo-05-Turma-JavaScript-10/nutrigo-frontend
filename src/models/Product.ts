import type Category from "./Category";

export default interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  saudavel: boolean;
  foto: string;
  categoria?: Category;
}
