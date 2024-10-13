import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Usuarios from './components/Usuarios';
import Libros from './components/Libros';
import Categorias from './components/Categorias';
import Prestamos from './components/Prestamos';
import Navbar from './components/Navbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Aquí implementarías la lógica de autenticación real
    console.log('Intento de inicio de sesión:', email, password);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {isLoggedIn && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <Login onLogin={handleLogin} /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!isLoggedIn ? <Register /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/usuarios" element={isLoggedIn ? <Usuarios /> : <Navigate to="/login" />} />
          <Route path="/libros" element={isLoggedIn ? <Libros /> : <Navigate to="/login" />} />
          <Route path="/categorias" element={isLoggedIn ? <Categorias /> : <Navigate to="/login" />} />
          <Route path="/prestamos" element={isLoggedIn ? <Prestamos /> : <Navigate to="/login" />} />
          <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;