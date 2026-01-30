import { useEffect, useState } from "react"
import type Product from "../../models/Product"
import type Category from "../../models/Category"
import { listCategories, updateProduct } from "../../services/Service"

interface Props {
  product: Product
  onClose: () => void
  onUpdated: (product: Product) => void
}

function EditProductModal({ product, onClose, onUpdated }: Props) {
  const [nome, setNome] = useState(product.nome)
  const [descricao, setDescricao] = useState(product.descricao)
  const [preco, setPreco] = useState<number>(product.preco)
  const [precoText, setPrecoText] = useState<string>(new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(product.preco))
  const [saudavel, setSaudavel] = useState(!!product.saudavel)
  const [foto, setFoto] = useState(product.foto)
  const [categoriaId, setCategoriaId] = useState<number | null>(product.categoria?.id ?? null)
  const [categorias, setCategorias] = useState<Category[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    listCategories(setCategorias).catch(() => {})
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const payload: Product = {
      id: product.id,
      nome,
      descricao,
      preco,
      saudavel,
      foto,
      categoria: categoriaId ? { id: categoriaId, descricao: "" } as Category : undefined,
    }
    try {
      await updateProduct(payload, (updated: Product) => {
        onUpdated(updated)
      })
      onClose()
    } catch (err) {
      setError("Falha ao atualizar produto")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Editar Produto</h2>
        {error && <div className="mb-3 rounded-md bg-red-50 p-2 text-sm text-red-700">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Nome</label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 text-sm"
              rows={3}
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Preço</label>
              <input
                type="text"
                value={precoText}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, "")
                  const cents = raw ? parseInt(raw, 10) : 0
                  const amount = cents / 100
                  setPreco(amount)
                  setPrecoText(new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(amount))
                }}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                inputMode="decimal"
                placeholder="R$ 0,00"
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Foto (URL)</label>
              <input
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
                className="w-full rounded-md border border-gray-300 p-2 text-sm"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <input
              id="saudavel"
              type="checkbox"
              checked={saudavel}
              onChange={(e) => setSaudavel(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="saudavel" className="text-sm font-medium text-gray-700">Saudável</label>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Categoria</label>
            <select
              value={categoriaId ?? ""}
              onChange={(e) => setCategoriaId(e.target.value ? Number(e.target.value) : null)}
              className="w-full rounded-md border border-gray-300 p-2 text-sm"
            >
              <option value="">Sem categoria</option>
              {categorias.map((c) => (
                <option key={c.id} value={c.id}>{c.descricao}</option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-md bg-[var(--color-nutrigo-green)] px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Salvando..." : "Salvar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProductModal
