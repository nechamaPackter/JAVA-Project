// import React from 'react';
// import RecipeList from './components/ListRecipe/ListRecipe';
// import { RecipeModel } from './models/RecipeModel';

// const sampleRecipes: RecipeModel[] = [
//   {
//     id: 1,
//     name: 'סלט ירקות',
//     instructions: 'לחתוך את כל הירקות לקוביות, לערבב ולהוסיף תיבול.',
//     imageUrl: 'https://via.placeholder.com/200',
//     level: 'קל',
//     typeFood: 'סלט',
//     dateCreated: new Date(),
//     preparationTime: 10,
//     products: [
//       {
//         id: 1,
//         productReplacement: false,
//         name: 'מלפפון',
//         icon: '🥒',
//         amount: '2 יחידות',
//       },
//       {
//         id: 2,
//         productReplacement: true,
//         name: 'עגבנייה',
//         icon: '🍅',
//         amount: '3 יחידות',
//         productNameReplacement: 'עגבניית שרי',
//         productAmountReplacement: '5 יחידות',
//       },
//       {
//         id: 3,
//         productReplacement: false,
//         name: 'בצל',
//         icon: '🧅',
//         amount: '1 יחידה',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'פסטה ברוטב עגבניות',
//     instructions: 'לבשל פסטה, להכין רוטב ולערבב.',
//     imageUrl: 'https://via.placeholder.com/200',
//     level: 'בינוני',
//     typeFood: 'פסטה',
//     dateCreated: new Date(),
//     preparationTime: 25,
//     products: [
//       {
//         id: 1,
//         productReplacement: false,
//         name: 'פסטה',
//         icon: '🍝',
//         amount: '500 גרם',
//       },
//       {
//         id: 2,
//         productReplacement: false,
//         name: 'רוטב עגבניות',
//         icon: '🍅',
//         amount: '1 כוס',
//       },
//     ],
//   },
// ];

// const App = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>ברוכים הבאים לרשימת המתכונים</h1>
//       <RecipeList recipes={sampleRecipes} />
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import SignUpForm from './components/SignUp/SignUp'; // וודאי שהנתיב נכון

// const App = () => {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>הרשמה למערכת</h1>
//       <SignUpForm />
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUp/SignUp';
import HomePage from './components/CustomerHomePage/CustomerHomePage';
import AdminHomePage from './components/ManagerHomePage/ManagerHomePage';
import AddRecipeForm from './components/AddRecipe/AddRecipe';
import Login from './components/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ padding: '2rem' }}>
        <h1>הרשמה למערכת</h1>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
           <Route path="/home" element={<AdminHomePage />} /> 
           <Route path="/login" element={<Login />}/>
          {/* <Route path="/admin" element={<AdminHomePage />} /> */}
        <Route path="/admin/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
