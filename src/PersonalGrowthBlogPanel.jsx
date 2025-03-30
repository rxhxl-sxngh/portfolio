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
              Looking back at 2024, I can confidently say it was the most challenging and transformative year of my life. It was a roller coaster of triumphs and tribulations that pushed me to my limits and taught me invaluable lessons about myself, my priorities, and what truly matters in my professional journey.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">January: Juggling Multiple Roles</h3>
            
            <p className="text-gray-600 leading-relaxed">
              The year kicked off with a sprint rather than a gentle start. I began my role as an AI/ML Engineer at NTT Data in January while maintaining my status as a full-time student at Texas A&M and continuing my position as an undergraduate teaching assistant. The hybrid arrangement with NTT seemed perfect on paper—I'd work remotely during the semester and transition to in-office during summer.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Those first few weeks were equal parts exhilarating and exhausting. I'd bounce from morning classes to afternoon meetings with enterprise clients, then spend evenings preparing for the lab sessions I led as a TA. I remember sitting in my apartment at midnight, surrounded by half-finished assignments and work deliverables, wondering if I'd bitten off more than I could chew.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The International Scheduling Challenge</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Working for an international company like NTT Data came with its own unique challenges—namely, the brutal time zone differences. There were several occasions when I'd be on calls at 3 AM with development teams based in Asia, only to drag myself out of bed a few hours later for the 8 AM lab I was responsible for leading.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I still vividly remember one particularly grueling week in February when I had three consecutive nights of late calls followed by early morning commitments. I was running on pure caffeine and determination, my eyes burning from lack of sleep as I tried to explain pointer concepts to my students while my brain was still processing discussions about NLP model optimizations from hours earlier.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">March: Recognition Amidst Chaos</h3>
            
            <p className="text-gray-600 leading-relaxed">
              As the semester progressed, the weight of my commitments became increasingly difficult to bear. Just when I was questioning whether all the sacrifice was worth it, I received some unexpected validation. In March, the Computer Science Department at A&M recognized me with the Undergraduate Leadership Excellence Award—an honor I'd mentioned in my previous blog, but one that came at a perfectly timed moment when I needed that affirmation.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Standing on that stage, accepting the award while running on three hours of sleep, was a surreal moment. It felt like acknowledgment that yes, what I was doing was difficult, but it was also meaningful and noticed.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Inevitable Breaking Point</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Despite that boost of confidence, reality eventually caught up with me. As my first semester of 2024 progressed, I became overwhelmed by the competing demands on my time and energy. The breaking point came when I realized I was consistently missing lectures for two of my classes due to recurring conflicts with important meetings at NTT Data.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Making the decision to drop those two classes was incredibly difficult. It felt like admitting defeat, like I couldn't handle what I'd set out to do. But looking back, it was my first lesson of the year in setting realistic expectations and making necessary sacrifices to preserve my wellbeing and the quality of my work.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              The sweet victory came at the end of the semester when I managed to earn all A's in my remaining classes. It wasn't the full course load I'd ambitiously planned, but it represented quality over quantity—a concept I'd continue to wrestle with throughout the year.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Summer: A Different Kind of Busy</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Summer brought a shift in rhythm but not necessarily a lighter workload. I transitioned to working in-person at NTT Data, which eliminated the late-night international calls but introduced longer days at the office and a daily commute.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              My free time wasn't exactly "free" either—I dedicated much of it to working on the scaffolding project for a client through Quaternion Studios. Weekends became precious commodities spent hunched over my laptop, diving deep into 3D modeling and web graphics development.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Despite the busy schedule, there was something refreshing about the change of pace. The more consistent hours and the diversity of projects kept me engaged and growing professionally in different directions.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">August: Personal Upheaval and Rewarding Myself</h3>
            
            <p className="text-gray-600 leading-relaxed">
              August marked a significant turning point in both my personal and professional life. After two years together, my girlfriend and I broke up—a painful but necessary conclusion to a relationship that had been strained by my increasingly demanding schedule and shifting priorities.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              In the wake of that emotional upheaval, and feeling burnt out from months of relentless work, I decided to do something completely uncharacteristic for me. Fueled partly by beneficial tax returns for electric vehicles and a limited-time 1.99% APR deal expiring at the end of August, I made my first major "adult" purchase—a Tesla.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Was it the most financially prudent decision? Perhaps not. But sitting behind the wheel of that car represented something important to me at that moment—a tangible reward for my hard work, a symbol of my independence, and honestly, a much-needed boost to my spirits during a difficult time.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Fall Semester: History Repeats Itself</h3>
            
            <p className="text-gray-600 leading-relaxed">
              As the fall semester began, I found myself back in the familiar juggling act between NTT Data and my academic commitments. My course load was particularly heavy, partly due to needing to make up for the classes I'd dropped in the spring.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              September brought one victory: the successful conclusion of our scaffolding project for Quaternion Studios' client. Seeing that project through to completion, with the client's enthusiastic approval, was deeply satisfying.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              But history has a way of repeating itself when we don't fully learn its lessons. Once again, I found myself struggling to balance my professional and academic responsibilities. Once again, I made the difficult decision to drop a class rather than compromise on quality or my wellbeing.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Realization</h3>
            
            <p className="text-gray-600 leading-relaxed">
              As the semester wound down and I reflected on the year, something crystallized for me. While my role at NTT Data had been rewarding in many ways—the technical challenges, the exposure to enterprise-level AI implementations, the credibility of working for an international company—I realized I wanted something different for my future.
            </p>
            
            <p className="text-gray-600 leading-relaxed font-bold">
              I wanted to be somewhere where I could contribute to culture just as much as the end product.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              This wasn't just about technical work or building impressive systems. I wanted to be part of shaping an environment, influencing how teams collaborated, and building something with values aligned with my own. At NTT, I was a small cog in an enormous machine. I'd learned tremendously, but I couldn't see a path to having the kind of impact I now knew I wanted.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With another semester of all A's in my remaining courses (a achievement I'm still proud of given the circumstances), I made my decision. I resigned from my position at NTT Data as the semester came to a close.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Lessons from a Year of Growth</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Looking back at 2024, I can identify several invaluable lessons that will guide me moving forward:
            </p>
            
            <ol className="list-decimal text-gray-600 mt-4 ml-8 space-y-3">
              <li>
                <span className="font-semibold">Quality over quantity is not just a saying—it's a survival strategy.</span> Taking on too much doesn't serve anyone well, least of all yourself. I learned to be more selective about my commitments and to give my full attention to fewer things rather than spreading myself too thin.
              </li>
              <li>
                <span className="font-semibold">Professional growth isn't linear.</span> Sometimes you need to take steps sideways or even backwards to ultimately move forward. Leaving NTT wasn't a failure; it was a recalibration based on a clearer understanding of what I truly value.
              </li>
              <li>
                <span className="font-semibold">Sleep is non-negotiable.</span> Those 3 AM calls followed by 8 AM labs took a toll that no amount of caffeine could offset. I've learned to prioritize rest as an essential component of sustainable performance.
              </li>
              <li>
                <span className="font-semibold">Personal milestones matter.</span> Buying my Tesla might seem trivial compared to professional accomplishments, but it represented an important personal milestone and a moment of joy during a difficult time.
              </li>
              <li>
                <span className="font-semibold">Culture and values alignment are as important as technical challenges.</span> This was perhaps my biggest realization—that where and how I work matters just as much as what I'm working on.
              </li>
            </ol>

            <p className="text-gray-600 leading-relaxed mt-8">
              As I step into 2025, I feel both humbled by the challenges of the past year and optimistic about what lies ahead. I'm carrying forward not just new technical skills from my time at NTT Data and Quaternion Studios, but a much deeper understanding of my own limits, values, and aspirations.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              The road wasn't straight, and it certainly wasn't always smooth, but every twist, turn, and bump has shaped me into someone better equipped to navigate whatever comes next.
            </p>
            
            <p className="text-gray-600 leading-relaxed mt-8 italic">
              Here's to growth, to learning, and to the journey ahead.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGrowthBlogPanel;