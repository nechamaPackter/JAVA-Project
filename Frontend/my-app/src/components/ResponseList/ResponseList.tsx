import React from "react";
import { RecipeModel } from "../../models/RecipeModel";
import Recipe from "../Recipe/Recipe";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 👈 זה המקום לכתוב את זה

type Props = {
  recipes: RecipeModel[];
  onDelete?: (id: number) => void;
};

const RecipeList = ({ recipes, onDelete }: Props) => {
  const navigate = useNavigate(); // 👈 וזה כאן בתוך הקומפוננטה

  const handleDelete = async (id: number) => {
    if (!window.confirm("האם את/ה בטוח שברצונך למחוק את המתכון?")) return;
    try {
      await axios.delete(`/api/recipes/${id}`);
      if (onDelete) onDelete(id);
    } catch (error) {
      console.error("שגיאה במחיקה:", error);
      alert("שגיאה במחיקת המתכון");
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/edit-recipe/${id}`); // 👈 כאן מתבצע הניווט לדף העריכה
  };

  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <div>לא נמצאו מתכונים.</div>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <Recipe recipe={recipe} />
            <div style={{ marginTop: "0.5rem", display: "flex", gap: "0.5rem" }}>
              <button onClick={() => handleEdit(recipe.id)}>ערוך</button> {/* 👈 כפתור עריכה */}
              <button onClick={() => handleDelete(recipe.id)}>מחק</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
