import React, { useState } from 'react';

const BaseballAnalyticsCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Project Image */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-4 flex items-center justify-center h-64">
            <img 
              src="/src/assets/baseball-diagram.webp" 
              alt="Baseball Analytics Visualization" 
              className="max-h-full rounded shadow-sm"
            />
          </div>
        </div>
        
        {/* Project Details */}
        <div className="w-full md:w-2/3">
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Baseball Umpire Decision Analysis
          </h3>
          
          <p className="text-gray-600 mb-4">
            Collaborated with the Research and Development team for Texas A&M baseball to analyze 
            and predict baseball umpire calls using machine learning techniques. We developed a 
            Python-based system leveraging RandomForestClassifier to identify patterns in how 
            umpires decide whether a pitch is a ball or a strike.
          </p>
          
          {isExpanded && (
            <div className="mt-2 text-gray-600 space-y-2 animate-fadeIn">
              <h4 className="font-semibold text-indigo-600">Implementation:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Collected and preprocessed extensive pitch data including location, type, and outcome</li>
                <li>Built and trained a RandomForestClassifier model tailored to individual umpire styles</li>
                <li>Implemented cross-validation and hyperparameter tuning for model optimization</li>
                <li>Conducted feature importance analysis to identify key decision factors</li>
                <li>Created visualizations of decision boundaries to understand umpire tendencies</li>
              </ul>
              
              <h4 className="font-semibold text-indigo-600 mt-4">Outcomes:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Enhanced understanding of umpire decision-making processes</li>
                <li>Identified patterns that could lead to fairer and more consistent officiating</li>
                <li>Demonstrated the powerful intersection of sports analytics and machine learning</li>
                <li>Created a foundation for future improvements in baseball officiating technology</li>
              </ul>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
              Python
            </span>
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
              RandomForest
            </span>
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
              Data Visualization
            </span>
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
              Sports Analytics
            </span>
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
              Scikit-learn
            </span>
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center"
          >
            {isExpanded ? 'Show less' : 'Learn more'}
            <svg 
              className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaseballAnalyticsCard;