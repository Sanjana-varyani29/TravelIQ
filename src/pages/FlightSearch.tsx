import React, { useState } from 'react';
import { Plane, Calendar, Users, ArrowRight } from 'lucide-react';

const FlightSearch = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Flight</h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
            <div className="relative">
              <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
                placeholder="Departure city"
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div className="relative">
              <Plane className="absolute left-3 top-3 h-5 w-5 text-gray-400 transform rotate-90" />
              <input
                type="text"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
                placeholder="Arrival city"
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="number"
                min="1"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value))}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="lg:col-span-1 flex items-end">
            <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors">
              Search Flights
            </button>
          </div>
        </div>
      </div>

      {/* Sample Flight Results */}
      <div className="space-y-6">
        {[1, 2, 3].map((flight) => (
          <div key={flight} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold">09:00</p>
                    <p className="text-gray-600">NYC</p>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className="h-0.5 flex-1 bg-gray-300"></div>
                    <Plane className="h-6 w-6 text-blue-600 mx-4" />
                    <div className="h-0.5 flex-1 bg-gray-300"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold">12:00</p>
                    <p className="text-gray-600">LAX</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">American Airlines • Flight AA123</p>
                  <p className="text-gray-600">3h 00m • Direct</p>
                </div>
              </div>
              <div className="md:ml-8 mt-4 md:mt-0 text-center md:text-right">
                <p className="text-3xl font-bold text-blue-600">$299</p>
                <button className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightSearch;