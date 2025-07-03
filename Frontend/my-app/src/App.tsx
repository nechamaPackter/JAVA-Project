
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ToastComponent from './components/ToastComponent/ToastComponent';

const Login = lazy(() => import('./components/Login/Login'));
const SignUpForm = lazy(() => import('./components/SignUp/SignUp'));
const CustomerHomePage = lazy(() => import('./components/CustomerHomePage/CustomerHomePage'));
const ManagerHomePage = lazy(() => import('./components/ManagerHomePage/ManagerHomePage'));

function App() {
  const user = JSON.parse(localStorage.getItem("customerId") || "null");
  const role = localStorage.getItem("role");

  const renderHomePage = () => {
    if (!user) return <Navigate to="/login" />;
    if (role === 'manager') return <ManagerHomePage />;
    return <CustomerHomePage />;
  };

  return (
    <Router>
      <ToastComponent />
      <Suspense fallback={<div>טוען...</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/home" element={renderHomePage()} />
          <Route path="*" element={<div>404 - הדף לא נמצא</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
