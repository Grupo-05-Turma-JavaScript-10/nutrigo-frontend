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

const PAGE_SIZE = 20

const ProductListTest = ({ selectedCategory, healthyOnly }: { selectedCategory: number | null, healthyOnly: boolean }) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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
    setPage(1);
  }, [selectedCategory, healthyOnly]);

  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(produtos.length / PAGE_SIZE))
    if (page > totalPages) setPage(totalPages)
  }, [produtos, page])

  if (loading) return <div className="text-center py-10">Carregando produtos...</div>;

  const totalPages = Math.max(1, Math.ceil(produtos.length / PAGE_SIZE))
  const start = (page - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE
  const pageItems = produtos.slice(start, end)

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-[#273024]">
        {healthyOnly ? 'Produtos Saudáveis' : 'Todos os Produtos'} 
        {selectedCategory ? ` na Categoria ${selectedCategory}` : ''}
      </h2>
      
      <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageItems.length > 0 ? (
          pageItems.map((produto) => (
            <ProductCard key={produto.id} product={produto as any} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Nenhum produto encontrado.</p>
        )}
      </div>

      {produtos.length > PAGE_SIZE && (
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="text-sm text-[#4A5565]">
            Mostrando <span className="font-semibold">{Math.min(end, produtos.length)}</span> de <span className="font-semibold">{produtos.length}</span> produtos
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              « Primeiro
            </button>
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              ‹ Anterior
            </button>
            <span className="px-4 py-2 text-sm rounded-full bg-nutrigo-green text-white font-semibold">
              Página {page} de {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Próxima ›
            </button>
            <button
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
              className="px-3 py-2 text-sm rounded-md border border-gray-200 bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              Última »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductListTest;
