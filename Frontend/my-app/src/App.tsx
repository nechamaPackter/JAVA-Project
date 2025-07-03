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
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';  // הוספת import ל-Provider
// import store from './redux/store';  // import את ה-store
// import SignUpForm from './components/SignUp/SignUp';
// import HomePage from './components/CustomerHomePage/CustomerHomePage';
// import AdminHomePage from './components/ManagerHomePage/ManagerHomePage';
// import AddRecipeForm from './components/AddRecipe/AddRecipe';
// import Login from './components/Login/Login';

// const App = () => {
//   return (
//     <Provider store={store}> {/* עוטף את האפליקציה עם Provider */}
//       <BrowserRouter>
//         <div style={{ padding: '2rem' }}>
//           <h1>הרשמה למערכת</h1>
//           <Routes>
//             <Route path="/" element={<SignUpForm />} />
//             <Route path="/home" element={<AdminHomePage />} />
//             <Route path="/login" element={<Login />} />
//             {/* <Route path="/admin" element={<AdminHomePage />} /> */}
//             <Route path="/admin/add-recipe" element={<AddRecipeForm />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     </Provider>  
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/Login/Login";
// import SignUp from "./components/SignUp/SignUp";
// import CustomerHomePage from "./components/CustomerHomePage/CustomerHomePage";
// import ManagerHomePage from "./components/ManagerHomePage/ManagerHomePage";
// import ProductList from "./components/ProductList/ProductList";
// // import ToastComponent from "./components/ToastComponent"; // תוסיפי קומפוננטה של toast אם יש

// function App() {
//   const user = JSON.parse(localStorage.getItem("user") || "null");

//   return (
//     <Router>
//       <div>
//         {/* כאן נשים הודעת טוסט אם יש */}
//         {/* <ToastComponent /> */}

//         <Routes>
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           {/* //<Route path="/products" element={<ProductList />} /> */}
//           <Route path="/home" element={
//             user?.role === "manager" ? <ManagerHomePage /> : <CustomerHomePage />
//           } />
//           {/* TODO: הוסיפי עמוד מוצר עם פרמטר */}
//           <Route path="*" element={<div>404 - Page not found</div>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUpForm from './components/SignUp/SignUp';
import CustomerHomePage from './components/CustomerHomePage/CustomerHomePage';
import ManagerHomePage from './components/ManagerHomePage/ManagerHomePage';
import ProductList from './components/ProductList/ProductList';
import ToastComponent from './components/ToastComponent/ToastComponent';

function App() {
  const user = JSON.parse(localStorage.getItem("customerId") || "null");

  return (
    <Router>
      <ToastComponent />
      <Routes>
        <Route path="/admin" element={<ManagerHomePage/>}/>
        <Route path="home" element={<CustomerHomePage/>}/>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpForm />} />
        
        {/* <Route path="/products" element={<ProductList />} />
        <Route path="/home" element={
          user ? (
            // כאן אפשר לשפר בהמשך – לפי תפקיד
            <CustomerHomePage />
          ) : (
            <Navigate to="/login" />
          )
        } /> */}
        <Route path="*" element={<div>404 - הדף לא נמצא</div>} />
      </Routes>
    </Router>
  );
}

export default App;
