import React, { useState, useEffect } from 'react';

const GradientBackground = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [tint, setTint] = useState({
    color: "purple",
    opacity: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (position / height) * 100;

      // Calculate tint color and opacity based on scroll position
      let newTint = {
        color: "purple",
        opacity: 0.1,
      };

      if (scrollPercentage < 25) {
        newTint = {
          color: "purple",
          opacity: 0.1 + (scrollPercentage / 25) * 0.1,
        };
      } else if (scrollPercentage < 50) {
        newTint = {
          color: "blue",
          opacity: 0.2 - ((scrollPercentage - 25) / 25) * 0.05,
        };
      } else if (scrollPercentage < 75) {
        newTint = {
          color: "indigo",
          opacity: 0.15 + ((scrollPercentage - 50) / 25) * 0.1,
        };
      } else {
        newTint = {
          color: "violet",
          opacity: 0.25 - ((scrollPercentage - 75) / 25) * 0.15,
        };
      }

      setTint(newTint);
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Base gradient background */}
      <div className="fixed inset-0 transition-all duration-500 bg-gradient-to-br from-white to-gray-50" />

      {/* Dynamic tint overlay */}
      <div
        className="fixed inset-0 transition-all duration-300"
        style={{
          backgroundColor: tint.color,
          opacity: tint.opacity,
          mixBlendMode: "multiply",
        }}
      />

      {/* Radial gradient accent */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200/20 via-transparent to-indigo-200/20 animate-gradient" />

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GradientBackground;