import { useState } from 'react'
import type Product from '../../models/Product'

interface ProductCardProps {
  product: Product
  onEdit?: (product: Product) => void
  onDelete?: (product: Product) => void
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

const fallbackImages = [
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505576633757-0ac1084af824?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
]

export default function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
  const initialSrc =
    product.foto && product.foto.trim() !== ''
      ? product.foto
      : fallbackImages[product.id % fallbackImages.length]
  const [src, setSrc] = useState(initialSrc)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(26,26,26,0.08),0_8px_20px_rgba(26,26,26,0.08)]">
      <div className="relative h-48 overflow-hidden">
        <img
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          src={src}
          alt={product.nome}
          loading="lazy"
          onError={() => {
            const next = fallbackImages[(product.id + 1) % fallbackImages.length]
            if (src !== next) setSrc(next)
          }}
        />
        {product.saudavel && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-nutrigo-green/95 px-3 py-1.5 text-xs font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-[#f5f6f2]" aria-hidden="true" />
            Healthy
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-5 pb-4 pt-4">
        <h3 className="text-lg font-bold leading-snug text-[#273024] transition-colors group-hover:text-nutrigo-green">
          {product.nome}
        </h3>
        <div className="flex items-center gap-1.5 text-sm font-bold text-nutrigo-green" aria-label="5 de 5 estrelas">
          <span aria-hidden="true">★★★★★</span>
          <span className="text-xs font-semibold text-[#8b8b8b]">(5.0)</span>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <span className="text-xl font-extrabold text-nutrigo-brown">
            {formatPrice(product.preco)}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit?.(product)}
              className="flex-1 py-2 text-xs font-medium rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete?.(product)}
              className="flex-1 py-2 text-xs font-medium rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition"
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
