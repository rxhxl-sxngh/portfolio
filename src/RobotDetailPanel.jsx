import React, { useEffect } from 'react';

const RobotDetailPanel = ({ isOpen, onClose }) => {
  // Prevent scrolling on the background when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
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
      navbarLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
      });
      
      // Clean up event listeners when component unmounts or panel closes
      return () => {
        navbarLinks.forEach(link => {
          link.removeEventListener('click', handleNavClick);
        });
      };
    }
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-x-0 bottom-0 z-50 flex justify-end" 
      style={{ 
        zIndex: 9999,
        top: '2rem' // Set to 2rem as requested
      }}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Panel */}
      <div 
        className="relative bg-white w-full max-w-4xl overflow-y-auto"
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease-out',
          height: 'calc(100vh - 2rem)' // Updated to match the 2rem top value
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-white z-10">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            LiDAR-Driven Maze-Solving Robot: Software Architecture
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
              As a project manager and software developer for the Texas A&M Robotics Team, I led the development of a sophisticated 
              autonomous robot capable of navigating complex mazes. While the mechanical aspects were crucial, my primary focus was 
              on creating a robust software architecture that could process sensor data, make intelligent decisions, and control 
              the robot's movements with precision.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-4 my-4 flex items-center justify-center h-128">
              <img 
                src="/src/assets/maze-robot.png" 
                alt="LiDAR Maze-Solving Robot" 
                className="max-h-full object-contain rounded"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">The ROS 2 Backbone</h3>
            <p className="text-gray-600">
              At the core of our system was ROS 2 Humble, chosen for its improved message passing architecture, enhanced 
              reliability, and real-time capabilities. ROS 2 provided a modular framework that allowed us to develop independent 
              components (nodes) that could be tested and debugged separately before integration.
            </p>
            <p className="text-gray-600 mt-2">
              We structured our system with several key nodes:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li><span className="font-semibold">lidar_driver_node</span>: Interfaced with the RPLidar A1 hardware to capture raw scan data</li>
              <li><span className="font-semibold">scan_processor_node</span>: Filtered and processed raw LiDAR data to remove noise and extract meaningful features</li>
              <li><span className="font-semibold">mapping_node</span>: Built and maintained an occupancy grid of the maze environment</li>
              <li><span className="font-semibold">localization_node</span>: Determined the robot's position within the maze</li>
              <li><span className="font-semibold">path_planning_node</span>: Generated optimal trajectories through the maze</li>
              <li><span className="font-semibold">motion_control_node</span>: Translated planned paths into motor commands</li>
              <li><span className="font-semibold">visualization_node</span>: Provided real-time monitoring and debugging capabilities</li>
            </ul>
            
            {/* <div className="bg-gray-100 rounded-lg p-4 my-4 flex items-center justify-center h-128">
              <img 
                src="/src/assets/jetson-nano.webp" 
                alt="ROS 2 Node Architecture" 
                className="max-h-full object-contain rounded"
              />
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">LiDAR Data Processing & Mapping</h3>
            <p className="text-gray-600">
              The RPLidar A1 provided 360-degree scan data at approximately 8000 points per second. Our software pipeline transformed 
              this raw data into usable environmental information through several processing steps:
            </p>
            <ol className="list-decimal list-inside text-gray-600 mt-2 space-y-1">
              <li>Raw data acquisition via UART communication</li>
              <li>Noise filtering using statistical outlier removal techniques</li>
              <li>Dynamic range thresholding to identify maze walls</li>
              <li>Point clustering to detect wall segments and corners</li>
              <li>Integration into a probabilistic occupancy grid map</li>
            </ol>
            <p className="text-gray-600 mt-2">
              The mapping system employed a grid-based representation with 2cm resolution, providing sufficient detail for 
              navigation while remaining computationally efficient. We implemented a Bayesian update mechanism that allowed the 
              map to adapt to new observations, gradually improving accuracy as the robot explored the maze.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-4 my-4 flex items-center justify-center h-128">
              <img 
                src="/src/assets/lidar-mapping.gif" 
                alt="LiDAR Mapping Visualization" 
                className="max-h-full object-contain rounded"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Path Planning & Trajectory Generation</h3>
            <p className="text-gray-600">
              Our approach to path planning utilized a multi-stage process to generate efficient and smooth trajectories:
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">1. Fast-Marching Trees (FMT*)</span>: This sampling-based algorithm provided 
              asymptotically optimal paths by expanding a tree of collision-free trajectories from the start position. We chose 
              FMT* over other algorithms (like RRT or A*) because it produced higher-quality initial paths with better coverage 
              of the configuration space.
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">2. Path Smoothing with Bezier Curves</span>: The piecewise linear paths from FMT* 
              were then refined using cubic Bezier curves. Each curve was defined by four control points carefully selected to 
              maintain path clearance while providing C² continuity (continuous position, velocity, and acceleration).
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-semibold">3. Time-Optimal Path Parameterization (TOPPRA)</span>: To generate velocity profiles 
              that respected the robot's dynamic constraints, we implemented TOPPRA. This algorithm computed the time-optimal 
              velocity profile along the path while respecting bounds on velocity, acceleration, and jerk.
            </p>
            
            <div className="space-y-6 my-4">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-128">
                <img 
                  src="/src/assets/bezier-curves.webp" 
                  alt="Bezier Curve Smoothing" 
                  className="max-h-full object-contain rounded"
                />
              </div>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center h-128">
                <img 
                  src="/src/assets/path-planning.webp" 
                  alt="Path Planning Visualization" 
                  className="max-h-full object-contain rounded"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Motion Control & Motor Integration</h3>
            <p className="text-gray-600">
              Translating planned trajectories into precise motor commands required careful integration with the hardware:
            </p>
            <p className="text-gray-600 mt-2">
              The ODrive 3.6 motor controller provided a sophisticated interface for controlling the high-torque 750Kv motors. 
              Our software integrated with the ODrive API to implement:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Real-time velocity control with encoder feedback</li>
              <li>Differential drive kinematics to convert desired robot motion into individual wheel speeds</li>
              <li>PID control loops for position and velocity tracking</li>
              <li>Synchronized acceleration profiles to prevent wheel slippage</li>
            </ul>
            <p className="text-gray-600 mt-2">
              We implemented a custom controller node that subscribed to trajectory messages and published motor commands at 100Hz, 
              ensuring smooth and responsive motion. The node also processed encoder feedback to provide odometry data for 
              localization purposes.
            </p>
            
            {/* <div className="bg-gray-100 rounded-lg p-4 my-4 flex items-center justify-center h-128">
              <img 
                src="/src/assets/kinematics-profiles.webp" 
                alt="Velocity Profiles Visualization" 
                className="max-h-full object-contain rounded"
              />
            </div> */}
          </div>
          
          {/* <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Development Workflow & Tools</h3>
            <p className="text-gray-600">
              Our development process emphasized quality, testability, and collaboration:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li><span className="font-semibold">Version Control</span>: Git with feature-branch workflow and pull request reviews</li>
              <li><span className="font-semibold">Continuous Integration</span>: Automated testing on push events with GitHub Actions</li>
              <li><span className="font-semibold">Simulation</span>: Gazebo environment for testing navigation algorithms in a virtual maze</li>
              <li><span className="font-semibold">Visualization</span>: RViz for real-time monitoring of sensor data, robot state, and planning</li>
              <li><span className="font-semibold">Documentation</span>: Auto-generated API docs with Doxygen and comprehensive wiki</li>
            </ul>
            <p className="text-gray-600 mt-2">
              We maintained a comprehensive test suite covering unit tests for individual components and integration tests for 
              system-level functionality. This approach allowed us to rapidly iterate on the software while maintaining reliability.
            </p>
          </div> */}
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Jetson Nano Computing Platform</h3>
            <p className="text-gray-600">
              The Jetson Nano, running Ubuntu 18.04 with CUDA support, provided the computational backbone for our system. We optimized 
              the software stack to efficiently utilize the available resources:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>CUDA-accelerated LiDAR point cloud processing</li>
              <li>Multi-threaded implementation of path planning algorithms</li>
              <li>Efficient memory management for map storage and updates</li>
              <li>Real-time scheduler configuration for critical control loops</li>
            </ul>
            <p className="text-gray-600 mt-2">
              The Jetson's WiFi module enabled remote monitoring and debugging, allowing us to visualize the robot's 
              state during maze navigation without physical connections.
            </p>
            <div className="bg-gray-100 rounded-lg p-4 my-4 flex items-center justify-center h-128">
              <img 
                src="/src/assets/jetson-nano.webp" 
                alt="ROS 2 Node Architecture" 
                className="max-h-full object-contain rounded"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Results & Achievements</h3>
            <p className="text-gray-600">
              Our software system successfully enabled the robot to navigate complex mazes with precision and reliability. Key metrics included:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Mapping accuracy within 1.5cm across the entire maze</li>
              <li>Localization precision of 0.8cm in position and 2 degrees in orientation</li>
              <li>Path planning computation in under 200ms for typical maze segments</li>
              <li>Smooth trajectory execution with velocity tracking error below 3%</li>
              <li>Successful navigation of mazes with tight corners and narrow passages</li>
            </ul>
            <p className="text-gray-600 mt-2">
              The project demonstrated the power of integrating modern robotics software with specialized hardware to solve complex 
              navigation challenges. The modular architecture we developed provides a foundation for future enhancements and can be 
              adapted to other autonomous navigation tasks beyond maze solving.
            </p>
            
            {/* <div className="bg-gray-100 rounded-lg p-4 my-4 flex items-center justify-center h-128">
              <img 
                src="/src/assets/robot-results.webp" 
                alt="Robot Navigation Results" 
                className="max-h-full object-contain rounded"
              />
            </div> */}
          </div>
          
          {/* <div>
            <h3 className="text-lg font-bold text-indigo-600 mb-2">Future Development</h3>
            <p className="text-gray-600">
              While the current system successfully navigates known and partially known mazes, several enhancements are planned for future iterations:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              <li>Integration of visual SLAM for improved localization in feature-poor environments</li>
              <li>Implementation of reinforcement learning for adaptive navigation strategies</li>
              <li>Development of multi-robot coordination for collaborative maze exploration</li>
              <li>Enhanced obstacle detection and avoidance for dynamic environments</li>
              <li>Improved power management for extended operational time</li>
            </ul>
            <p className="text-gray-600 mt-2">
              These advancements will push the boundaries of autonomous navigation capabilities, enabling more complex and challenging applications 
              beyond maze solving.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RobotDetailPanel;