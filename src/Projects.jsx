import React from 'react';
import ScaffoldingProjectCard from './ScaffoldingProjectCard.jsx';

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

const Projects = () => {
  const otherProjects = [
    {
      title: "Machine Learning Projects",
      description:
        "Implemented various ML algorithms and models for real-world applications, focusing on computer vision and natural language processing tasks. Created models for incident/request resolution prediction and automated resolution processes for enterprise clients.",
      tech: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "RAG", "LLMs"],
    },
    {
      title: "Quaternion Studios Portfolio",
      description:
        "Co-founded an independent agency specializing in building software for 2D/3D modeling within the web graphics sector. Managed projects ranging from $50,000 to $60,000 with a 97% success rate and 90% project transition to build phase.",
      tech: ["React", "ThreeJS", "WebGL", "Node.js", "Project Management"],
    },
    {
      title: "Maze-Solving Robot",
      description:
        "Developed a robot equipped with LiDAR scanner and RPLidar ROS integration, enabling precise navigation through complex mazes. Contributed to research, FEA analysis, SolidWorks design, and manufacturing processes.",
      tech: ["ROS", "LiDAR", "C++", "SolidWorks", "FEA Analysis"],
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8">
          Projects
        </h2>
        <div className="space-y-8">
          {/* Featured Project - Architectural Application */}
          <ScaffoldingProjectCard />
          
          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;