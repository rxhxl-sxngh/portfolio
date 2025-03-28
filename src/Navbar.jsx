import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });

          // Update URL without causing page jump
          window.history.pushState(null, null, targetId);

          // Close mobile menu if open
          if (isOpen) {
            setIsOpen(false);
          }
        }
      });
    });

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const navbarClass =
    scrollPosition > 0
      ? "fixed w-full backdrop-blur-md bg-white/70 shadow-lg z-[999] transition-all duration-300"
      : "fixed w-full bg-transparent z-[999] transition-all duration-300";

  const menuItems = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Experience", path: "#experience" },
    { title: "Photography", path: "#photography" },
  ];

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent hover:scale-105 relative group transition-all duration-300"
            >
              Rahul Singh
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium relative group transition-all duration-300 hover:scale-105"
                >
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-all duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/70">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium relative group transition-all duration-300 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;