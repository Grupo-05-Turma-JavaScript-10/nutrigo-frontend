import { useState } from "react"
import type Category from "../../models/Category"
import { updateCategory } from "../../services/Service"

interface Props {
  category: Category
  onClose: () => void
  onUpdated: (category: Category) => void
}

function EditCategoryModal({ category, onClose, onUpdated }: Props) {
  const [descricao, setDescricao] = useState(category.descricao)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const payload: Category = { id: category.id, descricao }
    try {
      await updateCategory(payload, (updated: Category) => {
        onUpdated(updated)
      })
      onClose()
    } catch (err) {
      setError("Falha ao atualizar categoria")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold text-gray-800">Editar Categoria</h2>
        {error && <div className="mb-3 rounded-md bg-red-50 p-2 text-sm text-red-700">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Descrição</label>
            <input
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 text-sm"
              required
            />
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

export default EditCategoryModal
