import type Product from '../../models/Product'

interface ProductCardProps {
  product: Product
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_2px_rgba(26,26,26,0.08),0_8px_20px_rgba(26,26,26,0.08)]">
      <div className="relative h-48 overflow-hidden">
        <img className="h-full w-full object-cover" src={product.foto} alt={product.nome} loading="lazy" />
        {product.saudavel && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full bg-nutrigo-green/95 px-3 py-1.5 text-xs font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-[#f5f6f2]" aria-hidden="true" />
            Healthy
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 px-5 pb-4 pt-4">
        <h3 className="text-lg font-bold leading-snug text-[#273024]">{product.nome}</h3>
        <div className="flex items-center gap-1.5 text-sm font-bold text-nutrigo-green" aria-label="5 de 5 estrelas">
          <span aria-hidden="true">★★★★★</span>
          <span className="text-xs font-semibold text-[#8b8b8b]">(5.0)</span>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-extrabold text-nutrigo-brown">
            {formatPrice(product.preco)}
          </span>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-nutrigo-green text-xl font-bold text-white shadow-[0_6px_14px_rgba(101,140,72,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(101,140,72,0.4)]"
            aria-label={`Adicionar ${product.nome}`}
          >
            +
          </button>
        </div>
      </div>
    </article>
  )
}
