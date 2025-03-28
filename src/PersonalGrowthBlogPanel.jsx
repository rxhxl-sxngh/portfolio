import React, { useEffect } from "react";
import { Calendar } from 'lucide-react';

const PersonalGrowthBlogPanel = ({ isOpen, onClose }) => {
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
          height: "calc(100vh - 4rem)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-white z-10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            2024: A Year of Transformation and Learning
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
          {/* Blog metadata */}
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>March 15, 2025</span>
            <span className="mx-2">•</span>
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
              Personal Growth
            </span>
          </div>

          {/* Blog content */}
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Looking back at 2024, I can confidently say it was the most eventful and transformative year of my life. From starting my role as an AI/ML Engineer at NTT Data to co-founding Quaternion Studios, the year was filled with incredible highs, challenging lows, and countless opportunities for growth.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Beginning: Stepping into the Professional World</h3>
            
            <p className="text-gray-600 leading-relaxed">
              January 2024 marked the beginning of my journey at NTT Data Corporation. Fresh out of my junior year internship and with a year left of college, I was both excited and nervous about balancing my first professional role alongside my studies. The learning curve was steep – working with enterprise-level AI systems and developing NLP solutions for real-world applications was vastly different from academic projects.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I still remember the feeling of impostor syndrome during those first few weeks. Surrounded by experienced professionals, I questioned whether I truly belonged there. But looking back, those moments of doubt were essential for my growth. They pushed me to work harder, learn faster, and seek guidance when needed.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Pivot: Founding Quaternion Studios</h3>
            
            <p className="text-gray-600 leading-relaxed">
              By September, while maintaining my role at NTT Data, I took perhaps the biggest leap of faith in my life – co-founding Quaternion Studios. The decision wasn't easy, but my passion for 3D graphics and web development, combined with the opportunity to build something from the ground up, was too compelling to ignore.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              The early days of Quaternion were a blur of excitement, anxiety, and countless late nights. Pitching to potential clients, managing project timelines, and delivering high-quality solutions – all while maintaining my corporate job and academic responsibilities – tested my limits in ways I hadn't experienced before.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our first client project was particularly memorable. A week before the deadline, we encountered a critical technical issue that threatened the entire deliverable. The team worked tirelessly for 48 hours straight, fueled by determination and perhaps too much coffee. When we finally resolved the issue and delivered the project on time, the sense of accomplishment was indescribable.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Balance: Teaching and Learning Simultaneously</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Alongside these professional endeavors, my role as a Teaching Assistant at Texas A&M provided a different kind of fulfillment. Guiding students through the complexities of data structures and algorithms not only reinforced my own understanding but also revealed my passion for mentorship.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              One particular student stands out in my memory – struggling with the concepts initially but showing remarkable improvement throughout the semester. Witnessing his growth and knowing I played a small part in it was immensely rewarding. It reminded me that success isn't just about personal achievements but also about the positive impact we have on others.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Challenges: Lessons in Resilience</h3>
            
            <p className="text-gray-600 leading-relaxed">
              2024 wasn't without its challenges. Managing multiple commitments often meant sacrificing personal time and sleep. There were moments of burnout where I questioned whether I had taken on too much. A particularly difficult period came mid-year when a major project at Quaternion faced significant setbacks, coinciding with final exams and deliverables at NTT Data.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              These challenges taught me invaluable lessons about prioritization, delegation, and the importance of self-care. I learned that asking for help isn't a sign of weakness but a necessary aspect of growth and leadership. Most importantly, I discovered my own resilience – the ability to persevere through difficulties and emerge stronger on the other side.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Growth: Technical and Personal Development</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Technically, my skills expanded exponentially throughout 2024. At NTT Data, I delved deep into machine learning models, particularly in NLP and the emerging field of Retrieval-Augmented Generation. Through Quaternion Studios, I honed my expertise in 3D graphics, WebGPU, and building scalable web applications.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              But the most significant growth was personal rather than technical. I developed a stronger sense of confidence in my abilities and decisions. My communication skills improved dramatically – from explaining complex technical concepts to clients to negotiating project terms and managing team dynamics.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Perhaps most importantly, I gained clarity about my long-term goals and values. The diverse experiences of 2024 helped me understand what truly matters to me professionally: creating innovative technology that solves real problems, working with passionate people, and continuing to learn and evolve.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Looking Ahead: Building on the Foundation</h3>
            
            <p className="text-gray-600 leading-relaxed">
              As I move forward into 2025, I carry with me the lessons and experiences of this transformative year. I'm excited to see how Quaternion Studios continues to grow, how my final year at Texas A&M unfolds, and what new opportunities emerge on the horizon.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              If 2024 taught me anything, it's that growth happens outside of comfort zones, that failure is often the precursor to success, and that with determination and support, ambitious goals are within reach. I'm grateful for the challenges, opportunities, and relationships that made this year so significant, and I'm eager to continue this journey of learning and transformation.
            </p>
            
            <p className="text-gray-600 leading-relaxed mt-8 italic">
              "The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGrowthBlogPanel;