
import React, { useState } from 'react';
import { User, Bookmark, FileText, Calendar, Settings, Bell, Download, Edit } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('saved');

  const tabs = [
    { id: 'saved', label: 'Saved Jobs', icon: Bookmark, count: 12 },
    { id: 'applied', label: 'Applied Jobs', icon: FileText, count: 8 },
    { id: 'profile', label: 'Profile', icon: User, count: null },
    { id: 'calendar', label: 'Exam Calendar', icon: Calendar, count: 5 }
  ];

  const savedJobs = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'TCS',
      location: 'Bangalore',
      type: 'private',
      savedDate: '2 days ago',
      deadline: '15 Jan 2025'
    },
    {
      id: '2',
      title: 'Assistant Manager',
      company: 'State Bank of India',
      type: 'government',
      location: 'Multiple Locations',
      savedDate: '1 week ago',
      deadline: '20 Jan 2025'
    }
  ];

  const appliedJobs = [
    {
      id: '1',
      title: 'Data Analyst',
      company: 'Flipkart',
      type: 'private',
      appliedDate: '5 days ago',
      status: 'Under Review'
    },
    {
      id: '2',
      title: 'Junior Engineer',
      company: 'Indian Railways',
      type: 'government',
      appliedDate: '2 weeks ago',
      status: 'Application Submitted'
    }
  ];

  const examCalendar = [
    {
      exam: 'UPSC Prelims 2025',
      date: '28 May 2025',
      registrationDeadline: '15 Feb 2025',
      status: 'upcoming'
    },
    {
      exam: 'SBI PO Exam',
      date: '12 Mar 2025',
      registrationDeadline: '25 Jan 2025',
      status: 'registration_open'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                <User size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome, Rahul Kumar</h1>
                <p className="text-gray-600">Software Developer | 3 years experience</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 text-gray-600 hover:text-blue-600 border rounded-lg">
                <Bell size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 border rounded-lg">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <tab.icon size={20} />
                      <span className="font-medium">{tab.label}</span>
                    </div>
                    {tab.count && (
                      <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'saved' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Saved Jobs</h2>
                </div>
                <div className="p-6">
                  {savedJobs.length === 0 ? (
                    <div className="text-center py-8">
                      <Bookmark size={48} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No saved jobs yet</h3>
                      <p className="text-gray-500">Start browsing and save jobs you're interested in</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {savedJobs.map((job) => (
                        <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  job.type === 'government' 
                                    ? 'bg-blue-100 text-blue-700' 
                                    : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {job.type === 'government' ? '🏛 Government' : '🏢 Private'}
                                </span>
                                <span className="text-xs text-gray-500">Saved {job.savedDate}</span>
                              </div>
                              <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                              <p className="text-gray-700 mb-1">{job.company}</p>
                              <p className="text-gray-600 text-sm">{job.location}</p>
                              {job.deadline && (
                                <p className="text-red-600 text-sm font-medium mt-2">
                                  Deadline: {job.deadline}
                                </p>
                              )}
                            </div>
                            <div className="flex space-x-2 ml-4">
                              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                                Apply
                              </button>
                              <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'applied' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Applied Jobs</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {appliedJobs.map((job) => (
                      <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                job.type === 'government' 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {job.type === 'government' ? '🏛 Government' : '🏢 Private'}
                              </span>
                              <span className="text-xs text-gray-500">Applied {job.appliedDate}</span>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                            <p className="text-gray-700 mb-2">{job.company}</p>
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              job.status === 'Under Review' 
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {job.status}
                            </span>
                          </div>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="space-y-6">
                {/* Profile Overview */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Profile Overview</h2>
                    <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                      <Edit size={16} />
                      Edit Profile
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <p className="text-gray-900">Rahul Kumar</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-gray-900">rahul.kumar@email.com</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                      <p className="text-gray-900">+91 9876543210</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                      <p className="text-gray-900">Bangalore, Karnataka</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
                      <p className="text-gray-900">3 years</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Role</label>
                      <p className="text-gray-900">Software Developer</p>
                    </div>
                  </div>
                </div>

                {/* Resume Section */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Resume</h3>
                    <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 mb-2">Upload your latest resume</p>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Upload Resume
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-900">Exam Calendar</h2>
                  <p className="text-gray-600 mt-1">Upcoming government job exams and deadlines</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {examCalendar.map((exam, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{exam.exam}</h3>
                            <div className="space-y-1">
                              <p className="text-sm text-gray-600">
                                <span className="font-medium">Exam Date:</span> {exam.date}
                              </p>
                              <p className="text-sm text-gray-600">
                                <span className="font-medium">Registration Deadline:</span> {exam.registrationDeadline}
                              </p>
                            </div>
                            <span className={`inline-flex mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                              exam.status === 'registration_open' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {exam.status === 'registration_open' ? 'Registration Open' : 'Upcoming'}
                            </span>
                          </div>
                          <button className="px-4 py-2 border border-blue-600 text-blue-600 text-sm rounded-lg hover:bg-blue-50">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
