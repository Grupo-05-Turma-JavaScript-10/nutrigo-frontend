import ProductList from './components/products/ProductList'
import type Product from './models/Product'

function App() {
  const products : any = [
    {
      id: 1,
      nome: 'Fresh Garden Salad Bowl',
      descricao: 'Crisp greens, cherry tomatoes, and herbs.',
      preco: 12.99,
      saudavel: false,
      foto:
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 2,
      nome: 'Quinoa Power Bowl',
      descricao: 'Quinoa, avocado, and colorful veggies.',
      preco: 14.99,
      saudavel: false,
      foto:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 3,
      nome: 'Berry Bliss Smoothie Bowl',
      descricao: 'Berries, granola, and yogurt swirl.',
      preco: 10.99,
      saudavel: true,
      foto:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 4,
      nome: 'Herb Roasted Salmon',
      descricao: 'Salmon with charred onions.',
      preco: 18.5,
      saudavel: true,
      foto:
        'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 5,
      nome: 'Beet & Cucumber Salad',
      descricao: 'Fresh greens with beet slices.',
      preco: 11.5,
      saudavel: true,
      foto:
        'https://images.unsplash.com/photo-1505576633757-0ac1084af824?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: 6,
      nome: 'Grilled Chicken Plate',
      descricao: 'Grilled chicken with seasonal sides.',
      preco: 15.75,
      saudavel: true,
      foto:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-nutrigo-cream px-6 pb-14 pt-8 text-[#2f2f2f] sm:px-8">
        <ProductList title="All Products" products={products} />
      </main>
    </>
  )
}

export default App
