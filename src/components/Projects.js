import React from "react";

const projects = [
  {
    title: "Infra Watch",
    description:
      "Backend-driven VM infrastructure monitoring tool with FastAPI, React dashboards, JWT auth, and telemetry + config drift tracking in a Dockerized setup.",
    tech: ["Python", "React", "PostgreSQL", "Docker", "AWS"],
    repo: "https://github.com/BrasJ/infra-watch",
    screenshot: "/screenshots/infrawatch.png",
  },
  {
    title: "Interactive Story Generator",
    description:
      "A full-stack web app that uses React and FastAPI to let users generate interactive, branching stories using OpenAI’s API.",
    tech: ["Python", "React", "FastAPI", "OpenAI", "SQLite"],
    repo: "https://github.com/BrasJ/Interactive-Story-Generator",
    screenshot: "/screenshots/story.png",
  },
  {
    title: "E-Commerce System",
    description:
      "A database-focused app for managing products, inventory, and generating business reports. Built using MySQL and Agile methodology.",
    tech: ["Python", "JavaScript", "MySQL"],
    repo: "https://github.com/BrasJ/e-commerce-app",
    screenshot: "/screenshots/ecommerce.png",
  },
  {
    title: "TacticsCore",
    description:
      "A grid-based tactical RPG engine written in C++, inspired by Final Fantasy Tactics and XCOM. Modular and built for expansion.",
    tech: ["C++"],
    repo: "https://github.com/BrasJ/TacticsCore",
    screenshot: "/screenshots/tacticscore.png",
  },
];

export default function Projects() {
  return (
    <div className="space-y-16" id="projects">
      {projects.map((project, idx) => (
        <a
          key={idx}
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="block group rounded-2xl overflow-hidden shadow-md transition-transform transform hover:scale-[1.01]"
          data-aos="fade-up"
          data-aos-offset="150"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="flex flex-col md:flex-row backdrop-blur-md">
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <div className="p-8 flex flex-col justify-center md:w-1/2 space-y-4 bg-white dark:bg-gray-800 md:rounded-r-2xl shadow-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-blue-600 dark:text-blue-400">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
