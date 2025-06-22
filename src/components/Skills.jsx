import { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/Skills/me.png";
import vscode from "../assets/Skills/vscode.png";
import react from "../assets/Skills/react.png";
import python from "../assets/Skills/python.png";
import html from "../assets/Skills/html.png";
import tailwind from "../assets/Skills/tailwind.png";
import php from "../assets/Skills/php.png";
import github from "../assets/Skills/github.png";
import mongodb from "../assets/Skills/mongodb.png";

const icons = [python, vscode, react, html, tailwind, php, github, mongodb];

const skills = {
  "Core Technologies": [
    { name: "JavaScript", percent: 85, note: "pretty fire" },
    { name: "Python", percent: 80, note: "getting there" },
    { name: "HTML", percent: 90, note: "absolute base" },
    { name: "Java", percent: 82, note: "getting there" },
    { name: "C", percent: 75, note: "vibing with it" },
  ],
  "Frameworks & Platforms": [
    { name: "React", percent: 85, note: "pretty fire" },
    { name: "Node.js", percent: 50, note: "an average user" },
    { name: "Django", percent: 60, note: "getting there" },
    { name: "Flask", percent: 60, note: "getting there" },
  ],
  Databases: [
    { name: "SQL", percent: 85, note: "pretty fire" },
    { name: "MongoDB", percent: 70, note: "getting there" },
    { name: "Firebase", percent: 60, note: "getting there" },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Core Technologies");

  return (
    <section
      id="skills"
      className="bg-background text-foreground py-16 px-4 md:px-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Rotating Tech Circle */}
        <div className="relative w-full h-[400px] flex items-center justify-center">
          <motion.div
            className="relative w-64 h-64"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {icons.map((src, i) => {
              const angle = (360 / icons.length) * i;
              const radius = 120;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              return (
                <img
                  key={i}
                  src={src}
                  alt={`icon-${i}`}
                  className="absolute w-12 h-12 rounded-full shadow-lg ring-2 ring-purple-400 bg-white"
                  style={{
                    left: `calc(50% + ${x}px - 24px)`,
                    top: `calc(50% + ${y}px - 24px)`,
                  }}
                />
              );
            })}
          </motion.div>

          <div className="absolute w-28 h-28 rounded-full overflow-hidden ring-4 ring-white dark:ring-purple-500 shadow-2xl">
            <img src={image} alt="me" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Right: Skills Content */}
        <div className="w-full p-6 rounded-xl bg-card border border-purple-500 shadow-lg">
          <h2 className="text-purple-600 dark:text-purple-400 text-2xl font-semibold mb-4 text-center">
            ✨ my tech stack ✨
          </h2>

          <div className="flex justify-center flex-wrap gap-x-4 gap-y-3 mb-6">
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                  activeTab === tab
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 text-purple-600 dark:bg-gray-800 dark:text-purple-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center text-center">
            {skills[activeTab].map(({ name, percent, note }) => (
              <div key={name} className="flex flex-col items-center space-y-2">
                <div className="relative w-20 h-20">
                  <svg className="transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-200 dark:text-gray-700 stroke-current"
                      strokeWidth="3.8"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                    />
                    <path
                      className="text-purple-400 stroke-current"
                      strokeWidth="3.8"
                      strokeDasharray={`${percent}, 100`}
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-purple-400">
                    {percent}%
                  </div>
                </div>
                <div>{name}</div>
                <span className="text-xs text-purple-500 dark:text-purple-400 italic">
                  "{note}"
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
