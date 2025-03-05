import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">
            <span className="text-teal-400">Afrooz</span>
            <span className="text-white">Estate</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="flex items-center bg-gray-800 rounded-lg p-2 w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search for properties..."
            className="bg-transparent outline-none text-white placeholder-gray-400 w-full md:w-64"
          />
          <button type="submit" className="text-teal-400 hover:text-teal-300">
            <FaSearch className="w-5 h-5" />
          </button>
        </form>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-white hover:text-teal-400 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-teal-400 transition duration-300">
            About
          </Link>
          <Link to="/sign-in" className="text-white hover:text-teal-400 transition duration-300">
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;