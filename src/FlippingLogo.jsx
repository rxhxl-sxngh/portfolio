import React, { useState } from 'react';
import logo from './assets/rs-logo.svg';
import profilePhoto from './assets/profile-photo.jpg';

const FlippingLogo = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="w-56 h-56 cursor-pointer perspective-1000 mx-auto relative group" 
      onClick={handleFlip}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced pulsing ring indicator */}
      <div className={`absolute inset-0 rounded-full ${isHovered 
        ? 'border-8 border-purple-500 scale-105 animate-pulse shadow-lg shadow-purple-500/50' 
        : 'border-4 border-purple-500 scale-105 shadow-md shadow-purple-500/30 animate-pulse'} 
        transition-all duration-300`}></div>
      
      {/* 3D container with enhanced perspective */}
      <div className={`relative w-full h-full transition-all duration-1000 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''} ${isFlipped ? 'scale-110' : 'scale-100'}`}>
        {/* Front side (logo) with enhanced shadows and effects - no white background */}
        <div className={`absolute w-full h-full backface-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'} transition-all duration-500 rounded-full border-2 border-black shadow-lg hover:shadow-2xl`}>
          <div className="w-full h-full relative overflow-hidden rounded-full">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <img 
              src={logo} 
              alt="Rahul Singh Logo" 
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>
        
        {/* Back side (photo) with enhanced shadows and effects */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 ${isFlipped ? 'opacity-100' : 'opacity-0'} transition-all duration-500 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full flex items-center justify-center border-2 border-black shadow-lg hover:shadow-2xl`}>
          <div className="w-full h-full relative overflow-hidden rounded-full">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <img 
              src={profilePhoto}
              alt="Rahul Singh" 
              className="w-full h-full object-cover rounded-full p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingLogo;