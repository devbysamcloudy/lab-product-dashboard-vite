import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  const initialProducts = [
    { name: 'Laptop', price: 1200, available: true },
    { name: 'Phone', price: 800, available: false },
    { name: 'Headphones', price: 200, available: true },
    { name: 'Tablet', price: 500, available: true },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filterAvailable, setFilterAvailable] = useState(false);

  const handleRemove = (name) => {
    setProducts(products.filter((product) => product.name !== name));
  };

  const filteredProducts = filterAvailable
    ? products.filter((product) => product.available)
    : products;

  return (
    <div>
      <h1>Product Dashboard</h1>
      <button onClick={() => setFilterAvailable(false)}>Show All</button>
      <button onClick={() => setFilterAvailable(true)}>Show Available Only</button>

      <ProductList products={filteredProducts} onRemove={handleRemove} />
    </div>
  );
};

export default App;
