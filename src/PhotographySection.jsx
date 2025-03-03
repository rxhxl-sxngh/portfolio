import React from 'react';
import { PhotoCard } from './Cards';

const PhotographySection = () => {
  const photoCategories = [
    "Travel Photography",
    "Nature Photography",
    "Urban Photography",
  ];

  return (
    <section id="photography" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Photography
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photoCategories.map((category, index) => (
            <PhotoCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;