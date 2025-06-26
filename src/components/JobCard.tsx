
import React from 'react';
import { MapPin, Clock, Bookmark, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: 'government' | 'private';
    deadline?: string;
    source?: string;
    description: string;
    posted: string;
  };
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const isGovernment = job.type === 'government';

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
              isGovernment 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {isGovernment ? '🏛 Government' : '🏢 Private'}
            </span>
            {job.deadline && (
              <span className="text-xs text-red-600 font-medium">
                Deadline: {job.deadline}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1 hover:text-blue-600 transition-colors">
            <Link to={`/job/${job.id}`}>{job.title}</Link>
          </h3>
          <p className="text-gray-700 font-medium">{job.company}</p>
        </div>
        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
          <Bookmark size={20} />
        </button>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin size={16} className="mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Clock size={16} className="mr-2" />
          Posted {job.posted}
        </div>
        {job.salary && (
          <div className="text-green-600 font-semibold text-sm">
            {job.salary}
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {job.description}
      </p>

      {/* Source */}
      {job.source && (
        <div className="text-xs text-gray-500 mb-4">
          Source: {job.source}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3">
        <Link
          to={`/job/${job.id}`}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          View Details
        </Link>
        <button className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
