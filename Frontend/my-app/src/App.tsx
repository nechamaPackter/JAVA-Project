// App.tsx
import React from 'react';
import Recipe from './components/Recipe/Recipe';
import { RecipeModel } from './models/RecipeModel';

const sampleRecipe: RecipeModel = {
  id: 1,
  name: 'סלט ירקות',
  instructions: 'לחתוך את כל הירקות לקוביות, לערבב ולהוסיף תיבול.',
  imageUrl: 'https://via.placeholder.com/200',
  level: 'קל',
  typeFood: 'סלט',
  dateCreated: new Date(),
  preparationTime: 10,
  products: [
    {
      id: 1,
      productReplacement: false,
      name: 'מלפפון',
      icon: '🥒',
      amount: '2 יחידות',
    },
    {
      id: 2,
      productReplacement: true,
      name: 'עגבנייה',
      icon: '🍅',
      amount: '3 יחידות',
      productNameReplacement: 'עגבניית שרי',
      productAmountReplacement: '5 יחידות',
    },
    {
      id: 3,
      productReplacement: false,
      name: 'בצל',
      icon: '🧅',
      amount: '1 יחידה',
    },
  ],
};

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Recipe recipe={sampleRecipe} />
    </div>
  );
};

export default App;
