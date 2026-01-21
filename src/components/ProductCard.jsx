import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div
      className={`${styles.card} ${!product.available ? styles.outOfStock : ''}`}
      data-testid={`product-${product.name}`}
    >
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>{product.available ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => onRemove(product.name)}>Remove</button>
    </div>
  );
};

export default ProductCard;
