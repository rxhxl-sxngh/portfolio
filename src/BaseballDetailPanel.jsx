import React, { useEffect } from 'react';

const BaseballDetailPanel = ({ isOpen, onClose }) => {
  // Prevent scrolling on the background when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end" 
      style={{ zIndex: 9999 }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className="relative bg-white w-full max-w-2xl h-full overflow-y-auto"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Baseball Umpire Decision Analysis
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Close panel"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6 ">
          <div>
            <p className="text-gray-600 mb-4">
              Along with one of my teammates for the Research and Development team for Texas A&M baseball, 
              our team took on an exciting project that combined our love for baseball with the power of 
              machine learning. Our goal was to analyze and predict baseball umpire calls using machine 
              learning techniques, specifically focusing on how umpires decide whether a pitch is a ball or a strike.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-1 my-4 flex items-center justify-center h-48">
              <img 
                src="/src/assets/baseball-diagram.webp" 
                alt="Baseball Analysis Diagram" 
                className="max-h-full object-contain rounded"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Project Objective</h3>
            <p className="text-gray-600">
              Our primary objective was to develop a Python script that leverages a RandomForestClassifier 
              to identify patterns in umpire decision-making. By doing so, we aimed to understand the factors 
              influencing these calls and improve the accuracy and objectivity of baseball officiating.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Data Collection and Preprocessing</h3>
            <p className="text-gray-600">
              The first step involved collecting and preparing the data. We gathered extensive pitch data, 
              including pitch location, type, and outcome. The preprocessing phase involved cleaning the data, 
              normalizing it for consistent analysis, and segregating it by individual umpires to account 
              for their unique decision-making styles.
            </p>
            
            <div className="grid grid-cols-1 gap-4 my-4">
              <div className="bg-gray-100 rounded-lg p-1 flex items-center justify-center h-50">
                <img 
                  src="/src/assets/baseball-diagram2.webp" 
                  alt="Baseball Data Collection" 
                  className="max-h-full object-contain rounded"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-1 flex items-center justify-center h-50">
                <img 
                  src="/src/assets/baseball-diagram3.webp" 
                  alt="Baseball Data Preprocessing" 
                  className="max-h-full object-contain rounded"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Building the RandomForestClassifier</h3>
            <p className="text-gray-600">
              We then built a RandomForestClassifier, a robust machine learning model, to analyze the data. 
              This involved data normalization to ensure all data points were on a common scale, a train-test 
              split to divide the data into training and testing sets for evaluating the model's performance, 
              and model training to identify patterns in the prepared data.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Visualization</h3>
            <p className="text-gray-600">
              To make our findings more intuitive, we incorporated visualization techniques, including decision 
              boundary visualization to help understand how different factors influence the umpire's calls. 
              Recognizing areas for improvement in our initial script, we implemented several enhancements 
              and optimizations. Cross-validation was introduced to ensure the model's robustness and accuracy, 
              providing a more reliable performance evaluation.
            </p>
            <p className="text-gray-600 mt-2">
              We also developed a hyperparameter tuning script to optimize the model for each umpire, resulting 
              in more precise configurations tailored to individual decision-making patterns. Additionally, 
              feature importance analysis was conducted to identify the most influential features, such as 
              pitch location and type, in the decision-making process, thereby offering deeper insights into 
              the factors that impact umpire calls.
            </p>
            
            <div className="grid grid-cols-1 gap-4 my-4">
              <div className="bg-gray-100 rounded-lg p-1 flex items-center justify-center h-50">
                <img 
                  src="/src/assets/baseball-diagram4.webp" 
                  alt="Baseball Visualization 1" 
                  className="max-h-full object-contain rounded"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-1 flex items-center justify-center h-50">
                <img 
                  src="/src/assets/baseball-diagram5.webp" 
                  alt="Baseball Visualization 2" 
                  className="max-h-full object-contain rounded"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-1 flex items-center justify-center h-50">
                <img 
                  src="/src/assets/baseball-diagram6.webp" 
                  alt="Baseball Visualization 3" 
                  className="max-h-full object-contain rounded"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Outcomes and Insights</h3>
            <p className="text-gray-600">
              By integrating machine learning, our project significantly enhanced the understanding of umpire 
              decision patterns in baseball. The model provided deep insights into the decision-making process 
              of umpires, potentially leading to fairer and more consistent officiating. This technological 
              integration promises to reduce human error and bias, thereby improving the overall quality of the sport.
            </p>
            <p className="text-gray-600 mt-2">
              This project illustrated the dynamic intersection of technology and sports, highlighting how 
              innovations in machine learning can revolutionize traditional sports practices. The ability to 
              predict umpire calls with high accuracy showcases the potential for continuous improvement and 
              innovation in sports analytics.
            </p>
            <p className="text-gray-600 mt-2">
              For those interested in exploring our work further, the project is available on GitHub under the 
              title "Machine Learning MEEN Project." This repository contains all the code and data used, 
              offering a resource for others to build upon and innovate further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseballDetailPanel;