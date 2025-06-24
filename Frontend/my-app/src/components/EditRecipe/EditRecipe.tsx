import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { RecipeModel } from '../../models/RecipeModel';

export default function EditRecipe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<RecipeModel | null>(null);

  useEffect(() => {
    if (!id) return;
    axios.get(`/api/recipes/${id}`)
      .then(res => setRecipe(res.data))
      .catch(err => {
        console.error("שגיאה בטעינת מתכון:", err);
        alert("לא ניתן לטעון את המתכון");
      });
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe(prev => prev ? { ...prev, [name]: value } : prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipe) return;
    try {
      await axios.put(`/api/recipes/${recipe.id}`, recipe);
      alert("המתכון עודכן בהצלחה");
      navigate('/home');
    } catch (error) {
      console.error("שגיאה בעדכון:", error);
      alert("שגיאה בעדכון המתכון");
    }
  };

  if (!recipe) return <div>טוען...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>עריכת מתכון</h2>
      <input name="name" value={recipe.name} onChange={handleChange} placeholder="שם המתכון" required />
      <input name="imageUrl" value={recipe.imageUrl} onChange={handleChange} placeholder="תמונה" />
      <textarea name="instructions" value={recipe.instructions} onChange={handleChange} placeholder="הוראות הכנה" />
      <input name="typeFood" value={recipe.typeFood} onChange={handleChange} placeholder="סוג אוכל" />
      <input name="level" value={recipe.level} onChange={handleChange} placeholder="רמת קושי" />
      <input
        type="number"
        name="preparationTime"
        value={recipe.preparationTime}
        onChange={handleChange}
        placeholder="זמן הכנה בדקות"
      />
      <button type="submit">שמור שינויים</button>
    </form>
  );
}
