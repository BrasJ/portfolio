import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Testimonials from "./components/Testimonials";
import useWindowWidth from "./hooks/useWindowWidth";

const Portfolio = () => {
  const width = useWindowWidth();

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: false,
      });
    }
  }, []);

  // Dynamically calculate horizontal position
  const heroLeft = (() => {
    if (width >= 1920) return "33%"; // ultra-wide screens
    if (width >= 1440) return "30%"; // full 1440p
    if (width >= 1280) return "240px"; // half of 1440p
    if (width >= 1080) return "210px"; // full 1080p
    if (width >= 900) return "200px"; // half 1080p
    return "180px"; // fallback for smaller screens
  })();

  const contentMarginLeft = (() => {
    if (width >= 1920) return "420px";
    if (width >= 1440) return "420px";
    if (width >= 1280) return "420px";
    if (width >= 1080) return "400px";
    if (width >= 900) return "340px";
    return "300px"; // fallback for smaller half-screen layouts
  })();

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div
        className="hidden md:block fixed top-40 z-50 transform -translate-x-1/2"
        style={{ left: heroLeft }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 w-[320px] min-h-[420px]">
          <Hero />
        </div>
      </div>

      <div
        className="px-4 pt-[160px] pb-20 max-w-[1100px] mx-auto space-y-16"
        style={{
          paddingLeft:
            width >= 1920
              ? "420px"
              : width >= 1600
                ? "400px"
                : width >= 1440
                  ? "380px"
                  : width >= 1080
                    ? "400px"
                    : width >= 768
                      ? "380px"
                      : "24px",
          paddingRight: width >= 768 ? "36px" : "20px",
        }}
      >
        <section
          id="about"
          data-aos="fade-up"
          data-aos-anchor-placement="top-botoom"
          data-aos-offset="150"
          data-aos-duration="600"
        >
          <About />
        </section>
        <section
          className="overflow-hidden whitespace-nowrap py-4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="600"
        >
          <div className="animate-scroll text-lg text-blue-600 dark:text-blue-400 font-medium">
            <span className="inline-block px-8">Problem Solver</span>
            <span className="inline-block px-8">Clear Communicator</span>
            <span className="inline-block px-8">Proven Leader</span>
            <span className="inline-block px-8">Detail-Oriented</span>
            <span className="inline-block px-8">Self-Starter</span>
            <span className="inline-block px-8">Systems Thinker</span>
            <span className="inline-block px-8">Mission-Driven</span>
            <span className="inline-block px-8">Problem Solver</span>
            <span className="inline-block px-8">Clear Communicator</span>
          </div>
        </section>
        <section
          className="py-8 text-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          data-aos-duration="600"
        >
          <p className="text-md italic text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            “I believe in building software that balances performance,
            usability, and thoughtful design — tools that are elegant under the
            hood and intuitive in the hands.”
          </p>
        </section>

        <section
          className="py-6"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="100"
          data-aos-duration="500"
        >
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Featured Projects
          </h2>
        </section>

        <section
          id="projects"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="600"
        >
          <Projects />
        </section>
        <section
          id="skills"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="600"
        >
          <Skills />
        </section>
        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="600"
        >
          <Timeline />
        </section>

        <section
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="600"
        >
          <Testimonials />
        </section>

        <section
          id="contact"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="600"
        >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
