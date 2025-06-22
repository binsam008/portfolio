import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emoji from "../assets/emoji.png"; // Replace with your image path

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999]">
      <motion.div
        className="absolute"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="relative w-4 h-4 flex items-center justify-center">
          {/* Blurred glow */}
          <div className="absolute w-4 h-4 rounded-full bg-purple-500 blur-sm opacity-30 animate-pulse"></div>

          {/* Tiny emoji/image */}
          <div className="z-10 w-3 h-3 rounded-full overflow-hidden border border-white bg-white">
            <img
              src={emoji}
              alt="emoji"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Subtle ring effect */}
          <div className="absolute w-6 h-6 border border-purple-400 rounded-full animate-ping"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
