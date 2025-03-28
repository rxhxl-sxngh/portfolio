import React, { useEffect } from "react";

const NTTDataDetailPanel = ({ isOpen, onClose }) => {
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
        top: "4rem", // Set to 2rem as requested
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
            AI/ML Engineer at NTT Data Corporation
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
              As an AI/ML Engineer at NTT Data Corporation, I was responsible
              for developing and implementing advanced machine learning
              solutions to enhance IT service management (ITSM) processes. My
              primary focus was on leveraging Natural Language Processing (NLP)
              and other AI technologies to automate and optimize incident
              resolution workflows.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Key Achievements
            </h3>

            <div className="space-y-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  NLP-Driven Resolution Prediction
                </h4>
                <p className="text-gray-600 mt-1">
                  Developed and implemented an NLP-driven application for
                  incident/request resolution prediction, trained on two years
                  of ticket data, and seamlessly integrated the solution into
                  the ITSM platforms of 15+ client accounts. This system could
                  analyze the content of incoming tickets and recommend
                  appropriate resolution actions based on historical patterns.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Automated Resolution Process
                </h4>
                <p className="text-gray-600 mt-1">
                  Pioneered an automation process that streamlined resolutions
                  and closed tickets for 60% of incoming incidents and requests.
                  This significantly reduced the manual workload for support
                  teams and decreased the average time to resolution across all
                  client accounts.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  LLM Integration with RAG Techniques
                </h4>
                <p className="text-gray-600 mt-1">
                  Applied Retrieval-Augmented Generation (RAG) techniques to
                  integrate Large Language Models (LLMs) into client
                  enterprises. These were tailored with data repositories,
                  company applications, and internal documents to enhance
                  decision-making and deliver context-rich results. This
                  approach allowed the AI systems to provide more accurate and
                  organization-specific responses.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Technical Approach
            </h3>
            <p className="text-gray-600">
              My technical approach involved several key components:
            </p>

            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
              <li>
                <span className="font-semibold">Data Processing Pipeline:</span>{" "}
                Designed ETL workflows to extract and normalize structured and
                unstructured data from various ITSM platforms, ensuring
                consistent input for ML models.
              </li>
              <li>
                <span className="font-semibold">NLP Model Development:</span>{" "}
                Leveraged transformer-based architectures to build models
                capable of understanding the intent and content of support
                tickets, extracting key entities, and classifying issues.
              </li>
              <li>
                <span className="font-semibold">
                  Resolution Recommendation Engine:
                </span>{" "}
                Created a recommendation system that matched incoming tickets
                with similar historical cases and their successful resolutions.
              </li>
              <li>
                <span className="font-semibold">Integration Framework:</span>{" "}
                Developed APIs and connectors to seamlessly integrate the ML
                solutions with existing ITSM platforms, ensuring minimal
                disruption to established workflows.
              </li>
              <li>
                <span className="font-semibold">RAG Implementation:</span> Built
                vector databases to store and retrieve relevant context from
                company documents, enabling LLMs to generate more accurate and
                contextually appropriate responses.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Impact and Results
            </h3>
            <p className="text-gray-600">
              The AI/ML solutions I developed had significant impacts for NTT
              Data and its clients:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Efficiency Improvement
                </h4>
                <p className="text-gray-600 mt-1">
                  60% reduction in manual ticket handling, allowing support
                  teams to focus on more complex and high-value tasks.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">Resolution Time</h4>
                <p className="text-gray-600 mt-1">
                  96% decrease in average time to resolution for common
                  incidents and service requests.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Client Satisfaction
                </h4>
                <p className="text-gray-600 mt-1">
                  Improved client satisfaction scores by 40% due to faster and
                  more accurate resolution of support issues.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-800">
                  Knowledge Retention
                </h4>
                <p className="text-gray-600 mt-1">
                  Enhanced organizational knowledge retention by capturing and
                  systematizing resolution patterns from experienced team
                  members.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Python
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                TensorFlow
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                PyTorch
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                HuggingFace Transformers
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                SQL
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Docker
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                FastAPI
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Azure ML
              </span>
              {/* <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Google Cloud
              </span> */}
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Vector Databases (ChromaDB)
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                REST APIs
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NTTDataDetailPanel;
