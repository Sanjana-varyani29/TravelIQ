import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plane, Hotel, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Your Next Adventure
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore the world with personalized travel packages
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="/package-generator" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Plan Your Trip
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Search className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Perfect Destinations</h3>
            <p className="text-gray-600">Discover handpicked locations tailored to your preferences.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Calendar className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Custom Itineraries</h3>
            <p className="text-gray-600">Create personalized travel plans that match your schedule.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Hotel className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Accommodations</h3>
            <p className="text-gray-600">Book from a curated selection of premium stays.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;