import React from "react";
import { Timeline } from "../components/Timeline"; // Assuming you're using shadcn or Aceternity Timeline
import experienceData from "../utils/constants/experienceData";

const ExperienceTimeline = () => {
  const data = experienceData.map((exp) => ({
    title: exp.period,
    content: (
      <div>
        <div className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-1">
          {exp.role}
        </div>
        <div className="flex items-center justify-between flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <img
              src="/assets/logos/srkay-logo.png"
              alt={exp.company}
              className="h-6 w-6 object-contain"
            />
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:underline"
            >
              {exp.company}, {exp.location}
            </a>
          </div>
        </div>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {exp.achievements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
};

export default ExperienceTimeline;
