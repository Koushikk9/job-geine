
import React, { useState } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ className = "" }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('both');
  const [isRemote, setIsRemote] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      q: searchQuery,
      location: location,
      type: jobType,
      remote: isRemote.toString()
    });
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <form onSubmit={handleSearch} className="space-y-4">
        {/* Job Type Toggle */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setJobType('government')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              jobType === 'government' 
                ? 'bg-blue-500 text-white shadow-sm' 
                : 'text-blue-600 hover:bg-blue-50'
            }`}
          >
            🏛 Government
          </button>
          <button
            type="button"
            onClick={() => setJobType('private')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              jobType === 'private' 
                ? 'bg-gray-700 text-white shadow-sm' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            🏢 Private
          </button>
          <button
            type="button"
            onClick={() => setJobType('both')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              jobType === 'both' 
                ? 'bg-gradient-to-r from-blue-500 to-gray-700 text-white shadow-sm' 
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Both
          </button>
        </div>

        {/* Search Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Job title, skills, company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Remote Toggle */}
        <div className="flex items-center space-x-3">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isRemote}
              onChange={(e) => setIsRemote(e.target.checked)}
              className="sr-only"
            />
            <div className={`relative w-12 h-6 rounded-full transition-colors ${
              isRemote ? 'bg-green-500' : 'bg-gray-300'
            }`}>
              <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                isRemote ? 'translate-x-6' : 'translate-x-0'
              }`}></div>
            </div>
            <span className="ml-2 text-sm text-gray-700">Remote Work</span>
          </label>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Search Jobs
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
