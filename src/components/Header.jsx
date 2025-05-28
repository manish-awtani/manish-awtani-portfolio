// src/components/Header.jsx
import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import confetti from "canvas-confetti";
import { Menu, X } from "lucide-react"; // If using Lucide icons (or use any hamburger SVG)

const clickSound = new Audio("/mixkit-fast-double-click-on-mouse-275.wav");
// const clickSound = new Audio("public/mixkit-click-error-1110.wav");
// const clickSound = new Audio("public/mixkit-sci-fi-click-900.wav");
// const clickSound = new Audio("public/mixkit-sci-fi-interface-robot-click-901.wav");

const avatarImages = [
  "/avatars/mani-1.jpg",
  "/avatars/manish-2.png",
  "/avatars/mani-3.png",
  "/avatars/mani-4.png",
  "/avatars/mani-5.png",
  "/avatars/mani-6.png",
  "/avatars/chill-guy.jpeg",
  "/avatars/duck.jpeg",
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [customCursor, setCustomCursor] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const avatarRef = useRef(null); // Step 1: Create a ref
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navigate = useNavigate(); // react-router navigation
  const navItems = [ "Experience","Projects", "Blogs", "About Me"];

  useEffect(() => {
    avatarImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleProfileClick = () => {  
    // Play the sound
    clickSound.currentTime = 0; // rewind to start
    clickSound.play().catch((err) => console.warn("Sound play failed:", err));
  
    // Cycle through images
    const nextIndex = (currentIndex + 1) % avatarImages.length;
    setCurrentIndex(nextIndex);
    console.log(nextIndex, "nextIndexnextIndex");

    triggerConfettiFromElement();
    // setCustomCursor(true);
    // setTimeout(() => setCustomCursor(false), 1000); // revert after 1 second
  };

  //   const triggerConfetti = () => {
  //     confetti({
  //       particleCount: 100,
  //       spread: 70,
  //       origin: { y: 0.6 },
  //     });
  //   };
  const triggerConfettiFromElement = () => {
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      confetti({
        particleCount: 120,
        spread: 75,
        startVelocity: 45, // slower for downward movement
        angle: 320, // shoots downward
        gravity: 0.7, // realistic fall
        origin: { x, y },
        // colors: ["#ff007f", "#7f00ff", "#00d4ff", "#00ff85"], // neon pink, violet, cyan, green
        // shapes: ["circle", "square"], // you can try 'star' or custom shapes
      });
    }
  };

  return (
    <>
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Profile Picture (Click to Cycle) */}
          <div
            ref={avatarRef} // Step 2: Attach the ref
            onClick={handleProfileClick}
            className="relative group w-12 h-12 p-[2px] rounded-md cursor-pointer hover:scale-100 transition-transform duration-300"
          >
            <div className="absolute inset-0 rounded-md z-0 group-hover:animate-borderGradient" />
            <img
              src={avatarImages[currentIndex]}
              alt="Profile"
              style={{ cursor: "help" }} // This sets the question mark cursor
              className={`relative w-full h-full rounded-md object-cover z-10`}
              // hover:cursor-help ${customCursor ? "cursor-help" : "cursor-pointer"}`
            />
          </div>
          {/* Name */}
          <h1
            className="text-xl px-1 font-semibold cursor-pointer hover:underline hover:underline-offset-1 
              transition-all duration-200"
            onClick={() => navigate("/", { replace: true })}
            // className="text-xl font-semibold cursor-pointer relative inline-block group"
          >
            {/* <span className="pb-1"> */}
            Manish Awtani
            {/* </span> */}
            {/* <span className="absolute left-0 bottom-0 w-full h-0.25 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-borderGradient" /> */}
          </h1>
        </div>
        {/* Right Side Controls */}
        <div className="flex items-center space-x-4">
          {/* Desktop Nav */}
          <div className="hidden sixty:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() =>
                  navigate(`/${item.toLowerCase().replace(" ", "")}`)
                }
                className="text-lg font-semibold bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white 
                  transition-colors duration-200 hover:text-pink-500 dark:hover:text-pink-500"
                // className="block w-full text-left px-4 py-2 text-zinc-900 dark:text-white text-lg font-semibold transition-colors duration-200 hover:text-pink-500"
              >
                {item}
              </button>
            ))}
          </div>
          {/* Hamburger Icon for Mobile */}
          <div className="sixty:hidden">
            <button
              ref={menuButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              //   className="w-10 h-10 flex items-center justify-center text-black dark:text-white bg-white dark:bg-zinc-900 border border-white rounded-lg"
              className="w-10 h-10 flex items-center justify-center bg-white dark:bg-zinc-900
              text-zinc-900 dark:text-white border border-zinc-300 dark:border-zinc-700 
                rounded-lg transition-colors"
            >
              {menuOpen ? (
                <X
                  size={24}
                  className="text-black dark:text-white  hover:text-gray-400 transition"
                />
              ) : (
                <Menu
                  size={24}
                  className="text-black dark:text-white hover:text-gray-400 transition"
                />
              )}
            </button>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </header>
      {menuOpen && (
        // <div className="absolute top-16 right-4 bg-white w-52 dark:bg-zinc-900 border border-zinc-700 p-4 rounded-md shadow-lg z-50 sixty:hidden">
        <div
          className="absolute top-16 right-4 w-52 bg-white dark:bg-zinc-900 border 
          border-zinc-300 dark:border-zinc-700 p-4 rounded-md shadow-lg z-50 sixty:hidden 
            transition-colors duration-300"
          ref={menuRef}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                navigate(`/${item.toLowerCase().replace(" ", "")}`);
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 bg-white dark:bg-zinc-900  
                text-zinc-900 dark:text-white text-lg font-semibold transition-colors duration-200
                hover:text-pink-500 dark:hover:text-pink-500"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;
