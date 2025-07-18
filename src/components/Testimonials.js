import React from "react";

const quotes = [
  {
    text:
      "Justin's academic achievements are impressive, showcasing his proficiency and deep " +
      "understanding of the subject matter. His talent for problem-solving, technical acumen, " +
      "and aptitude for learning made him stand out among his peers.",
    name: "Dr. Richard Yonts",
    title: "Professor of Computer Science, National University",
  },
];

export default function Testimonials() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
        What Others Say
      </h2>
      <div className="space-y-8">
        {quotes.map((quote, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition hover:scale-[1.01]"
          >
            <p className="text-md italic text-gray-800 dark:text-gray-200 mb-4">
              "{quote.text}"
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              — {quote.name}, <span className="italic">{quote.title}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
