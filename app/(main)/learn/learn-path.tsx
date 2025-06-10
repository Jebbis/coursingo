import React from "react";
import WavyLine from "./learning-wave";

const lessons = [
  { title: "Getting Started" },
  { title: "Core Concepts" },
  { title: "Advanced Topics" },
  { title: "Advanced Topics" },
];

const LearningPath = () => {
  return (
    <div className="flex flex-col pt-20">
      {lessons.map((_, index) => (
        <div key={index} className="h-[200px] relative">
          <WavyLine />
        </div>
      ))}
    </div>
  );
};

export default LearningPath;
