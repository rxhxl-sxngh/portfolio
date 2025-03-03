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
  
  // Add event listeners to close panel when navbar items are clicked
  useEffect(() => {
    if (isOpen) {
      // Get all navbar links (assuming they have href starting with #)
      const navbarLinks = document.querySelectorAll('a[href^="#"]');
      
      const handleNavClick = () => {
        onClose();
      };
      
      // Add click event listeners to all navbar links
      navbarLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
      });
      
      // Clean up event listeners when component unmounts or panel closes
      return () => {
        navbarLinks.forEach(link => {
          link.removeEventListener('click', handleNavClick);
        });
      };
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-50 flex justify-end" 
      style={{ 
        zIndex: 9999,
        top: '2rem' // Set to 2rem as requested
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className="relative bg-white w-full max-w-4xl overflow-y-auto"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-out',
          height: 'calc(100vh - 2rem)' // Updated to match the 2rem top value
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-white z-10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Baseball Umpire Decision Analysis (Detailed Overview)
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
        <div className="p-6 space-y-6 pb-12">
          <div>
            <p className="text-gray-600 mb-4">
              Along with one of my teammates for the Research and Development team for Texas A&M baseball, 
              we took on an exciting project that combined our love for sports with the power of 
              machine learning. Our goal was to analyze and predict baseball umpire calls using machine 
              learning techniques, specifically focusing on how umpires decide whether a pitch is a ball or a strike.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-4 my-4 flex items-center justify-center h-128">
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
              We began our journey by immersing ourselves in the world of baseball data. We meticulously gathered 
              extensive pitch data from multiple seasons, capturing crucial details like pitch location coordinates, 
              velocity, movement patterns, and of course, the umpire's call. This wasn't just about collecting 
              numbers—we were capturing decision moments that would help us understand the human element of the game.
            </p>
            <p className="text-gray-600 mt-2">
              Our preprocessing phase was where we really rolled up our sleeves. We cleaned messy data points, 
              standardized measurements across different stadiums, and normalized values to ensure fair comparisons. 
              One of our most insightful decisions was to segregate the data by individual umpires, allowing us to 
              build personalized models that recognized each umpire's unique tendencies and decision-making patterns. 
              This approach helped us capture the subtleties that make baseball such a beautifully human game.
            </p>
            
            <div className="space-y-6 my-4">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-128">
                <img 
                  src="/src/assets/baseball-diagram2.webp" 
                  alt="Baseball Data Collection" 
                  className="max-h-full object-contain rounded"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-128">
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
              With our data prepared, we turned to the RandomForestClassifier—a powerful machine learning algorithm 
              that we felt was perfectly suited for this challenge. We chose this approach because it excels at 
              handling complex decision boundaries and can capture the nuanced factors that influence an umpire's 
              split-second judgment calls.
            </p>
            <p className="text-gray-600 mt-2">
              We carefully divided our dataset into training and testing sets, making sure we had enough historical 
              data to train robust models while keeping some data aside for honest evaluation. This was our way of 
              simulating how our models would perform in real-world scenarios. Through countless iterations, we 
              fine-tuned our models, watching with excitement as they began to recognize patterns in the data that 
              aligned with what seasoned baseball fans intuitively understand about umpire tendencies.
            </p>
            <p className="text-gray-600 mt-2">
              One of our most rewarding moments came when we validated our models against real game data and saw 
              prediction accuracies exceeding 80%. We weren't just creating theoretical models—we were building 
              tools that could genuinely capture the human decision-making process behind every "strike" or "ball" call.
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
            
            <div className="space-y-6 my-4">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-84">
                <img 
                  src="/src/assets/baseball-diagram4.webp" 
                  alt="Baseball Visualization 1" 
                  className="max-h-full object-contain rounded"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-128">
                <img 
                  src="/src/assets/baseball-diagram5.webp" 
                  alt="Baseball Visualization 2" 
                  className="max-h-full object-contain rounded"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-128">
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
            {/* <p className="text-gray-600 mt-2">
              For those interested in exploring our work further, the project is available on GitHub under the 
              title "Machine Learning MEEN Project." This repository contains all the code and data used, 
              offering a resource for others to build upon and innovate further.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaseballDetailPanel;