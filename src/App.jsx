import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Camera } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = scrollPosition > 0
    ? "fixed w-full backdrop-blur-md bg-white/70 shadow-lg z-50 transition-all duration-300"
    : "fixed w-full bg-transparent z-50 transition-all duration-300";

  const menuItems = [
    { title: 'Home', path: '#home' },
    { title: 'Projects', path: '#projects' },
    { title: 'Experience', path: '#experience' },
    { title: 'Photography', path: '#photography' },
    { title: 'Contact', path: '#contact' }
  ];

  return (
    <nav className={navbarClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Rahul Singh
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.path}
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                className="text-gray-600 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const GradientBackground = ({ children }) => (
  <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 transition-all duration-500">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-indigo-200/40 animate-gradient"></div>
    {children}
  </div>
);

const ProjectCard = ({ title, description, tech }) => (
  <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <span key={t} className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
          {t}
        </span>
      ))}
    </div>
  </div>
);

const App = () => {
  const projects = [
    {
      title: "Architectural Application",
      description: "Developed a sophisticated application enabling users to define building dimensions, extrude complex structures, implement scaffolding systems, and automatically generate Bills of Materials (BOM).",
      tech: ["React", "Three.js", "Node.js", "CAD Integration"]
    }
  ];

  return (
    <GradientBackground>
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent sm:text-6xl md:text-7xl mb-4">
                Software Engineer & ML Enthusiast
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Senior Computer Science student at Texas A&M University, passionate about developing scalable systems and advancing machine learning.
              </p>
              <div className="mt-8 flex justify-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-600 transition-colors duration-300">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">Experience</h2>
            <div className="space-y-8">
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AI/ML Engineer</h3>
                <p className="text-gray-600">Software Consulting Company</p>
                <p className="mt-4 text-gray-600">Contributed to real-world projects and gained valuable industry insights in machine learning and artificial intelligence.</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Teaching Assistant</h3>
                <p className="text-gray-600">CSCE 121 - Texas A&M University</p>
                <p className="mt-4 text-gray-600">Helped fellow students grasp complex programming concepts and developed strong instructional capabilities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Section */}
        <section id="photography" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">Photography</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                </div>
                <p className="mt-4 text-center text-gray-600">Travel Photography</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                </div>
                <p className="mt-4 text-center text-gray-600">Nature Photography</p>
              </div>
              <div className="group bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <Camera className="h-12 w-12 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                </div>
                <p className="mt-4 text-center text-gray-600">Urban Photography</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">Contact</h2>
            <div className="max-w-lg mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="mailto:your.email@example.com" className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                  <span>Email me</span>
                </a>
                <a href="https://github.com/yourusername" className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/yourusername" className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </GradientBackground>
  );
};

export default App;