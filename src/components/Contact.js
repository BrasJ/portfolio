import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <a
      id="contact"
      href="mailto:bras.justin@gmail.com"
      className="block space-y-6 cursor-pointer bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl transition-transform transform hover:scale-[1.01]"
    >
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        Get In Touch
      </h2>
      <p className="text-md text-gray-700 dark:text-gray-300">
        I'm always open to discussing new opportunities, collaboration, or just
        talking shop about code. Feel free to reach out — I'd love to hear from
        you.
      </p>
    </a>
  );
}
