import { RecipeModel } from "../../models/RecipeModel";
import Recipe from "../Recipe/Recipe";

type Props = {
  recipes: RecipeModel[];
};

const RecipeList = ({ recipes }: Props) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <div>לא נמצאו מתכונים.</div>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-item">
            <Recipe recipe={recipe} />
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
