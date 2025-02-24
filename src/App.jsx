import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Camera } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
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
      ? "fixed w-full backdrop-blur-md bg-white/70 shadow-lg z-50 transition-all duration-300"
      : "fixed w-full bg-transparent z-50 transition-all duration-300";

  const menuItems = [
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

const ProjectCard = ({ title, description, tech }) => (
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

const ExperienceCard = ({ title, company, description }) => (
  <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
      {title}
    </h3>
    <p className="text-gray-600">{company}</p>
    <p className="mt-4 text-gray-600">{description}</p>
  </div>
);

const PhotoCard = ({ category }) => (
  <div className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
    <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
      <Camera className="h-12 w-12 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
    </div>
    <p className="mt-4 text-center text-gray-600">{category}</p>
  </div>
);

const App = () => {
  const projects = [
    {
      title: "Architectural Application",
      description:
        "Developed a sophisticated application enabling users to define building dimensions, extrude complex structures, implement scaffolding systems, and automatically generate Bills of Materials (BOM).",
      tech: ["React", "Three.js", "Node.js", "CAD Integration"],
    },
    {
      title: "Machine Learning Projects",
      description:
        "Implemented various ML algorithms and models for real-world applications, focusing on computer vision and natural language processing tasks.",
      tech: ["Python", "TensorFlow", "PyTorch", "OpenCV"],
    },
  ];

  const experiences = [
    {
      title: "AI/ML Engineer",
      company: "Software Consulting Company",
      description:
        "Contributed to real-world projects and gained valuable industry insights in machine learning and artificial intelligence.",
    },
    {
      title: "Teaching Assistant",
      company: "CSCE 121 - Texas A&M University",
      description:
        "Helped fellow students grasp complex programming concepts and developed strong instructional capabilities.",
    },
  ];

  const photoCategories = [
    "Travel Photography",
    "Nature Photography",
    "Urban Photography",
  ];

  return (
    <GradientBackground>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-6xl md:text-7xl mb-4">
                Software Engineer & ML Enthusiast
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Senior Computer Science student at Texas A&M University,
                passionate about developing scalable systems and advancing
                machine learning.
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                <a
                  href="https://github.com/rxhxl-sxngh"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-singh3253/"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=rahul.do.singh@gmail.com&tf=1"
                  className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
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

        {/* Photography Section */}
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



        {/* Footer */}
        <footer className="py-8 bg-indigo-50/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex space-x-6">
                <a
                  href="mailto:rahul.do.singh@gmail.com"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com/rxhxl-sxngh"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/rahul-singh3253"
                  className="text-gray-500 hover:text-indigo-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              <div className="text-center text-gray-600">
                <p>
                  &copy; {new Date().getFullYear()} Rahul Singh. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </GradientBackground>
  );
};

export default App;