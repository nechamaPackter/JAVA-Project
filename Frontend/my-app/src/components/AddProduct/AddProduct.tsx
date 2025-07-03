import React from 'react';
import './AddProduct.scss'

export type Product = {
  name: string;
  quantity: string;
  hasSubstitute: boolean;
  substituteName: string;
};

type AddProductFormProps = {
  product: Product;
  onChange: (field: keyof Product, value: any) => void;
  onRemove: () => void;
  onSave: () => void;
};

export default function AddProduct({ product, onChange, onRemove, onSave }: AddProductFormProps) {
  return (
    <div className="product-group">
      <input
        type="text"
        placeholder="שם מוצר"
        value={product.name}
        onChange={e => onChange('name', e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="כמות"
        value={product.quantity}
        onChange={e => onChange('quantity', e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={product.hasSubstitute}
          onChange={e => onChange('hasSubstitute', e.target.checked)}
        />
        יש תחליף
      </label>
      {product.hasSubstitute && (
        <input
          type="text"
          placeholder="שם תחליף"
          value={product.substituteName}
          onChange={e => onChange('substituteName', e.target.value)}
          required={product.hasSubstitute}
        />
      )}
      <button type="button" onClick={onRemove} style={{ marginLeft: '10px' }}>
        ❌ מחק מוצר
      </button>
      <button type="button" onClick={onSave} style={{ marginLeft: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
        💾 שמור מוצר
      </button>
    </div>
  );
}
