
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Calendar, ExternalLink, Bookmark, Share2, ArrowLeft } from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock job data
  const job = {
    id: id,
    title: 'Software Engineer - Full Stack',
    company: 'Tata Consultancy Services (TCS)',
    location: 'Bangalore, Karnataka',
    salary: '₹6-12 LPA',
    type: 'private',
    posted: '2 days ago',
    deadline: '30 Jan 2025',
    source: 'TCS Careers',
    description: 'We are looking for a skilled Full Stack Developer to join our dynamic team and work on cutting-edge projects for global clients.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '2-4 years of experience in full-stack development',
      'Proficiency in React.js, Node.js, and databases',
      'Strong problem-solving and communication skills',
      'Experience with cloud platforms (AWS/Azure) preferred'
    ],
    responsibilities: [
      'Develop and maintain web applications using modern technologies',
      'Collaborate with cross-functional teams to deliver high-quality software',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and technical discussions',
      'Stay updated with latest technology trends and best practices'
    ],
    benefits: [
      'Competitive salary and performance bonuses',
      'Health insurance for employee and family',
      'Flexible working hours and remote work options',
      'Professional development and training opportunities',
      'Employee stock purchase plan'
    ],
    applicationProcess: [
      'Submit your application through our careers portal',
      'Initial screening and phone interview',
      'Technical assessment and coding challenge',
      'Final interview with hiring manager',
      'Offer and onboarding process'
    ]
  };

  const isGovernment = job.type === 'government';
  const daysLeft = 28; // Mock countdown

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'eligibility', label: 'Eligibility' },
    { id: 'apply', label: 'How to Apply' },
    { id: 'process', label: 'Selection Process' },
    { id: 'dates', label: 'Important Dates' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link to="/search" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft size={20} className="mr-2" />
          Back to Search Results
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      isGovernment 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {isGovernment ? '🏛 Government' : '🏢 Private'}
                    </span>
                    {job.deadline && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                        <Clock size={14} className="mr-1" />
                        {daysLeft} days left
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                  <h2 className="text-xl text-gray-700 font-semibold mb-4">{job.company}</h2>
                  
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      Posted {job.posted}
                    </div>
                    {job.salary && (
                      <div className="text-green-600 font-semibold">
                        {job.salary}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <button className="p-2 text-gray-400 hover:text-red-500 border rounded-lg">
                    <Bookmark size={20} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-500 border rounded-lg">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {job.source && (
                <div className="text-sm text-gray-500 mb-4">
                  Source: {job.source}
                </div>
              )}

              <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {job.benefits.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'eligibility' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Requirements & Qualifications</h3>
                    <ul className="space-y-3">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-3 mt-1">✓</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'apply' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Process</h3>
                    <div className="space-y-4">
                      {job.applicationProcess.map((step, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Selection Process</h3>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-gray-700">
                        The selection process includes multiple rounds of interviews and assessments to evaluate both technical skills and cultural fit. Detailed information will be provided after application submission.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'dates' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Dates</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Application Deadline</span>
                        <span className="font-semibold text-red-600">{job.deadline}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-700">Interview Process</span>
                        <span className="font-semibold">Feb 2025</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Expected Joining</span>
                        <span className="font-semibold">Mar 2025</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Apply Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4">
                  Apply Now
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Save Job
                </button>
                
                {job.deadline && (
                  <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">{daysLeft}</div>
                      <div className="text-sm text-red-700">Days Remaining</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Company Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About Company</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600">Industry:</span>
                    <span className="ml-2 font-medium">Information Technology</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Size:</span>
                    <span className="ml-2 font-medium">500,000+ employees</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Founded:</span>
                    <span className="ml-2 font-medium">1968</span>
                  </div>
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Company Profile →
                </button>
              </div>

              {/* Similar Jobs */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Jobs</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, index) => (
                    <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                        Full Stack Developer
                      </h4>
                      <p className="text-sm text-gray-600">Infosys • Bangalore</p>
                      <p className="text-sm text-green-600 font-medium">₹8-15 LPA</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
