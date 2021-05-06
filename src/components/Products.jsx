import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/components/Products.scss';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;
  const handdleAddToCart = (product) => () => {
    addToCart(product);
  };
  return (
    <div>
      <div className="Products">
        <div className="Products-items">
          {products.map((product) => (
            <Product key={product.id} product={product} handdleAddToCart={handdleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
