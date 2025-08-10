import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // ✅ Clear session or login info
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData"); // if any

    // ✅ Redirect to login
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 px-8 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container-fuild mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/home">🚀 Chandan Singh</Link>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-5">
          <Link to="/home" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/contact" className="hover:text-purple-400">Contact</Link>
          <button onClick={handleLogout} className="hover:text-red-400">Logout</button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4">
          <Link to="/home" onClick={() => setIsOpen(false)} className="block py-2 hover:text-blue-400">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-green-400">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-purple-400">Contact</Link>
          <button onClick={() => { setIsOpen(false); handleLogout(); }} className="block py-2 hover:text-red-400">Logout</button>
        </div>
      )}
    </nav>
  );
}
