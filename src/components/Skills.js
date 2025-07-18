import React from "react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaWindows,
  FaLinux,
} from "react-icons/fa";

import { SiCplusplus } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-[#3572A5]" /> },
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Java", icon: <FaJava className="text-[#5382A1]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: "React", icon: <FaReact className="text-[#61DBFB]" /> },
    { name: "Node.JS", icon: <FaNodeJs className="text-[#3C873A]" /> },
    { name: "SQL", icon: <FaDatabase className="text-[#00758F]" /> },
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
    { name: "Windows", icon: <FaWindows className="text-[#00ADEF]" /> },
    { name: "Linux", icon: <FaLinux className="text-black dark:text-white" /> },
  ];

  return (
    <section
      id="skills"
      className="w-full px-4 max-w-[1100px] mx-auto"
      data-aos="fade-up"
      data-aos-offset="150"
      data-aos-anchor-placement="top-bottom"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Technologies & Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:scale-105 transition-transform w-full min-w-[180px]"
          >
            <div className="text-2xl shrink-0 mr-3">{skill.icon}</div>
            <span className="font-medium break-words">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
