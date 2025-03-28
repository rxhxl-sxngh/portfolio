import React, { useState } from "react";
import { Calendar, Heart } from 'lucide-react';
import PersonalGrowthBlogPanel from "./PersonalGrowthBlogPanel";
import GivingBlogPanel from "./GivingBlogPanel";

// Custom BlogCard component with click handler
const BlogCard = ({ title, date, excerpt, category, onClick }) => (
  <div
    className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
    onClick={onClick}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    
    <div className="flex items-center text-gray-500 text-sm mb-2">
      <Calendar className="h-4 w-4 mr-1" />
      <span>{date}</span>
    </div>
    
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      <span className="border-b border-transparent group-hover:border-indigo-600 transition-all duration-300">
        {title}
      </span>
    </h3>
    
    <p className="text-gray-600 mb-4">{excerpt}</p>
    
    <div className="flex items-center justify-between">
      <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
        {category}
      </span>
      <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-300">
        Read more
      </button>
    </div>
  </div>
);

const BlogSection = () => {
  const [activePanel, setActivePanel] = useState(null);

  const blogs = [
    {
      title: "2024: A Year of Transformation and Learning",
      date: "March 15, 2025",
      excerpt: "Reflecting on the most eventful year of my life, the challenges I faced, and the invaluable lessons I learned throughout my journey in 2024.",
      category: "Personal Growth",
      panelType: "personal-growth",
    },
    {
      title: "The Unexpected Gifts of Giving Back",
      date: "February 28, 2025",
      excerpt: "How my experiences with volunteering and community service have transformed my perspective on success, happiness, and purpose.",
      category: "Community",
      panelType: "giving",
    },
  ];

  const handleCardClick = (panelType) => {
    setActivePanel(panelType);
  };

  const handleClosePanel = () => {
    setActivePanel(null);
  };

  return (
    <section id="blog" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
              onClick={() => handleCardClick(blog.panelType)}
            />
          ))}
        </div>
      </div>

      {/* Detail Panels */}
      <PersonalGrowthBlogPanel
        isOpen={activePanel === "personal-growth"}
        onClose={handleClosePanel}
      />
      <GivingBlogPanel
        isOpen={activePanel === "giving"}
        onClose={handleClosePanel}
      />
    </section>
  );
};

export default BlogSection;