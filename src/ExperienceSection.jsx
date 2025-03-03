import React from 'react';
import { ExperienceCard } from './Cards';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "NTT Data Corporation",
      description:
        "Developed and implemented an NLP-driven application for incident/request resolution prediction, trained on two years of ticket data, and integrated the solution into ITSM platforms across 15+ client accounts.",
    },
    {
      title: "Teaching Assistant",
      company: "CSCE 121 - Texas A&M University",
      description:
        "Produced material and conducted lab sessions teaching students about Data Structures and Algorithms, while offering guidance on using various data structures through hands-on programming projects.",
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;