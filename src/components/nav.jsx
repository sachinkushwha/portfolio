import { useState } from "react";
import { Menu, X } from "react-feather"; // optional for icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold gradient-text">Sachin kushwaha</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 transition">Home</a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-indigo-600"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Skills</a>
            <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
