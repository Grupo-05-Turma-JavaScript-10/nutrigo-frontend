import { useEffect, useState } from "react";
import type Product from "../../models/Product";
import type Category from "../../models/Category";
import ProductCard from "../../components/admin/ProductCard";
import CategoryCard from "../../components/admin/CategoryCard";
import CreateProductModal from "../../components/admin/CreateProductModal";
import CreateCategoryModal from "../../components/admin/CreateCategoryModal";
import EditProductModal from "../../components/admin/EditProductModal";
import EditCategoryModal from "../../components/admin/EditCategoryModal";
import ConfirmDeleteModal from "../../components/admin/ConfirmDeleteModal";
import { listCategories, listProducts, deleteProduct, deleteCategory } from "../../services/Service";

function Admin() {
  const [view, setView] = useState<"products" | "categories">("products");

  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [showCreateProduct, setShowCreateProduct] = useState(false);
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ type: "product" | "category"; id: number; label: string } | null>(null);

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

        <button
          onClick={() => {
            if (view === "products") setShowCreateProduct(true);
            else setShowCreateCategory(true);
          }}
          className="px-6 py-2 rounded-md text-sm font-semibold bg-[var(--color-nutrigo-green)] text-white shadow hover:brightness-110 transition"
        >
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
                <ProductCard
                  key={product.id}
                  product={product}
                  onEdit={(p) => setEditingProduct(p)}
                  onDelete={(p) => setDeleteTarget({ type: "product", id: p.id, label: p.nome })}
                />
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
                <CategoryCard
                  key={category.id}
                  category={category}
                  onEdit={(c) => setEditingCategory(c)}
                  onDelete={(c) => setDeleteTarget({ type: "category", id: c.id, label: c.descricao })}
                />
              ))}
            </section>
          )}
        </>
      )}

      {showCreateProduct && (
        <CreateProductModal
          onClose={() => setShowCreateProduct(false)}
          onCreated={(created) =>
            setProducts((prev) => [...prev, created])
          }
        />
      )}

      {showCreateCategory && (
        <CreateCategoryModal
          onClose={() => setShowCreateCategory(false)}
          onCreated={(created) =>
            setCategories((prev) => [...prev, created])
          }
        />
      )}

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onUpdated={(updated) =>
            setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
          }
        />
      )}

      {editingCategory && (
        <EditCategoryModal
          category={editingCategory}
          onClose={() => setEditingCategory(null)}
          onUpdated={(updated) =>
            setCategories((prev) => prev.map((c) => (c.id === updated.id ? updated : c)))
          }
        />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal
          title={`Excluir ${deleteTarget.type === "product" ? "Produto" : "Categoria"}`}
          message={`Tem certeza que deseja excluir "${deleteTarget.label}"? Essa ação não pode ser desfeita.`}
          onCancel={() => setDeleteTarget(null)}
          onConfirm={async () => {
            if (deleteTarget.type === "product") {
              await deleteProduct(deleteTarget.id);
              setProducts((prev) => prev.filter((p) => p.id !== deleteTarget.id));
            } else {
              await deleteCategory(deleteTarget.id);
              setCategories((prev) => prev.filter((c) => c.id !== deleteTarget.id));
            }
            setDeleteTarget(null);
          }}
        />
      )}
    </main>
  );
}

export default Admin;
