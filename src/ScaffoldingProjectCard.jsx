import React, { useState } from 'react';
import ScaffoldingVisualization from './ScaffoldingVisualization';

const ScaffoldingProjectCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

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
      
      {/* Visualization Panel */}
      {isPanelOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-1 flex justify-end">
              <button 
                onClick={() => setIsPanelOpen(false)} 
                className="rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="px-6 pb-6">
              <ScaffoldingVisualization />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScaffoldingProjectCard;