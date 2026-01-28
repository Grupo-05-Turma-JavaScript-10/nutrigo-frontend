import type Product from "../../models/Product";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  return (
    <article className="
      bg-white 
      rounded-xl 
      border border-gray-100
      shadow-sm 
      hover:shadow-md 
      hover:-translate-y-0.5 
      transition-all 
      duration-200
      flex flex-col 
      max-w-sm
    ">

      <div className="p-5 flex flex-col flex-1">

        <div className="flex justify-between items-start gap-2 mb-2">
          <h2 className="text-sm font-semibold text-gray-800 leading-tight">
            {product.nome}
          </h2>

          {product.saudavel && (
            <span className="
              text-[10px] 
              px-2.5 
              py-0.5 
              rounded-full 
              bg-green-50 
              text-green-700 
              font-medium
              border border-green-200
            ">
              Saudável
            </span>
          )}
        </div>

        <span className="text-base font-bold text-gray-900 mb-4">
          R$ {Number(product.preco).toFixed(2)}
        </span>

        <div className="flex gap-2 mt-auto">
          <button className="
            flex-1 
            py-2 
            text-xs 
            font-medium
            rounded-lg 
            border border-gray-200
            text-gray-700
            hover:bg-gray-100 
            transition
          ">
            Editar
          </button>

          <button className="
            flex-1 
            py-2 
            text-xs 
            font-medium
            rounded-lg 
            bg-red-100 
            text-red-700
            hover:bg-red-200
            transition
          ">
            Excluir
          </button>
        </div>
      </div>
    </article>
  );
}
export default ProductCard;
