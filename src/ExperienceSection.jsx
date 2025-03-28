import React, { useState } from "react";
import NTTDataDetailPanel from "./NTTDataDetailPanel";
import TeachingAssistantDetailPanel from "./TeachingAssistantDetailPanel";

// Custom ExperienceCard component with click handler
const ExperienceCard = ({ title, company, period, onClick }) => (
  <div
    className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      <span className="border-b border-transparent group-hover:border-indigo-600 transition-all duration-300">
        {title}
      </span>
    </h3>
    <p className="text-gray-600 mt-1">{company}</p>
    <p className="text-gray-500 text-sm mt-1">{period}</p>
  </div>
);

const ExperienceSection = () => {
  const [activePanel, setActivePanel] = useState(null);

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "NTT Data Corporation",
      period: "January 2024 - December 2024",
      panelType: "ntt-data",
    },
    {
      title: "Teaching Assistant",
      company: "Texas A&M University",
      period: "August 2023 - May 2024",
      panelType: "teaching-assistant",
    },
  ];

  const handleCardClick = (panelType) => {
    setActivePanel(panelType);
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
              onClick={() => handleCardClick(experience.panelType)}
            />
          ))}
        </div>
      </div>

      {/* Detail Panels */}
      <NTTDataDetailPanel
        isOpen={activePanel === "ntt-data"}
        onClose={handleClosePanel}
      />
      <TeachingAssistantDetailPanel
        isOpen={activePanel === "teaching-assistant"}
        onClose={handleClosePanel}
      />
    </section>
  );
};

export default ExperienceSection;
