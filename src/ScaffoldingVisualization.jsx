import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ScaffoldingVisualization = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { id: 'dims', name: 'Building Dimensions', description: 'Define precise measurements for width, height, and depth of structures' },
    { id: 'extrude', name: 'Structure Extrusion', description: 'Convert 2D shapes into 3D structures with dynamic controls' },
    { id: 'scaffold', name: 'Automated Scaffolding', description: 'Generate scaffolding components based on building specifications' },
    { id: 'bom', name: 'Bill of Materials', description: 'Real-time generation of complete parts list with export options' },
  ];

  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') setIsZoomed(false);
      };
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isZoomed]);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6">
        {/* SVG Visualization Container */}
        <div className="relative w-full bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-full h-64">
            {/* Image and Zoom Overlay Container */}
            <div 
              className="group w-full h-full cursor-pointer"
              onClick={() => setIsZoomed(true)}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded overflow-hidden">
                <img 
                  src="/src/assets/scaffolding.svg" 
                  alt="Scaffolding Visualization" 
                  className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    Click to zoom in
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Hotspots */}
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="absolute w-6 h-6 rounded-full bg-indigo-500 cursor-pointer hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center text-white font-bold text-xs"
                style={{
                  top: feature.id === 'dims' ? '15%' : 
                       feature.id === 'extrude' ? '40%' : 
                       feature.id === 'scaffold' ? '65%' : '85%',
                  left: feature.id === 'dims' ? '20%' : 
                        feature.id === 'extrude' ? '75%' : 
                        feature.id === 'scaffold' ? '30%' : '70%',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFeature(activeFeature === feature.id ? null : feature.id);
                }}
              >
                {feature.id === 'dims' ? '1' : 
                 feature.id === 'extrude' ? '2' : 
                 feature.id === 'scaffold' ? '3' : '4'}

                {activeFeature === feature.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded p-3 w-48 z-10 text-gray-800">
                    <p className="font-semibold text-indigo-600 mb-1">{feature.name}</p>
                    <p className="text-xs">{feature.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Descriptions */}
        <div className="w-full md:w-1/3 space-y-4 p-4">
          <h4 className="font-semibold text-indigo-600">Interactive Features</h4>
          <div className="space-y-3">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className={`p-3 rounded cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id ? 'bg-indigo-100' : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setActiveFeature(activeFeature === feature.id ? null : feature.id)}
              >
                <p className="font-medium text-gray-800">{feature.name}</p>
                <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center">
            <img
              src="/src/assets/scaffolding.svg"
              alt="Scaffolding Visualization (Full Screen)"
              className="max-h-full max-w-full object-contain animate-fadeIn"
            />
            
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
              }}
              aria-label="Close full screen"
            >
              <X className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      )}

      <div className="text-center mt-4 text-sm text-gray-500 pb-4">
        <p>Interactive visualization of the Scaffolding Graphics application showcasing key features and capabilities</p>
      </div>
    </div>
  );
};

export default ScaffoldingVisualization;