import React, { useState, useEffect } from 'react';
import ScaffoldingVisualization from './ScaffoldingVisualization';

const ScaffoldingProjectCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Prevent scrolling on the background when panel is open
  useEffect(() => {
    if (isPanelOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPanelOpen]);
  
  // Add event listeners to close panel when navbar items are clicked
  useEffect(() => {
    if (isPanelOpen) {
      // Get all navbar links (assuming they have href starting with #)
      const navbarLinks = document.querySelectorAll('a[href^="#"]');
      
      const handleNavClick = () => {
        setIsPanelOpen(false);
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
  }, [isPanelOpen]);

  return (
    <>
      <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Project Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-4 flex items-center justify-center h-64">
              <img 
                src="/src/assets/scaffolding.svg" 
                alt="Scaffolding Application Screenshot" 
                className="max-h-full rounded shadow-sm"
              />
            </div>
          </div>
          
          {/* Project Details */}
          <div className="w-full md:w-2/3">
            <button onClick={() => setIsPanelOpen(true)} className="text-left">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent inline-block">
                <span className="border-b border-transparent hover:border-indigo-600 transition-all duration-300">
                  Scaffolding Graphics Application
                </span>
              </h3>
            </button>
            
            <p className="text-gray-600 mb-4">
              Developed a sophisticated application enabling users to define building dimensions, 
              extrude complex structures, implement scaffolding systems, and automatically generate 
              Bills of Materials (BOM). This cutting-edge application serves as a valuable tool for 
              construction and engineering projects.
            </p>
            
            {isExpanded && (
              <div className="mt-2 text-gray-600 space-y-2 animate-fadeIn">
                <h4 className="font-semibold text-indigo-600">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Interactive measurement tools for precise building dimensions</li>
                  <li>Dynamic 3D structure extrusion from 2D shapes</li>
                  <li>Height adjustments and automated roof generation with customizable styles</li>
                  <li>Automated scaffolding generation with material customization</li>
                  <li>Real-time Bill of Materials (BOM) generation and export capabilities</li>
                  <li>Drag-and-drop interface for scaffold component manipulation</li>
                  <li>Integration with BIM models through ifc.js library</li>
                </ul>
                
                <h4 className="font-semibold text-indigo-600 mt-4">Technical Implementation:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>WebGPU rendering pipeline for high-performance 3D graphics</li>
                  <li>Instanced mesh rendering for efficient visualization of thousands of scaffold elements</li>
                  <li>GPU compute shaders for geometry updates and lighting calculations</li>
                  <li>Advanced optimizations: frustum culling, LOD, and dynamic buffer updates</li>
                  <li>WebAssembly (WASM) for high-performance parsing of IFC files in-browser</li>
                </ul>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                React
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Three.js
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                WebGPU
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                ifc.js
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Node.js
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                CAD Integration
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
      
      {/* Visualization Panel - Modified to match BaseballDetailPanel.jsx */}
      {isPanelOpen && (
        <div 
          className="fixed inset-x-0 bottom-0 z-50 flex justify-end" 
          style={{ 
            zIndex: 9999,
            top: '2rem' // Set to 2rem to keep navbar visible
          }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setIsPanelOpen(false)}
          />
          
          {/* Panel */}
          <div 
            className="relative bg-white w-full max-w-4xl overflow-y-auto"
            style={{
              transform: isPanelOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.3s ease-out',
              height: 'calc(100vh - 2rem)' // Updated to match the 2rem top value
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-white z-10">
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Scaffolding Graphics Visualization
              </h2>
              <button 
                onClick={() => setIsPanelOpen(false)}
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
            <div className="p-6 pb-12">
              <ScaffoldingVisualization />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScaffoldingProjectCard;