import React from 'react';
import Product from '../Product/Product';  // תתאימי נתיב לפי הפרויקט שלך
import { ProductModel } from '../../models/ProductModel';

type ProductListProps = {
  products: ProductModel[];
};

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-list-row">
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
