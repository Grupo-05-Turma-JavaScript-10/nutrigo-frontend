import { useState, useEffect } from 'react';
import { getCategoryById, listProducts } from '../../services/Service';

interface Produto {
  id: number;
  nome: string;
  saudavel: boolean;
}

const ProductListTest = ({ selectedCategory, healthyOnly }: { selectedCategory: number | null, healthyOnly: boolean }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        if (selectedCategory) {
          // Pega produtos de uma categoria específica
          await getCategoryById(selectedCategory, (data: any) => {
            const produtosDaCategoria = data.produto || [];
            // Filtra por saudável se necessário
            const filtrados = healthyOnly 
              ? produtosDaCategoria.filter((p: Produto) => p.saudavel === true)
              : produtosDaCategoria;
            setProdutos(filtrados);
          });
        } else {
          // Pega todos os produtos
          await listProducts((data: Produto[]) => {
            // Filtra por saudável se necessário
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

  if (loading) return <div>Carregando produtos...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-4">
        Produtos {selectedCategory ? `(Categoria ${selectedCategory})` : ''} {healthyOnly ? '(Apenas saudáveis)' : ''}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <div key={produto.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{produto.nome}</h3>
            <span className={`text-sm ${produto.saudavel ? 'text-green-600' : 'text-red-600'}`}>
              {produto.saudavel ? '✅ Saudável' : '❌ Não saudável'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListTest;