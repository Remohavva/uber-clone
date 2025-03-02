import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import RideRequest from './pages/RideRequest';
import DriverDashboard from './pages/DriverDashboard';
import Landing from './pages/Landing';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {/* Only show Navbar when user is authenticated */}
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        
        <Routes>
          {/* Public routes */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Landing />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login setAuth={setIsAuthenticated} />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register setAuth={setIsAuthenticated} />} />

          {/* Protected routes */}
          <Route
            path="/home"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/request-ride"
            element={isAuthenticated ? <RideRequest /> : <Navigate to="/login" />}
          />
          <Route
            path="/driver/dashboard"
            element={isAuthenticated ? <DriverDashboard /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
