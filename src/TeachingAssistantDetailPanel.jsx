import React, { useEffect } from "react";

const TeachingAssistantDetailPanel = ({ isOpen, onClose }) => {
  // Prevent scrolling on the background when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Add event listeners to close panel when navbar items are clicked
  useEffect(() => {
    if (isOpen) {
      // Get all navbar links (assuming they have href starting with #)
      const navbarLinks = document.querySelectorAll('a[href^="#"]');

      const handleNavClick = () => {
        onClose();
      };

      // Add click event listeners to all navbar links
      navbarLinks.forEach((link) => {
        link.addEventListener("click", handleNavClick);
      });

      // Clean up event listeners when component unmounts or panel closes
      return () => {
        navbarLinks.forEach((link) => {
          link.removeEventListener("click", handleNavClick);
        });
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex justify-end"
      style={{
        zIndex: 50,
        top: "4rem",
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="relative bg-white w-full max-w-5xl w-[60vw] overflow-y-auto"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-out",
          height: "calc(100vh - 2rem)", // Updated to match the 2rem top value
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-white z-10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Teaching Assistant at Texas A&M University
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2"
            aria-label="Close panel"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 pb-12">
          <div>
            <p className="text-gray-600 mb-4">
              As a teaching assistant for CSCE 121 (Introduction to Program
              Design and Concepts) and CSCE 221 (Data Structures and Algorithms)
              at Texas A&M University, I played a crucial role in supporting
              undergraduate students learning fundamental computer science
              concepts and programming skills. This position allowed me to
              deepen my own technical knowledge while developing important
              instructional and mentorship capabilities.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Key Responsibilities
            </h3>

            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">Lab Instruction</h4>
                <p className="text-gray-600 mt-1">
                  Conducted weekly laboratory sessions for multiple student
                  groups, providing hands-on instruction and guidance on
                  programming concepts in C++. These lab sessions were designed
                  to reinforce and extend the material covered in lectures,
                  giving students practical experience with the concepts they
                  were learning.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Material Development
                </h4>
                <p className="text-gray-600 mt-1">
                  Produced supplementary instructional materials to clarify
                  complex Data Structures and Algorithms concepts. This included
                  creating detailed explanations, visual aids, and practice
                  problems that helped students better understand challenging
                  topics like linked lists, trees, graphs, sorting algorithms,
                  and algorithm analysis.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Student Guidance
                </h4>
                <p className="text-gray-600 mt-1">
                  Offered one-on-one guidance to students on utilizing various
                  data structures and algorithms through hands-on programming
                  projects using C++ within a Linux environment. This
                  individualized support helped students overcome specific
                  challenges they faced in their coursework and projects.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Automated Testing
                </h4>
                <p className="text-gray-600 mt-1">
                  Designed and executed scripts for automating the testing of
                  student assignments. These scripts streamlined the grading
                  process, provided consistent evaluation metrics, and allowed
                  for more detailed feedback to students on their code
                  performance and correctness.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Grading and Feedback
                </h4>
                <p className="text-gray-600 mt-1">
                  Evaluated student assignments and projects, providing
                  constructive feedback on code quality, algorithm efficiency,
                  and problem-solving approaches. This feedback was crucial for
                  helping students improve their programming skills and develop
                  good coding practices.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Impact and Skills Developed
            </h3>

            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Technical Mastery
                </h4>
                <p className="text-gray-600 mt-1">
                  Deepened my understanding of fundamental computer science
                  concepts by teaching them to others. Teaching is one of the
                  most effective ways to master a subject, and explaining
                  complex concepts to students with varying levels of prior
                  knowledge helped me solidify my own understanding of these
                  topics.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Communication Skills
                </h4>
                <p className="text-gray-600 mt-1">
                  Developed the ability to explain complex technical concepts in
                  clear, accessible ways to students with varying levels of
                  programming experience. This improved my communication skills
                  and my ability to adapt my teaching approach based on the
                  needs of different students.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Leadership Experience
                </h4>
                <p className="text-gray-600 mt-1">
                  Led lab sessions for groups of students, managing classroom
                  dynamics and ensuring all students received the support they
                  needed. This leadership experience taught me how to facilitate
                  productive learning environments and address diverse student
                  needs.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Student Mentorship
                </h4>
                <p className="text-gray-600 mt-1">
                  Provided mentorship to students beyond just academic support,
                  offering guidance on course selection, career paths in
                  computer science, and opportunities for further learning and
                  development. This mentorship role was particularly rewarding
                  as it allowed me to have a broader positive impact on
                  students' educational journeys.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Technologies and Concepts Taught
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                C++
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Linux
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Data Structures
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Algorithms
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Object-Oriented Programming
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Memory Management
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Debugging Techniques
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Git Version Control
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Algorithm Analysis
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Problem Solving
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeachingAssistantDetailPanel;
