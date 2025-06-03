import { ProductModel } from '../../models/ProductModel';
import './Product.scss';

type props = {
  product: ProductModel;
};

const Product = ({ product }: props) => {
  return (
    <div className="product-row">
      <div className="name-amount-group">
            <div className="icon">{product.icon}</div>
        <div className="name">{product.name}</div>
        <div className="amount">{product.amount}</div>

        {product.productReplacement && (
          <div className="replacement-icon">❗
            <div className="replacement-popup">
              <div className="replacement-name">{product.productNameReplacement}</div>
              <div className="replacement-amount">{product.productAmountReplacement}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
