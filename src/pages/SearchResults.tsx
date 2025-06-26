
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import FilterSidebar from '../components/FilterSidebar';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');

  const query = searchParams.get('q') || '';
  const location = searchParams.get('location') || '';
  const type = searchParams.get('type') || 'both';

  // Mock job data
  const jobs = [
    {
      id: '1',
      title: 'Software Engineer - Full Stack',
      company: 'TCS',
      location: 'Bangalore, Karnataka',
      salary: '₹6-12 LPA',
      type: 'private' as const,
      description: 'We are looking for a skilled Full Stack Developer to join our dynamic team...',
      posted: '2 days ago',
      source: 'TCS Careers'
    },
    {
      id: '2',
      title: 'Assistant Manager - State Bank of India',
      company: 'State Bank of India',
      location: 'Multiple Locations',
      salary: '₹5-8 LPA',
      type: 'government' as const,
      deadline: '15 Jan 2025',
      description: 'SBI is recruiting for Assistant Manager positions across various branches...',
      posted: '5 days ago',
      source: 'SBI.co.in'
    },
    {
      id: '3',
      title: 'Data Scientist',
      company: 'Flipkart',
      location: 'Hyderabad, Telangana',
      salary: '₹12-20 LPA',
      type: 'private' as const,
      description: 'Join our data science team to build ML models and drive business insights...',
      posted: '1 day ago',
      source: 'Flipkart Careers'
    },
    {
      id: '4',
      title: 'Junior Engineer - Indian Railways',
      company: 'Indian Railways',
      location: 'All India',
      salary: '₹3.5-5 LPA',
      type: 'government' as const,
      deadline: '28 Jan 2025',
      description: 'Railway Recruitment Board is conducting recruitment for Junior Engineer positions...',
      posted: '3 days ago',
      source: 'RRB Official'
    },
    {
      id: '5',
      title: 'Product Manager',
      company: 'Paytm',
      location: 'Noida, UP',
      salary: '₹15-25 LPA',
      type: 'private' as const,
      description: 'Lead product development and strategy for our fintech solutions...',
      posted: '4 days ago',
      source: 'Paytm Careers'
    },
    {
      id: '6',
      title: 'Assistant Professor - Computer Science',
      company: 'Delhi University',
      location: 'New Delhi',
      salary: '₹4-7 LPA',
      type: 'government' as const,
      deadline: '10 Feb 2025',
      description: 'Department of Computer Science is seeking qualified candidates for faculty positions...',
      posted: '1 week ago',
      source: 'DU Official'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    if (type === 'government' && job.type !== 'government') return false;
    if (type === 'private' && job.type !== 'private') return false;
    if (query && !job.title.toLowerCase().includes(query.toLowerCase()) && 
        !job.company.toLowerCase().includes(query.toLowerCase())) return false;
    if (location && !job.location.toLowerCase().includes(location.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar Section */}
      <div className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <SearchBar className="shadow-sm" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Results Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredJobs.length} Jobs Found
            </h1>
            {query && (
              <p className="text-gray-600">
                Showing results for "{query}"
                {location && ` in ${location}`}
              </p>
            )}
          </div>
          
          {/* Sort Options */}
          <div className="mt-4 md:mt-0">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="date">Latest First</option>
              <option value="salary-high">Salary: High to Low</option>
              <option value="salary-low">Salary: Low to High</option>
              <option value="deadline">Deadline</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar 
              isOpen={isFilterOpen} 
              onToggle={() => setIsFilterOpen(!isFilterOpen)} 
            />
          </div>

          {/* Job Results */}
          <div className="lg:col-span-3">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">Previous</button>
                  <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded">1</button>
                  <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900">2</button>
                  <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900">3</button>
                  <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">Next</button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
