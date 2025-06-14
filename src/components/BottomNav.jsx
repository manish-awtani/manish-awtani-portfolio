// src/components/BottomNav.jsx
import { NavLink } from "react-router-dom";

const BottomNav = () => {
  const navItems = [
    { label: "Projects", icon: "📁", to: "/projects" },
    { label: "Blogs", icon: "✍️", to: "/blogs" },
    { label: "Experience", icon: "💼", to: "/experience" },
    { label: "AboutMe", icon: "📬", to: "/aboutme" },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white dark:bg-[#121212] shadow-lg rounded-full px-4 py-2 flex items-center space-x-4 z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300
             ${
               isActive
                 ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white scale-110"
                 : "hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700"
             }`
          }
        >
          <span>{item.icon}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
