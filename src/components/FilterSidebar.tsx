
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';

const FilterSidebar = ({ isOpen, onToggle }) => {
  const [expandedSections, setExpandedSections] = useState({
    sector: true,
    experience: false,
    salary: false,
    education: false,
    location: false,
    govt: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FilterSection = ({ title, sectionKey, children }) => (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900"
      >
        {title}
        {expandedSections[sectionKey] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {expandedSections[sectionKey] && (
        <div className="mt-3 space-y-2">
          {children}
        </div>
      )}
    </div>
  );

  const CheckboxOption = ({ label, count }: { label: string; count?: string }) => (
    <label className="flex items-center">
      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
      <span className="ml-2 text-sm text-gray-700">{label}</span>
      {count && <span className="ml-auto text-xs text-gray-500">({count})</span>}
    </label>
  );

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={onToggle}
          className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 w-full"
        >
          <Filter size={16} />
          Filters
        </button>
      </div>

      {/* Filter Panel */}
      <div className={`${isOpen ? 'block' : 'hidden lg:block'} bg-white rounded-lg shadow-md p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Filters</h3>
          <button className="text-blue-600 text-sm hover:underline">Clear All</button>
        </div>

        <div className="space-y-0">
          <FilterSection title="Job Sector" sectionKey="sector">
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-blue-700 mb-2">Government</h4>
                <div className="space-y-2 ml-2">
                  <CheckboxOption label="UPSC" count="245" />
                  <CheckboxOption label="PSU" count="156" />
                  <CheckboxOption label="Banking" count="89" />
                  <CheckboxOption label="Railways" count="134" />
                  <CheckboxOption label="State Govt" count="312" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Private</h4>
                <div className="space-y-2 ml-2">
                  <CheckboxOption label="MNC" count="1,234" />
                  <CheckboxOption label="Startup" count="567" />
                  <CheckboxOption label="Indian Companies" count="890" />
                </div>
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Experience" sectionKey="experience">
            <CheckboxOption label="Fresher (0-1 years)" count="423" />
            <CheckboxOption label="Junior (1-3 years)" count="567" />
            <CheckboxOption label="Mid-level (3-6 years)" count="234" />
            <CheckboxOption label="Senior (6+ years)" count="156" />
          </FilterSection>

          <FilterSection title="Salary Range" sectionKey="salary">
            <CheckboxOption label="0-3 LPA" count="345" />
            <CheckboxOption label="3-6 LPA" count="456" />
            <CheckboxOption label="6-12 LPA" count="234" />
            <CheckboxOption label="12+ LPA" count="123" />
          </FilterSection>

          <FilterSection title="Education" sectionKey="education">
            <CheckboxOption label="Any Graduate" count="567" />
            <CheckboxOption label="Engineering" count="234" />
            <CheckboxOption label="MBA" count="123" />
            <CheckboxOption label="CA/CS" count="67" />
            <CheckboxOption label="12th Pass" count="345" />
          </FilterSection>

          <FilterSection title="Government Specific" sectionKey="govt">
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Age Limit</h4>
                <div className="space-y-2">
                  <CheckboxOption label="18-25 years" />
                  <CheckboxOption label="18-30 years" />
                  <CheckboxOption label="18-35 years" />
                  <CheckboxOption label="No age limit" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
                <div className="space-y-2">
                  <CheckboxOption label="General" />
                  <CheckboxOption label="OBC" />
                  <CheckboxOption label="SC/ST" />
                  <CheckboxOption label="EWS" />
                </div>
              </div>
            </div>
          </FilterSection>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
