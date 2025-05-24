import { useEffect, useState } from "react";

const CursorTrail = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 w-6 h-6 rounded-full border border-gray-400 dark:border-gray-600 transition-transform duration-150 ease-out"
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
        backdropFilter: "blur(2px)",
        background: "rgba(255, 255, 255, 0.1)",
        mixBlendMode: "difference",
      }}
    />
  );
};

export default CursorTrail;
