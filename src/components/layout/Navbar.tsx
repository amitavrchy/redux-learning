import React from 'react';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-blue-600">MyApp</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 items-center">
            <Link
              to={"/task"}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Tasks
            </Link>
            <Link
              to={"/user"}
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
            >
              Users
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
