import React, { useEffect } from "react";
import { Calendar, Heart } from 'lucide-react';
import  vons from "./assets/vonsvision.jpg";
import leadership1 from "./assets/leadership1.jpg";
import leadership2 from "./assets/leadership2.jpg";
import hospice from "./assets/hospice.png";

const GivingBlogPanel = ({ isOpen, onClose }) => {
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
            The Unexpected Gifts of Giving Back
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
            <span>February 28, 2025</span>
            <span className="mx-2">•</span>
            <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
              Community
            </span>
          </div>

          {/* Blog content */}
          <div className="prose prose-indigo max-w-none">
            <p className="text-gray-600 leading-relaxed">
              In the competitive world of computer science and tech startups, it's easy to become fixated on building the next groundbreaking application, landing the perfect job, or mastering the latest programming language. While these pursuits have their place, my most profound lessons have come from somewhere unexpected – giving back to others.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">A Commitment to Service: 100 Hours in One Semester</h3>
            
            <p className="text-gray-600 leading-relaxed">
              My journey with community service began with small volunteering efforts during my freshman year, but it was during my sophomore year at Texas A&M that I decided to make a more substantial commitment. I challenged myself to complete 100 hours of community service in a single semester – all while maintaining my academic responsibilities and other extracurricular activities.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              These hours were split across various initiatives: volunteering at local food banks, participating in campus clean-up events, tutoring underprivileged students in STEM subjects, and organizing charitable fundraisers. Some weekends, I would dedicate entire days to service projects, returning to my apartment exhausted but fulfilled in a way that coding sessions or exam preparation never quite matched.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              One of the most rewarding initiatives was my involvement with the Brazos Valley Hospice Happening fundraiser. Working alongside an incredible team of volunteers, we organized an event that raised thousands of dollars to support hospice care for patients and families in our community during their most vulnerable moments.
            </p>

            {/* Image placeholder for Brazos Valley Hospice Happening */}
            <div className="bg-gray-100 rounded-lg p-4 my-8">
              <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
                {/* <p className="text-gray-500">Image: Brazos Valley Hospice Happening Fundraiser</p> */}
              </div>
              <p className="text-sm text-gray-500 italic mt-2 text-center">At the Brazos Valley Hospice Happening fundraiser, where our team helped raise thousands of dollars to support compassionate end-of-life care for patients and families in need.</p>
            </div>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Von Miller's Gig 'Em Gala: A Highlight of My Service Journey</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Among the various service projects I participated in, one particular highlight was leading the auction fundraiser for Von Miller's Gig 'Em Gala. Super Bowl MVP Von Miller had established Von's Vision, a foundation dedicated to providing eye exams and glasses to underprivileged children.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I still remember the blend of excitement and nervousness as I coordinated with donors, organized auction items, and managed a team of fellow volunteers. The event itself was a whirlwind of activity – NFL players in attendance, alumni making generous bids, and a palpable sense of community coming together for a cause greater than ourselves.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              By the end of the evening, we had raised over $300,000 – funds that would directly impact the lives of children who otherwise wouldn't have access to proper vision care. The number itself was impressive, but what stayed with me was something deeper: the realization that my skills in organization, communication, and leadership could be channeled toward making a tangible difference in people's lives.
            </p>

            {/* Image placeholder for Von Miller's Gig 'Em Gala */}
            <div className="bg-gray-100 rounded-lg p-4 my-8">
              <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
                <p className="text-gray-500">Image: Von Miller's Gig 'Em Gala Fundraiser</p>
              </div>
              <p className="text-sm text-gray-500 italic mt-2 text-center">At the Von Miller's Gig 'Em Gala auction, where our team helped raise over $300,000 for children in need of vision care.</p>
            </div>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Undergraduate Leadership Excellence Award</h3>

            <p className="text-gray-600 leading-relaxed">
              My dedication to community service, combined with my academic achievements and other leadership roles, ultimately contributed to my receiving the Undergraduate Leadership Excellence Award from the Texas A&M Computer Science Department. This honor is one that I deeply cherish not merely for the recognition itself, but for what it represents: the validation that technical excellence and community service aren't separate paths but complementary journeys.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I'm particularly grateful to Dr. Hyunyoung Lee, who played a major role in my receiving this award. Her mentorship and encouragement pushed me to excel not only in my technical pursuits but also in finding ways to use those skills to benefit others and the broader community.
            </p>

            {/* Image placeholders for Community Service and Leadership Award side by side */}
            <div className="my-8 bg-gray-100 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
                    <p className="text-gray-500">Image: Leadership Award Ceremony</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
                    <p className="text-gray-500">Image: Leadership Award Ceremony</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 italic mt-4 text-center">
                Left: Working with fellow volunteers at the College Station Community Food Drive, distributing supplies to over 200 families. 
                Right: Receiving the Undergraduate Leadership Excellence Award from the Texas A&M Computer Science Department, recognizing both academic achievements and community service efforts.
              </p>
            </div>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">The Robotics Team: Beyond Technical Skills</h3>
            
            <p className="text-gray-600 leading-relaxed">
              My involvement with the Texas A&M Robotics Team offered another dimension of giving back. While most of my time was dedicated to developing our maze-solving robot and contributing to the technical aspects of the project, some of my most meaningful experiences came from our outreach initiatives.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We organized workshops for local high school students, introducing them to robotics and programming concepts in accessible, hands-on ways. Seeing the spark of curiosity in their eyes – especially from students who had never considered engineering as a potential path – was incredibly rewarding.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our fundraising efforts were equally significant. Through various events and initiatives, we raised over $1,000 to support both our team's projects and community programs. These experiences taught me that technical knowledge becomes exponentially more valuable when shared with others and applied toward collective goals.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Teaching: The Reciprocal Gift</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Perhaps no experience has better exemplified the reciprocal nature of giving than my role as a Teaching Assistant at Texas A&M. While officially I was there to help students grasp complex programming concepts and navigate data structures and algorithms, the reality is that I've received as much as I've given.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Each time I explain a concept to a struggling student, my own understanding deepens. Each time I help troubleshoot a challenging piece of code, my problem-solving skills sharpen. The questions students ask often push me to reconsider my assumptions and explore new perspectives.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              One particularly memorable experience involved a student who was consistently struggling with linked list implementations. After several one-on-one sessions and alternative explanations, something finally clicked. The joy and confidence on his face in that moment – and watching him go on to help other students with the same concept – reminded me that knowledge shared creates a beautiful multiplier effect.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Unexpected Benefits: What Giving Has Given Me</h3>
            
            <p className="text-gray-600 leading-relaxed">
              Through these varied experiences with community service, outreach, and teaching, I've received gifts I hadn't anticipated:
            </p>
            
            <ol className="list-decimal text-gray-600 mt-4 ml-8 space-y-3">
              <li>
                <span className="font-semibold">Perspective:</span> Immersing myself in service has repeatedly pulled me out of the tech bubble and connected me with diverse people and their unique challenges. This broader perspective has made me a more empathetic developer, focused on creating solutions that truly address human needs rather than just showcasing technical prowess.
              </li>
              <li>
                <span className="font-semibold">Purpose:</span> While technical accomplishments bring satisfaction, nothing compares to the sense of purpose that comes from directly improving others' lives. This purpose has become a north star, guiding career decisions and project choices.
              </li>
              <li>
                <span className="font-semibold">Network:</span> Through volunteering and community involvement, I've connected with remarkable people across various fields – people I wouldn't have met within the confined circles of tech and academia. These relationships have enriched both my personal and professional life.
              </li>
              <li>
                <span className="font-semibold">Resilience:</span> Community service often presents unpredictable challenges and requires adaptability. These experiences have built a resilience that translates directly to entrepreneurial endeavors and technical problem-solving.
              </li>
              <li>
                <span className="font-semibold">Leadership:</span> Leading volunteer initiatives has developed a different kind of leadership – one based on inspiration and shared purpose rather than authority. These skills have proven invaluable in both academic group projects and professional settings.
              </li>
            </ol>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">Making Giving a Lifelong Practice</h3>
            
            <p className="text-gray-600 leading-relaxed">
              As I look toward graduation and beyond, I'm committed to integrating service into my life and career. At Quaternion Studios, we're exploring ways to dedicate a percentage of our time to pro bono work for nonprofits that need technical solutions but lack resources. In my personal life, I'm seeking consistent volunteer opportunities rather than one-off events.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              The tech industry offers unique opportunities for giving back – whether through mentoring aspiring developers, contributing to open-source projects, or building tools that address social challenges. I believe we have both the capability and responsibility to use our skills for more than just profit and career advancement.
            </p>

            <h3 className="text-lg font-bold text-indigo-600 mt-8 mb-4">An Invitation</h3>
            
            <p className="text-gray-600 leading-relaxed">
              If you're reading this – especially if you're a fellow student or tech professional – I encourage you to explore how your specific skills might serve others. Start small and consistent rather than grand and occasional. Look for opportunities within your existing communities. Be open to the possibility that in giving, you'll receive far more than you expect.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              As the computer scientist Alan Kay once said, "The best way to predict the future is to invent it." Through giving back, we can collectively invent a future where technology and talent serve everyone, not just the privileged few.
            </p>
            
            <p className="text-gray-600 leading-relaxed mt-8 italic">
              "We make a living by what we get, but we make a life by what we give." - Winston Churchill
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingBlogPanel;