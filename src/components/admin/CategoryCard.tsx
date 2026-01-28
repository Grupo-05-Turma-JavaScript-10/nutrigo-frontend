import type Category from "../../models/Category";

interface Props {
  category: Category;
}

function CategoryCard({ category }: Props) {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow transition p-5 flex flex-col max-w-sm">
      <h2 className="text-base font-bold text-gray-800 mb-3">
        {category.descricao}
      </h2>

      <div className="flex gap-2 mt-auto">
        <button className="flex-1 py-1.5 text-xs border rounded-md hover:bg-gray-100">
          Editar
        </button>
        <button className="flex-1 py-1.5 text-xs bg-red-500 text-white rounded-md hover:brightness-110">
          Excluir
        </button>
      </div>
    </article>
  );
}

export default CategoryCard;
