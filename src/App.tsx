import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CategoryFilter from './components/categoryfilter/CategoryFilter';
import ProductListTest from './components/productlisttest/ProductListTest';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [healthyOnly, setHealthyOnly] = useState(false);

  return (
    <Routes>
      <Route path='/' element={
        <>
          <CategoryFilter 
            onCategoryChange={setSelectedCategory}
            onHealthyChange={setHealthyOnly}
          />
          <ProductListTest 
            selectedCategory={selectedCategory}
            healthyOnly={healthyOnly}
          />
        </>
      } />
    </Routes>
  );
}

export default App;