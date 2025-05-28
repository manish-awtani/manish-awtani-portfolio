/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Collapsible from "../components/Collapsible";
import projectsData from "../utils/constants/projectsData";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverDirection, setHoverDirection] = useState(null);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [expandedProjectTitle, setExpandedProjectTitle] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleProjectClick = (project) => {
    if (isMobile) {
      setActiveProject(project);     setExpandedProjectTitle(project.title); // open collapsible when project selected
      // Show simulator
    } else {
      window.open(project.link, "_blank"); // Redirect on desktop
    }
  };

  const handleHover = (project, e) => {
    if (!isMobile) {
      const currentX = e.clientX;
      const currentY = e.clientY;
      const deltaX = currentX - lastMousePos.x;
      const deltaY = currentY - lastMousePos.y;
  
      let direction = "center";
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        direction = deltaX > 0 ? "right" : "left";
      } else {
        direction = deltaY > 0 ? "down" : "up";
      }
  
      setHoverDirection(direction);
      setLastMousePos({ x: currentX, y: currentY });
      setActiveProject(project);
    }
  };
  
  const getSimulatorTransform = () => {
    switch (hoverDirection) {
      case "left":
        return "translateX(-10px)";
      case "right":
        return "translateX(10px)";
      case "up":
        return "translateY(-10px)";
      case "down":
        return "translateY(10px)";
      default:
        return "translate(0, 0)";
    }
  };

  // const handleMouseEnter = (e) => {
  //   const currentX = e.clientX;
  //   const currentY = e.clientY;
  //   const deltaX = currentX - lastMousePos.x;
  //   const deltaY = currentY - lastMousePos.y;

  //   let direction = "center";
  //   if (Math.abs(deltaX) > Math.abs(deltaY)) {
  //     direction = deltaX > 0 ? "right" : "left";
  //   } else {
  //     direction = deltaY > 0 ? "down" : "up";
  //   }
  //   setHoverDirection(direction);
  //   setLastMousePos({ x: currentX, y: currentY });
  //   setActiveProject(e.project); // your existing code
  // };
  
  const handleMouseLeave = () => {
    if (!isMobile) setActiveProject(null);
  };

  // return (
  //   <>
  //     <div className="relative w-full px-6 py-12">
  //       {/* Grid of Project Cards */}
  //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
  //         {projects.map((project, idx) => (
  //           <div
  //             key={idx}
  //             onMouseEnter={() => handleHover(project)}
  //             onMouseLeave={() => !isMobile && setActiveProject(null)}
  //             onClick={() => handleProjectClick(project)}
  //             className="bg-gray-800 hover:bg-gray-700 transition-all rounded-xl p-4 text-white cursor-pointer shadow-md"
  //           >
  //             <div className="text-lg font-semibold">{project.title}</div>
  //             <div className="text-sm text-gray-400">{project.year}</div>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Simulator Section */}
  //       {activeProject && (
  //         <div
  //           className={`fixed top-0 left-0 w-full h-full bg-black/60 z-50 flex items-center justify-center`}
  //         >
  //           <div className="relative w-[320px] h-[640px] bg-black rounded-[2rem] overflow-hidden shadow-2xl">
  //             {/* Close Button (for mobile only) */}
  //             {isMobile && (
  //               <button
  //                 className="absolute top-2 right-2 z-10 text-white bg-black bg-opacity-70 rounded-full p-1"
  //                 onClick={() => setActiveProject(null)}
  //               >
  //                 ✖
  //               </button>
  //             )}
  //             <video
  //               key={activeProject.video}
  //               src={activeProject.video}
  //               autoPlay
  //               muted
  //               loop
  //               className="w-full h-full object-cover"
  //             />
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   </>
  // );
  return (
    <section
    id="projects" 
    //  max-w-screen-lg 
    className="min-h-screen w-full max-w-[1090px] items-start text-left mx-auto px-4 md:px-10 py-16"
    >
      <div className="max-w-5xl w-full font-inter text-gray-700 dark:text-gray-300 leading-relaxed"> 
      <h2 className="text-5xl font-bold font-gabarito text-gray-800 dark:text-gray-200 border-b-4 border-pink-500
      w-fit pb-2 mb-14"
      // border-blue-500
      >Projects</h2> 
      <div
        className="flex flex-col md:flex-row gap-10"
        onMouseLeave={handleMouseLeave}
        // onMouseLeave={() => !isMobile && setActiveProject(null)}
      >
        {/* Left: Project List */}
        <div className="space-y-4 flex-1 text-gray-700 dark:text-gray-300">
          {projectsData.map((project, index) => (
            <div
              key={index}
              onMouseEnter={(e) => handleHover(project, e)}
              // onMouseEnter={() => !isMobile && setActiveProject(project)}
              className={`cursor-pointer rounded transition ${
                // p-3 (style)
                activeProject?.title === project.title
                  ? " text-black shadow"
                  : "hover:bg-gray-800 hover:text-white text-gray-400"
              }`}
              onClick={() =>
                isMobile
                  ? setActiveProject(project)
                  : window.open(project.link, "_blank")
              }
            >
              <Collapsible
                title={project.title}
                year={project.year}
                description={project.description}
                githubLink="https://github.com/your/chat-app"
                projectLink="https://yourapp.com"
              />
            </div>
          ))}
          <Collapsible
            title="Chat App"
            description="A real-time chat application built using Flutter and Firebase."
            githubLink="https://github.com/your/chat-app"
            projectLink="https://yourapp.com"
          />
        </div>

        {/* Right: iPhone Preview (Desktop only) */}
        {!isMobile && activeProject && (
          // <div className="relative w-72 h-[500px] rounded-[2rem] border border-gray-700 overflow-hidden shadow-lg">
          //   <video
          //     key={activeProject.video}
          //     src={activeProject.video}
          //     autoPlay
          //     muted
          //     loop
          //     className="w-full h-full object-cover"
          //   />
          // </div>
          <div
            className={`transition-transform duration-300 ease-out text-gray-700 dark:text-gray-300`}
            style={{ transform: getSimulatorTransform() }}
          >
            {activeProject.simulatorType === "mobile" ? (
              <div className="relative w-72 h-[550px] rounded-[2rem] border border-gray-700 overflow-hidden shadow-lg">
                <video
                  key={activeProject.video}
                  src={activeProject.video}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="relative w-[640px] h-[360px] rounded-xl border border-gray-700 overflow-hidden shadow-lg">
                <video
                  key={activeProject.video}
                  src={activeProject.video}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Simulator Modal */}
      {isMobile && activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"> 
          <div className="flex flex-col items-center">
            <div className="relative w-[90%] max-w-xs h-[500px] bg-black rounded-[2rem] overflow-hidden shadow-2xl">
              {/* <button
                onClick={() => setActiveProject(null)}
                // className="absolute top-2 right-4 text-white text-2xl font-light"
                // className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-white bg-white/60 hover:bg-white/70 rounded-full text-base z-10"
                className="absolute top-3 right-3 w-8 h-8 bg-black text-white text-xl flex items-center justify-center rounded-full text-base z-10"

              >
                &times;
              </button> */}
              <video
                src={activeProject.video}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              />
            </div>
              
      {/* Close button below video */}
      <button
        onClick={() => {setActiveProject(null)
          setExpandedProjectTitle(null); 
        }}
        className="mt-4 w-10 h-10 bg-white dark:bg-black text-black dark:text-white rounded flex items-center justify-center text-lg shadow-md"
      >
        ✖
      </button>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Projects;
