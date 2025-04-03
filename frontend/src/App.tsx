import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          {}
        </Route>

        {}
        <Route element={<PrivateRoute adminOnly={true} />}>
          <Route path="/categories" element={<CategoryPage />} />
        </Route>

        {}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
