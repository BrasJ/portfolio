import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <motion.div
      className="flex flex-col items-center justify-start text-center space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={profile}
        alt="Profile"
        className="w-full h-auto rounded-2xl object-cover aspect-[3/4]"
      />
      <h1 className="text-2xl font-semibold tracking-tight">Justin Bras</h1>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed px-2">
        Software Engineer passionate about bringing products to life through
        thoughtful, reliable systems.
      </p>
      <div className="flex gap-4 text-xl text-gray-700 dark:text-gray-300">
        <a href="https://github.com/BrasJ" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/justin-bras" target="_blank">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1TBknCvqcUAfqcT3nVcUevCmx7HheSx3R"
          target="_blank"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
}
