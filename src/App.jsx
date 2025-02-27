import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Camera } from "lucide-react";
import FlippingLogo from "./FlippingLogo";

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
      ? "fixed w-full backdrop-blur-md bg-white/70 shadow-lg z-50 transition-all duration-300"
      : "fixed w-full bg-transparent z-50 transition-all duration-300";

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

const SkillBadge = ({ skill }) => (
  <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700 m-1">
    {skill}
  </span>
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

  const photoCategories = [
    "Travel Photography",
    "Nature Photography",
    "Urban Photography",
  ];

  const skills = {
    languages: [
      "C/C++",
      "Python",
      "JavaScript",
      "Java",
      "SQL",
      "GraphQL",
      "HTML/CSS",
      "Swift",
      "Rust"
    ],
    tools: [
      "React",
      "Node.js",
      "Three.js",
      "Git",
      "TensorFlow",
      "PyTorch",
      "Google Cloud",
      "Azure",
    ],
  };

  const awards = [
    "Undergraduate Leadership Excellence Award from TAMU Computer Science Department",
    "Dean's List",
  ];

  const travels = [
    "Mexico",
    "UAE (Dubai)",
    "England",
    "Belize",
    "Jamaica",
    "Costa Rica",
    "Japan",
  ];

  return (
    <GradientBackground>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center py-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <FlippingLogo />
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

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
              About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1: Bio */}
              <div className="md:col-span-2">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 h-full">
                  <p className="text-gray-600 mb-4">
                    I'm a driven senior pursuing a Bachelor of Science in
                    Computer Science at Texas A&M University, combining academic
                    excellence with hands-on industry experience. My career
                    aspirations center on becoming an innovative software
                    engineer, with particular emphasis on developing scalable
                    systems and advancing the field of machine learning.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Through my role as a teaching assistant during my time at
                    A&M, I've deepened my technical understanding of important
                    concepts such as Data Structures and algorithms while
                    developing strong instructional capabilities, helping fellow
                    students grasp complex programming concepts. This has also
                    allowed me to become exceedingly comfortable with my
                    favorite programming language - C++. 😊
                  </p>
                  <p className="text-gray-600 mb-4">
                    My professional experience includes working as an AI/ML
                    engineer at NTT Data Corporation, where I've contributed to
                    real-world projects and gained valuable industry insights.
                    I'm also a Co-Founder at Quaternion Studios, an independent
                    agency specializing in building software for 2D/3D modeling
                    within the web graphics sector.
                  </p>
                  <p className="text-gray-600">
                    Originally from Houston and now residing in Dallas, I
                    maintain a well-rounded lifestyle outside of technology. I'm
                    an avid photographer and enjoy water skiing during my
                    leisure time. I am a huge Dallas Mavericks fan and if you
                    want to ruin my day, mention the Luka trade. My passion for
                    exploring different cultures is reflected in my extensive
                    travel experiences across multiple countries, broadening my
                    worldview and enhancing my ability to work effectively in
                    diverse, global environments. I sincerely hope I can
                    contribute at least five more countries to "Countries I've
                    Visited" list on the right before the end of 2025.
                  </p>
                </div>
              </div>

              {/* Column 2: Skills & Interests */}
              <div className="space-y-6">
                {/* Skills */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Technical Skills
                  </h3>

                  <h4 className="font-semibold text-gray-700 mb-2">
                    Languages
                  </h4>
                  <div className="flex flex-wrap mb-4">
                    {skills.languages.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>

                  <h4 className="font-semibold text-gray-700 mb-2">
                    Tools & Frameworks
                  </h4>
                  <div className="flex flex-wrap">
                    {skills.tools.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Education & Awards */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Education
                  </h3>
                  <p className="font-semibold text-gray-700">
                    Texas A&M University
                  </p>
                  <p className="text-gray-600 mb-2">
                    B.S. Computer Science (GPA: 3.9/4.0)
                  </p>
                  <p className="text-gray-600 mb-4">
                    Minors in Applied Mathematics and Statistics
                  </p>

                  <h4 className="font-semibold text-gray-700 mb-2">Awards</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {awards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </div>

                {/* Travel */}
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Countries I've Visited
                  </h3>
                  <div className="flex flex-wrap">
                    {travels.map((place, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-indigo-100 to-purple-100 px-3 py-1 rounded-full text-sm text-gray-700 m-1"
                      >
                        {place}
                      </span>
                    ))}
                  </div>
                </div>
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
        <section
          id="experience"
          className="min-h-screen flex items-center py-20"
        >
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
        <section
          id="photography"
          className="min-h-screen flex items-center py-20"
        >
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
