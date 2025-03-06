import React from "react";
import { SkillBadge } from "./Cards";

const AboutSection = () => {
  const skills = {
    languages: [
      "C/C++",
      "Python",
      "JavaScript",
      "Java",
      "Haskell",
      "SQL",
      "GraphQL",
      "HTML/CSS",
      "Swift",
      "Rust",
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
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Bio */}
          <div className="md:col-span-2 flex flex-col">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 flex-grow">
              <p className="text-gray-600 mb-4">
                I'm a driven senior pursuing a Bachelor of Science in Computer
                Science at Texas A&M University. My career aspirations center on
                becoming an innovative <b>creator</b>, with particular emphasis
                on developing scalable systems and advancing the field of
                machine learning.{" "}
                <strong>I want to grow alongside the systems I build.</strong> I
                want to push myself to learn inconceivable amounts while
                shipping code that has an undeniable impact on the end product.
              </p>
              {/* <p className="text-gray-600 mb-4"> 
                Through my role as a teaching assistant during my time at
                A&M, I've deepened my technical understanding of important
                concepts such as Data Structures and algorithms while
                developing strong instructional capabilities, helping fellow
                students grasp complex programming concepts. This has also
                allowed me to become exceedingly comfortable with my
                favorite programming language - C++. 😊
              </p> */}
              <p className="text-gray-600 mb-4">
                My professional experience includes working as an AI/ML engineer
                at NTT Data Corporation. I'm also a Co-Founder at Quaternion
                Studios, an independent agency specializing in building software
                for 2D/3D modeling within the web graphics sector.
              </p>
              <p className="text-gray-600 mb-4">
                I have also been fortunate enough to serve as a teaching
                assitant during my time at A&M. This is one of the most
                rewarding things I have done. I've deepened my technical
                understanding of important concepts such as Data Structures and
                algorithms while developing strong instructional capabilities,
                helping fellow students grasp complex programming concepts. This
                has also allowed me to become exceedingly comfortable with{" "}
                <strong>my favorite programming language - C++. 😊</strong>
              </p>
              <p className="text-gray-600 mb-4">
                Originally from Houston and now residing in Dallas, I maintain a
                well-rounded lifestyle outside of technology. I'm an avid
                photographer and enjoy water skiing during my leisure time. I am
                a huge Dallas Mavericks fan and if you want to ruin my day,
                mention the Luka trade. I love to hear about the world and other
                cultures - please reach out if you have interesting stories. I
                sincerely hope I can contribute at least five more countries to
                "Countries I've Visited" list below before the end of
                2025.
              </p>
            </div>
            
            {/* Travel - Moved below bio */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 mt-6 flex-grow-0">
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

          {/* Column 2: Skills & Interests */}
          <div className="space-y-6 flex flex-col">
            {/* Skills */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 flex-grow">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Skills
              </h3>

              <h4 className="font-semibold text-gray-700 mb-2">Languages</h4>
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
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 flex-grow">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;