import { RecipeModel } from "../../models/RecipeModel";
import Product from "../Product/Product";
import ResponseList from "../ResponseList/ResponseList";

type Props = {
  recipe: RecipeModel;
};

const Recipe = ({ recipe }: Props) => {
  return (
    <div className="recipe">
      <div className="recipe-header">
        <div className="recipe-name">{recipe.name}</div>
        <div className="recipe-image">
          <img src={recipe.imageUrl} alt={recipe.name} />
        </div>
        <div className="recipe-info">
          <div>⏱ זמן הכנה: {recipe.preparationTime} דקות</div>
          <div>רמה: {recipe.level}</div>
          <div>סוג: {recipe.typeFood}</div>
          <div>נוצר בתאריך: {recipe.dateCreated.toLocaleDateString()}</div>
        </div>
      </div>

      <div className="recipe-instructions">
        <div>הוראות הכנה:</div>
        <div>{recipe.instructions}</div>
      </div>

      <div className="recipe-products">
        <div className="products-title">רשימת מוצרים:</div>
        {recipe.products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <div>
        <ResponseList />
      </div>
    </div>
  );
};

export default Recipe;
