import type Category from "../../models/Category";

interface Props {
  category: Category;
}

function CategoryCard({ category }: Props) {
  return (
    <article
      className="
        bg-white rounded-xl border border-gray-100
        shadow-sm hover:shadow-md transition
        flex flex-col overflow-hidden max-w-sm
      "
    >
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-sm font-bold text-gray-800">
            {category.descricao}
          </h2>
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            className="
              flex-1 py-1.5 text-xs font-medium
              border border-gray-300 rounded-md
              text-gray-700
              hover:bg-gray-100 transition
            "
          >
            Editar
          </button>

          <button
            className="
              flex-1 py-1.5 text-xs font-medium
              bg-red-100 text-red-700
              border border-red-200
              rounded-md
              hover:bg-red-200 transition
            "
          >
            Excluir
          </button>
        </div>
      </div>
    </article>
  );
}
export default CategoryCard;
