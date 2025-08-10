// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './Shared/Login';
import RequireAuth from './components/RequireAuth'; // ✅ Import here

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="container-fuild">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* ✅ Wrap protected routes */}
          <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
          <Route path="/about" element={<RequireAuth><About /></RequireAuth>} />
          <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout  />
    </Router>
  );
}

export default App;
