import { useEffect, useState } from 'react';
import axios from 'axios';
import './ManagerHomePage.scss';

type RecipeModel = {
  id: number;
  name: string;
  instructions: string;
  imageUrl: string;
  level: string;
  typeFood: string;
  dateCreated: string; // ISO תאריך בפורמט מחרוזת
  preparationTime: number;
};

export default function AdminHomePage() {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecipes();
  }, []);

  function fetchRecipes() {
    setLoading(true);
    axios.get('/api/recipes')
      .then(res => setRecipes(res.data))
      .catch(err => {
        console.error('Error fetching recipes:', err);
        alert('שגיאה בטעינת המתכונים');
      })
      .finally(() => setLoading(false));
  }

  function handleDelete(id: number) {
    if (!window.confirm('האם אתה בטוח שברצונך למחוק את המתכון הזה?')) return;

    axios.delete(`/api/recipes/${id}`)
      .then(() => {
        alert('המתכון נמחק בהצלחה');
        fetchRecipes();
      })
      .catch(err => {
        console.error('Error deleting recipe:', err);
        alert('שגיאה במחיקת המתכון');
      });
  }

  function handleEdit(id: number) {
    window.location.href = `/admin/edit-recipe/${id}`;
  }

  function handleAddNew() {
    window.location.href = '/admin/add-recipe';
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>כל המתכונים</h2>
      <button onClick={handleAddNew} style={{ marginBottom: 20, padding: '10px 20px' }}>
        הוסף מתכון חדש
      </button>

      {loading ? (
        <p>טוען מתכונים...</p>
      ) : (
        <table border={1} cellPadding={10} cellSpacing={0} style={{ width: '100%', textAlign: 'right' }}>
          <thead>
            <tr>
              <th>שם</th>
              <th>הוראות</th>
              <th>תמונה</th>
              <th>רמת קושי</th>
              <th>סוג אוכל</th>
              <th>תאריך יצירה</th>
              <th>זמן הכנה (בדקות)</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {recipes.length === 0 && (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center' }}>אין מתכונים להצגה</td>
              </tr>
            )}
            {recipes.map(recipe => (
              <tr key={recipe.id}>
                <td>{recipe.name}</td>
                <td style={{ maxWidth: 250, whiteSpace: 'normal', wordWrap: 'break-word' }}>
                  {recipe.instructions.length > 100
                    ? recipe.instructions.substring(0, 100) + '...'
                    : recipe.instructions}
                </td>
                <td>
                  {recipe.imageUrl
                    ? <img src={recipe.imageUrl} alt={recipe.name} style={{ width: 100, height: 'auto' }} />
                    : 'אין תמונה'}
                </td>
                <td>{recipe.level}</td>
                <td>{recipe.typeFood}</td>
                <td>{new Date(recipe.dateCreated).toLocaleDateString('he-IL')}</td>
                <td>{recipe.preparationTime}</td>
                <td>
                  <button onClick={() => handleEdit(recipe.id)} style={{ marginRight: 8 }}>
                    ערוך
                  </button>
                  <button onClick={() => handleDelete(recipe.id)}>
                    מחק
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
