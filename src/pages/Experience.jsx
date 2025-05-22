import React from "react";
import experienceData, { educationData } from "../utils/constants/experienceData";

const Experience = () => {
  // const highlightText = (text, keywords) => {
  //   let highlighted = text;
  //   keywords.forEach((word) => {
  //     const regex = new RegExp(`\\b(${word})\\b`, "gi");
  //     highlighted = highlighted.replace(
  //       regex,
  //       `<span class="text-yellow-300 font-medium">${word}</span>`
  //     );
  //   });
  //   return highlighted;
  // };
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-start items-center py-16 px-4"
    >
      <div className="max-w-4xl w-full flex flex-col items-start text-left gap-4 ">
        <h2 className="text-5xl font-bold border-b-4 border-pink-500 w-fit pb-2">
          Work
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400">
          My professional journey so far
        </p>
        <h3 className="mt-10  text-4xl font-bold">Summary</h3>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          As a kid, I wanted to be an astronaut. Or a chef. Or maybe both. What
          I didn’t know back then was how early you had to prepare for those
          dreams. What I did know was that I loved computers — and playing games
          on them.
          <br />
          <br />
          I still remember the first smartphone my dad bought me — a Micromax. I
          was 14. Most relatives raised their eyebrows, convinced it would
          "distract me from studies." What they didn’t know was that this little
          rectangle of tech would open a whole new universe for me.
          <br />
          <br />
          One day, while playing Subway Surfers, a simple thought hit me: "How
          does this work?" That question lit a fire. I jumped onto my old
          windows xp and started digging. I went down rabbit holes trying to
          understand how apps are built — even tried installing Apple’s iOS IDE
          <br />
          <br />
          Fast forward to today — I’m a self-taught full stack developer. I've
          built everything from dynamic web dashboards to scalable mobile
          applications. I’m the "tech guy" in the family, the one friends call
          when something’s broken — or when they want to build something big.
        </p>
        <h3 className="mt-10 text-4xl font-bold">Experience</h3>

        <div className="w-full text-left text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-10">
          {experienceData.map((exp, index) => (
            <div key={index} className="space-y-2">
              <div className="text-2xl font-semibold mb-1">{exp.role}</div>
              {/* <p className="text-gray-600 dark:text-gray-400">
                {exp.company}, {exp.location} — <span>{exp.period}</span>
              </p> */}
              <div className="flex justify-between items-center flex-wrap mb-3">
              <div className="flex items-center gap-2">
                <img
                  src="src/assets/logos/srkay-logo.png"
                  alt="GTU"
                  className="h-7 w-7 object-contain"
                />

                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline transition"
                  // className="text-gray-600 dark:text-gray-400 border-b border-dotted border-gray-400 hover:border-b-2 hover:border-pink-500 transition duration-200"
                >
                  {exp.company}, {exp.location}
                </a>
                </div>
                <span className="text-base text-gray-500 dark:text-gray-400">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc pl-5 mt-2">
                {exp.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="mb-1 marker:text-gray-400 dark:marker:text-gray-600"
                  >
                    {item}
                    {/* text-base list-item marker:text-gray-400
                    dark:marker:text-gray-500 */}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3 className="mt-10 text-4xl font-bold">Education</h3>

        {/* Education Section */}
        <div className="w-full text-left text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-10 mt-6">
          {educationData.map((edu, index) => (
            <div key={index} className="space-y-2">
              <div className="text-2xl font-semibold mb-1">{edu.degree}</div>
              <div className="flex justify-between items-center flex-wrap mb-3">
                <div className="flex items-center gap-2">
                <img
                  src="src/assets/logos/gtu-logo.png"
                  alt="GTU"
                  className="h-6 w-6 object-contain"
                />

                <a
                  href={edu.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:underline transition"
                >
                  {edu.institution}, {edu.location}
                </a>
                </div>
                <span className="text-base text-gray-500 dark:text-gray-400">
                  {edu.period}
                </span>
              </div>
              <ul className="list-disc pl-5 mt-2">
                {edu.achievements.map((item, idx) => (
                  <li
                    key={idx}
                    className="mb-1 marker:text-gray-400 dark:marker:text-gray-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
