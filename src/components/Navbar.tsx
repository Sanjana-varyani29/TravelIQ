import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Globe, Menu, Search, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TravelIQ</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/package-generator" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                Package Generator
              </Link>
              <Link to="/flights" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Flights
              </Link>
              <Link to="/search" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                Hotels
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-900">
              <Search className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
            <button className="sm:hidden p-2 rounded-full text-gray-500 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;