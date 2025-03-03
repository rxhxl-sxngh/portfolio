import React from 'react';
import { Camera } from 'lucide-react';

export const ProjectCard = ({ title, description, tech }) => (
  <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700"
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);

export const ExperienceCard = ({ title, company, description }) => (
  <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-600">{company}</p>
    <p className="mt-4 text-gray-600">{description}</p>
  </div>
);

export const PhotoCard = ({ category }) => (
  <div className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
      <Camera className="h-12 w-12 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
    </div>
    <p className="mt-4 text-center text-gray-600">{category}</p>
  </div>
);

export const SkillBadge = ({ skill }) => (
  <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700 m-1">
    {skill}
  </span>
);