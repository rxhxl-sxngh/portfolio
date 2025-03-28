import React, { useState } from "react";
import RobotDetailPanel from "./RobotDetailPanel";
import mazeRobot1 from "./assets/maze-robot.png";

const RobotCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Project Image */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-4 flex items-center justify-center h-64">
              <img
                src={mazeRobot1}
                alt="LiDAR Maze-Solving Robot"
                className="max-h-full rounded shadow-sm"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="w-full md:w-2/3">
            <button onClick={() => setIsPanelOpen(true)} className="text-left">
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent inline-block">
                <span className="border-b border-transparent hover:border-indigo-600 transition-all duration-300">
                  Autonomous Maze-Solving Robot with ROS 2 & LiDAR
                </span>
              </h3>
            </button>

            <p className="text-gray-600 mb-4">
              Developed software for an autonomous maze-solving robot utilizing ROS 2 Humble for distributed computing, 
              RPLidar A1 for environmental mapping, and Jetson Nano for real-time processing. Implemented advanced path planning algorithms, 
              including Fast-Marching Trees and Bezier curves, achieving efficient navigation through complex mazes.
            </p>

            {isExpanded && (
              <div className="mt-2 text-gray-600 space-y-2 animate-fadeIn">
                <h4 className="font-semibold text-indigo-600">
                  Technical Implementation:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Built a distributed robotic system using ROS 2's pub/sub architecture for decoupled component communication
                  </li>
                  <li>
                    Developed custom mapping and localization nodes processing LiDAR scan data in real-time
                  </li>
                  <li>
                    Implemented trajectory optimization with Time-Optimal Path Parameterization (TOPPRA)
                  </li>
                  <li>
                    Created comprehensive visualization tools for real-time debugging and monitoring
                  </li>
                  {/* <li>
                    Established CI/CD pipeline with GitHub Actions for automated testing of navigation algorithms
                  </li> */}
                </ul>

                <h4 className="font-semibold text-indigo-600 mt-4">
                  Software Architecture:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Perception layer: LiDAR data processing, filtering, and feature extraction
                  </li>
                  <li>
                    Mapping: Occupancy grid generation with dynamic updates and persistent storage
                  </li>
                  <li>
                    Planning: Path generation with obstacle avoidance using Fast-Marching Trees
                  </li>
                  <li>
                    Control: High-frequency feedback loops with encoder data for precise movement
                  </li>
                  <li>
                    Integration with ODrive's motion control API for motor synchronization and velocity profiling
                  </li>
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                ROS 2
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                C++
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Python
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                LiDAR
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                SLAM
              </span>
              <span className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full text-sm text-gray-700">
                Path Planning
              </span>
            </div>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center"
            >
              {isExpanded ? "Show less" : "Learn more"}
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Detail Panel */}
      <RobotDetailPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default RobotCard;