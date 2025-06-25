import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeList from '../ListRecipe/ListRecipe';
import { RecipeModel } from '../../models/RecipeModel';

export default function HomePage() {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);

  useEffect(() => {
    const customerId = localStorage.getItem('customerId');
    if (!customerId) {
      alert("משתמש לא מחובר");
      return;
    }

    axios.get(`/api/recipes/for-customer/${customerId}`)
      .then(res => setRecipes(res.data))
      .catch(err => {
        console.error('שגיאה בטעינת מתכונים:', err);
        alert("שגיאה בטעינה");
      });
  }, []);

  return (
    <div>
      <h2>מתכונים מותאמים לך</h2>
      <RecipeList recipes={recipes} />
    </div>
  );
}
