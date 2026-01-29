import { useState, useEffect } from 'react';
import { getCategoryById, listProducts } from '../../services/Service';
import ProductCard from '../products/ProductCard'; 
interface Produto {
  id: number;
  nome: string;
  descricao: string; 
  preco: number;     
  saudavel: boolean;
  foto: string;      
}

const ProductListTest = ({ selectedCategory, healthyOnly }: { selectedCategory: number | null, healthyOnly: boolean }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        if (selectedCategory) {
          await getCategoryById(selectedCategory, (data: any) => {
            const produtosDaCategoria = data.produto || [];
            const filtrados = healthyOnly 
              ? produtosDaCategoria.filter((p: Produto) => p.saudavel === true)
              : produtosDaCategoria;
            setProdutos(filtrados);
          });
        } else {
          await listProducts((data: Produto[]) => {
            const filtrados = healthyOnly 
              ? data.filter(p => p.saudavel === true)
              : data;
            setProdutos(filtrados);
          });
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProdutos();
  }, [selectedCategory, healthyOnly]);

  if (loading) return <div className="text-center py-10">Carregando produtos...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-[#273024]">
        {healthyOnly ? 'Produtos Saudáveis' : 'Todos os Produtos'} 
        {selectedCategory ? ` na Categoria ${selectedCategory}` : ''}
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <ProductCard key={produto.id} product={produto as any} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListTest;