import type Product from "../../models/Product";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow transition flex flex-col overflow-hidden max-w-sm">

      <div className="h-24 bg-gray-200 flex items-center justify-center text-xs text-gray-400">
        {product.foto ? `${product.foto}` : "Sem imagem"}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-sm font-bold text-gray-800">
            {product.nome}
          </h2>

          {product.saudavel === true && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold">
              Saudável
            </span>
          )}

        </div>

        <span className="text-sm font-bold mb-3">
          R$ {Number(product.preco).toFixed(2)}
        </span>

        <div className="flex gap-2 mt-auto">
          <button className="flex-1 py-1.5 text-xs border rounded-md hover:bg-gray-100">
            Editar
          </button>
          <button className="flex-1 py-1.5 text-xs bg-red-500 text-white rounded-md hover:brightness-110">
            Excluir
          </button>
        </div>
      </div>
    </article >
  );
}

export default ProductCard;
