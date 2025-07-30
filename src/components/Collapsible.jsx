/* eslint-disable no-unused-vars */
import React, { useRef, useState, useEffect } from "react";
import { Github, ExternalLink, MonitorSmartphone } from "lucide-react";
import { techStacks } from "../utils/constants/projectsData";
// import PropTypes from "prop-types";

const Collapsible = ({
  title,
  year,
  description,
  githubLink,
  projectLink,
  technologies = [],
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  //   const [height, setHeight] = useState();

  //   const handleToggle = (e) => {
  //     e.preventDefault();
  //     setIsExpanded(!isExpanded);
  //     setHeight(ref.current.clientHeight);
  //   };
  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleToggle = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    if (!isMobile) {
      setIsExpanded(false);
    }
  };
  //   const classes = `list-group-item ${isExpanded ? "is-expanded" : null}`;
  //   const currentHeight = isExpanded ? height : 0;
  return (
    <div
      className={`transition-all duration-300 hover:border dark:hover:border-white  hover:border-gray-700 
        rounded-lg p-4 bg-white dark:bg-[#121212] hover:bg-[#1c1c1c] hover:bg-white dark:bg-[#121212] 
        cursor-pointer shadow-sm group`} // dark:bg-zinc-900
      onMouseEnter={!isMobile ? handleToggle : undefined}
      onMouseLeave={!isMobile ? handleClose : undefined}
      onClick={isMobile ? () => setIsExpanded((prev) => !prev) : undefined}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 gap-4">
          {title}
        </h2>
        <span className="text-sm text-gray-400">{year}</span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-[200px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 text-sm mb-3">{description}</p>

        {/* Technologies Grid */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {technologies.map((tech, index) => {
              console.log(tech,'tech', index);
              
              return (
              <span
                key={index}
                className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-2 py-1 rounded-md"
              >
                {techStacks[tech]}
              </span>
            )})}
          </div>
        )}

        {/* Link Buttons */}
        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2  text-white rounded text-sm hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-black transition" // bg-gray-800 text-black dark:text-white hover:
            >
              <Github
                className="w-5 h-5 text-blue-500 dark:hover:text-blue-400 transition"
                strokeWidth={1.8}
              />
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2  text-white rounded text-sm hover:bg-green-100 dark:hover:bg-green-900  hover:text-black transition" // bg-gray-800
            >
              <MonitorSmartphone
                className="w-5 h-5 text-green-500 dark:hover:text-green-400 transition"
                strokeWidth={1.8}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Collapsible.propTypes = {
//   title: PropTypes.string,
// };

export default Collapsible;
