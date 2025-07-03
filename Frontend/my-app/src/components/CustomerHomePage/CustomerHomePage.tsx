import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';  // הוספת useSelector
import { RootState } from '../../redux/store'; // הוספת RootState
import axios from 'axios';
import RecipeList from '../ListRecipe/ListRecipe';
import { RecipeModel } from '../../models/RecipeModel';

export default function HomePage() {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);
  const user = useSelector((state: RootState) => state.user); // שליפת פרטי המשתמש מ-Redux

  useEffect(() => {
    const customerId = user.customerId;  // לקיחה מ-Redux
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
  }, [user.customerId]); // מאזין לשינויים ב-customerId

  return (
    <div>
      <h2>שלום {user.name}, המתכונים המומלצים לך:</h2>
      <RecipeList recipes={recipes} />
    </div>
  );
}
