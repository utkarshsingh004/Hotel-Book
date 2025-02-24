import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <div className="flex items-center border-b-2 border-gray-200 py-2">
          <MapPin className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Where are you going?"
            className="ml-2 w-full focus:outline-none"
          />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center border-b-2 border-gray-200 py-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Check-in - Check-out"
            className="ml-2 w-full focus:outline-none"
          />
        </div>
      </div>
      
      <div className="flex-1">
        <div className="flex items-center border-b-2 border-gray-200 py-2">
          <Users className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Guests"
            className="ml-2 w-full focus:outline-none"
          />
        </div>
      </div>
      
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
        <Search className="w-5 h-5 mr-2" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;