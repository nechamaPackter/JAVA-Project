import React from 'react';
import RecipeList from './components/ListRecipe/ListRecipe';
import { RecipeModel } from './models/RecipeModel';

const sampleRecipes: RecipeModel[] = [
  {
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
  },
  {
    id: 2,
    name: 'פסטה ברוטב עגבניות',
    instructions: 'לבשל פסטה, להכין רוטב ולערבב.',
    imageUrl: 'https://via.placeholder.com/200',
    level: 'בינוני',
    typeFood: 'פסטה',
    dateCreated: new Date(),
    preparationTime: 25,
    products: [
      {
        id: 1,
        productReplacement: false,
        name: 'פסטה',
        icon: '🍝',
        amount: '500 גרם',
      },
      {
        id: 2,
        productReplacement: false,
        name: 'רוטב עגבניות',
        icon: '🍅',
        amount: '1 כוס',
      },
    ],
  },
];

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>ברוכים הבאים לרשימת המתכונים</h1>
      <RecipeList recipes={sampleRecipes} />
    </div>
  );
};

export default App;
