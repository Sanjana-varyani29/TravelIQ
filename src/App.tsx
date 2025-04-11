import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PackageGenerator from './pages/PackageGenerator';
import BookingPage from './pages/BookingPage';
import FlightSearch from './pages/FlightSearch';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/package-generator" element={<PackageGenerator />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/flights" element={<FlightSearch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;