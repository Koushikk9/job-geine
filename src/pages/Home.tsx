
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, FileText, PlusCircle, TrendingUp, Users, Building, GraduationCap } from 'lucide-react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const trendingSearches = [
    'Software Engineer', 'Data Analyst', 'UPSC Prelims', 'Bank PO', 'Marketing Manager',
    'Teacher Jobs', 'Civil Engineer', 'Accountant'
  ];

  const categories = [
    { name: 'IT & Software', icon: '💻', count: '15,234' },
    { name: 'Banking & Finance', icon: '🏦', count: '8,456' },
    { name: 'Government Jobs', icon: '🏛️', count: '5,678' },
    { name: 'Healthcare', icon: '⚕️', count: '3,234' },
    { name: 'Education', icon: '📚', count: '4,567' },
    { name: 'Sales & Marketing', icon: '📈', count: '6,789' },
    { name: 'Engineering', icon: '🔧', count: '9,123' },
    { name: 'Design & Creative', icon: '🎨', count: '2,345' }
  ];

  const quickLinks = [
    { name: 'Exam Calendar', icon: Calendar, color: 'text-blue-600' },
    { name: 'Register/Login', icon: Users, color: 'text-green-600' },
    { name: 'Post a Job', icon: PlusCircle, color: 'text-purple-600' },
    { name: 'Results', icon: FileText, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Your Single Stop for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                Every Job
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-2">
              Government & Private Opportunities Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover, Apply, Succeed. All Jobs. All Fields. All Yours.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <SearchBar />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">50K+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">25K+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600">1M+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Searches */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-orange-500" size={24} />
            <h3 className="text-2xl font-bold text-gray-900">Trending Searches</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {trendingSearches.map((search, index) => (
              <Link
                key={index}
                to={`/search?q=${encodeURIComponent(search)}`}
                className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-full text-sm transition-colors"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Building className="text-blue-500" size={24} />
            <h3 className="text-2xl font-bold text-gray-900">Browse by Category</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/search?category=${encodeURIComponent(category.name)}`}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-600">{category.count} jobs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Quick Access</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={`/${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border-2 border-gray-200 hover:border-blue-300 p-6 rounded-xl text-center transition-all hover:shadow-md group"
              >
                <link.icon className={`${link.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} size={32} />
                <h4 className="font-semibold text-gray-900">{link.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of job seekers who found their dream jobs through our platform
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link
              to="/search"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Search Jobs Now
            </Link>
            <Link
              to="/dashboard"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Create Profile
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
