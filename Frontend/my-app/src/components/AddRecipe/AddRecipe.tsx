// AddRecipeForm.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AddRecipe.scss';
import AddProduct, { Product } from '../AddProduct/AddProduct';

export default function AddRecipe() {
  const [recipe, setRecipe] = useState({
    name: '',
    instructions: '',
    imageUrl: '',
    level: '',
    typeFood: '',
    dateCreated: '',
    preparationTime: 0,
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [existingProducts, setExistingProducts] = useState<{ id: number; name: string }[]>([]);
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({
    name: '',
    quantity: '',
    hasSubstitute: false,
    substituteName: '',
  });

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setExistingProducts(res.data))
      .catch(err => console.error('Error loading products', err));
  }, []);

  const handleRecipeChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRecipe(prev => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (index: number, field: keyof Product, value: any) => {
    const updatedProducts = [...products];
    updatedProducts[index] = { ...updatedProducts[index], [field]: value };

    if (field === 'hasSubstitute' && value === false) {
      updatedProducts[index].substituteName = '';
    }
    setProducts(updatedProducts);
  };

  const handleRemoveProduct = (index: number) => {
    setProducts(prev => prev.filter((_, i) => i !== index));
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'add_new') {
      setShowNewProductForm(true);
    } else {
      handleAddExistingProduct(Number(e.target.value));
    }
    e.target.value = ''; // איפוס הבחירה
  };

  const handleAddExistingProduct = (productId: number) => {
    const product = existingProducts.find(p => p.id === productId);
    if (!product) return;
    setProducts(prev => [
      ...prev,
      { name: product.name, quantity: '', hasSubstitute: false, substituteName: '' }
    ]);
    setShowNewProductForm(false);
  };

  const handleAddNewProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
    setShowNewProductForm(false);
    // אפס את טופס המוצר החדש
    setNewProduct({ name: '', quantity: '', hasSubstitute: false, substituteName: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fullData = { ...recipe, products };
      await axios.post('/api/recipes', fullData);
      alert('המתכון נוסף בהצלחה');
      setRecipe({
        name: '',
        instructions: '',
        imageUrl: '',
        level: '',
        typeFood: '',
        dateCreated: '',
        preparationTime: 0,
      });
      setProducts([]);
    } catch (error) {
      console.error('שגיאה בשליחה:', error);
      alert('שגיאה בשליחת המתכון');
    }
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h2>הוספת מתכון</h2>

      <input
        type="text"
        name="name"
        placeholder="שם מתכון"
        value={recipe.name}
        onChange={handleRecipeChange}
        required
      />

      <textarea
        name="instructions"
        placeholder="הוראות הכנה"
        value={recipe.instructions}
        onChange={handleRecipeChange}
        required
      />

      <input
        type="url"
        name="imageUrl"
        placeholder="קישור לתמונה"
        value={recipe.imageUrl}
        onChange={handleRecipeChange}
      />

      <select
        name="level"
        value={recipe.level}
        onChange={handleRecipeChange}
        required
      >
        <option value="">בחר רמת קושי</option>
        <option value="EASY">קל</option>
        <option value="MEDIUM">בינוני</option>
        <option value="HARD">קשה</option>
      </select>

      <select
        name="typeFood"
        value={recipe.typeFood}
        onChange={handleRecipeChange}
        required
      >
        <option value="">בחר סוג אוכל</option>
        <option value="Main_courses">עיקרי</option>
        <option value="Last_courses">אחרון</option>
        <option value="Starters">פתיח</option>
        <option value="Soup">מרק</option>
        <option value="Pies">פשטידות</option>
        <option value="Cakes">עוגות</option>
      </select>

      <input
        type="date"
        name="dateCreated"
        value={recipe.dateCreated}
        onChange={handleRecipeChange}
        required
      />

      <input
        type="number"
        name="preparationTime"
        placeholder="זמן הכנה (בדקות)"
        value={recipe.preparationTime}
        onChange={handleRecipeChange}
        required
      />

      <h3>מוצרים</h3>
      {products.map((product, i) => (
        <AddProduct
          key={i}
          product={product}
          onChange={(field, value) => handleProductChange(i, field, value)}
          onRemove={() => handleRemoveProduct(i)}
          onSave={() => { /* אם תרצי אפשר לממש שמירה ספציפית כאן */ }}
        />
      ))}

      <select onChange={handleDropdownChange} defaultValue="">
        <option value="" disabled>בחר מוצר מהרשימה</option>
        {existingProducts.map(prod => (
          <option key={prod.id} value={prod.id}>{prod.name}</option>
        ))}
        <option value="add_new">➕ הוסף מוצר חדש</option>
      </select>

      {showNewProductForm && (
        <AddProduct
          product={newProduct}
          onChange={(field, value) => setNewProduct(prev => ({ ...prev, [field]: value }))}
          onRemove={() => setShowNewProductForm(false)}
          onSave={() => handleAddNewProduct(newProduct)}
        />
      )}

      <button type="submit">שמור מתכון</button>
    </form>
  );
}
