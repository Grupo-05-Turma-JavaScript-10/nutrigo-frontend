import type Product from '../../models/Product'
import ProductCard from './ProductCard'

interface ProductListProps {
  title: string
  products: Product[]
}

export default function ProductList({ title, products }: ProductListProps) {
  return (
    <section className="mx-auto w-full max-w-6xl">
      <header className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-extrabold text-nutrigo-brown">{title}</h2>
        <span className="text-sm text-[#6a6a6a]">{products.length} items</span>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
