import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-start items-center py-16 px-4 bg-black text-white"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Text Content */}
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-5xl font-bold border-b-4 border-pink-500 w-fit pb-2">
            About Me
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            Hey, I'm Manish! I'm a passionate software engineer with experience
            in mobile app development, Java, and solving real-world problems. I
            thrive on learning, building, and pushing myself to get better every
            day.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Whether it's working on an open-source project, exploring AI/ML
            integrations, or diving deep into backend systems with Spring Boot,
            I’m always up for a challenge.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            This space is my digital home for sharing things I build, problems I
            solve, and ideas I’m excited about. I believe in keeping the web
            open and free, and this site is ad-free, distraction-free, and all
            about real content.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            Let’s connect, collaborate, and create awesome stuff together!
          </p>
        </div>

        {/* Image on the right */}
        <div className="md:w-1/3 w-full flex justify-center md:justify-end">
          <img
            src="/images/my-photo-1.png" // Replace with your actual image path
            alt="Manish's photo"
            className="rounded-xl shadow-lg max-w-sm w-full object-cover"
          />
        </div>
      </div>

      {/* Second image below */}
      <div className="mt-16 w-full flex justify-center">
        <img
          src="/images/my-photo-2.png" // Replace with your actual image path
          alt="Another photo"
          className="rounded-xl shadow-lg max-w-md w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AboutMe;
