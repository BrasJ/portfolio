import React from "react";
import { FaGraduationCap, FaLaptopCode, FaGamepad } from "react-icons/fa";

const events = [
  {
    icon: (
      <FaGraduationCap className="text-blue-600 dark:text-blue-400 text-xl" />
    ),
    title: "Graduated with B.S. in Computer Science",
    time: "Oct 2024",
    description:
      "Magna Cum Laude, GPA 3.86, Dean’s List, multiple honor societies.",
  },
  {
    icon: <FaLaptopCode className="text-blue-600 dark:text-blue-400 text-xl" />,
    title: "Built full-stack apps in React & FastAPI",
    time: "2023–2025",
    description:
      "Developed real-world apps with authentication, APIs, and reporting.",
  },
  {
    icon: <FaGamepad className="text-blue-600 dark:text-blue-400 text-xl" />,
    title: "Started building TacticsCore",
    time: "2025",
    description: "A modular C++ strategy engine inspired by tactical RPGs.",
  },
];

export default function Timeline() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        My Journey
      </h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="mt-1">{event.icon}</div>
            <div>
              <h3 className="text-md font-medium text-gray-900 dark:text-white">
                {event.title}
              </h3>
              <p className="text-xs text-gray-500">{event.time}</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
