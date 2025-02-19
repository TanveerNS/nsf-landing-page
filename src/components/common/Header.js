import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to track if the menu is open or not

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle the menu visibility
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src="/path/to/your/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menu in the center (only on larger screens) */}
        <nav className="hidden sm:flex space-x-6 mx-auto">
          <a href="#reviews" className="text-gray-700 hover:text-primary">Reviews & Examples</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-primary">How it Works</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary">Pricing</a>
        </nav>

        {/* Buttons on the right (only on larger screens) */}
        <div className="hidden sm:flex space-x-4">
          <button className="border border-primaryLight text-black px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition">Login</button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryDark transition">Get Your Photo</button>
        </div>
      </div>

      {/* Mobile Menu (visible when `isMenuOpen` is true) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a href="#reviews" className="text-gray-700 hover:text-primary">Reviews & Examples</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary">Pricing</a>
            <div className="flex flex-col space-y-4 mt-4 w-full px-4">
              <button className="border border-primaryLight text-black w-full py-2 rounded-lg hover:bg-primary hover:text-white transition">Login</button>
              <button className="bg-primary text-white w-full py-2 rounded-lg hover:bg-primaryDark transition">Get Your Photo</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
