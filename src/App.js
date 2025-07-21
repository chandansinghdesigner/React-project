import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';  // 👈 import path
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
<Router>

<Navbar /> {/* 👈 use the Navbar component here */}

  <div className="container mx-auto px-4">
    <div className="flex justify-center items-center h-screen bg-gray-100">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      
    </div>
  </div>
</Router>

  );
}

export default App;