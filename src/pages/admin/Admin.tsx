import { useEffect, useState } from "react";
import type Product from "../../models/Product";
import type Category from "../../models/Category";
import CategoryCard from "../../components/admin/CategoryCard";
import { listCategories, listProducts } from "../../services/Service";
import ProductAdminCard from "../../components/products/ProductAdminCard";

function Admin() {
  const [view, setView] = useState<"products" | "categories">("products");

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    listProducts(setProducts);
    listCategories(setCategories);
  }, []);

  return (
    <main className="w-full min-h-screen px-10 py-10 bg-[var(--color-nutrigo-cream)]">

      <section className="mb-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Painel Administrativo
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Aqui você pode visualizar, organizar e gerenciar os produtos e
          categorias disponíveis no sistema.
        </p>
      </section>

      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div className="flex gap-1 bg-white p-1 rounded-lg shadow-sm w-fit">
          <button
            onClick={() => setView("products")}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-all
              ${view === "products"
                ? "bg-[var(--color-nutrigo-green)] text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            Produtos
          </button>

          <button
            onClick={() => setView("categories")}
            className={`px-6 py-2 rounded-md text-sm font-semibold transition-all
              ${view === "categories"
                ? "bg-[var(--color-nutrigo-green)] text-white shadow"
                : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            Categorias
          </button>
        </div>

        <button className="px-6 py-2 rounded-md text-sm font-semibold bg-[var(--color-nutrigo-green)] text-white shadow hover:brightness-110 transition">
          + Cadastrar {view === "products" ? "Produto" : "Categoria"}
        </button>
      </section>

      {view === "products" && (
        <>
          {products.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center">
              <p className="text-gray-500 text-sm mb-2">
                Nenhum produto cadastrado até o momento.
              </p>
              <p className="text-gray-400 text-xs">
                Clique em <strong>“Cadastrar Produto”</strong> para começar.
              </p>
            </div>
          ) : (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductAdminCard key={product.id} product={product} />
              ))}
            </section>
          )}
        </>
      )}

      {view === "categories" && (
        <>
          {categories.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center py-20 text-center">
              <p className="text-gray-500 text-sm mb-2">
                Nenhuma categoria cadastrada até o momento.
              </p>
              <p className="text-gray-400 text-xs">
                Clique em <strong>“Cadastrar Categoria”</strong> para começar.
              </p>
            </div>
          ) : (
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </section>
          )}
        </>
      )}
    </main>
  );
}

export default Admin;
