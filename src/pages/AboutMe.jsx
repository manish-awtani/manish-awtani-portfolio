import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-start items-center py-16 px-4"
    >
      <div className="max-w-4xl w-full flex flex-col items-start text-left gap-8">
        <h2 className="text-5xl font-bold  text-gray-800 dark:text-gray-300 border-b-4 border-pink-500 w-fit pb-2">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
          <div className="text-lg md:w-2/3 text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            {/* <h2 className="text-5xl font-bold border-b-4 border-pink-500 w-fit pb-2">
            About Me If you want to know more about me, send me a message or reach out to me at akhileshrangani4@gmail.com.
            </h2> */}
            <p>
              I’ve always been fascinated by the “how” behind the things I use.
              From breaking apart toys as a kid to diving into lines of code as
              an adult, curiosity has always led the way.
            </p>

            <p>
              The turning point came with my first smartphone — a Micromax. That
              slab of plastic and pixels introduced me to a digital world I
              wanted to create, not just consume.
            </p>

            <p>
              I began self-learning — from building static sites to crafting
              interactive UIs and mobile apps. I didn’t follow the traditional
              route, but I followed passion, discipline, and a love for solving
              real problems.
            </p>

            <p>
              Today, I’m a full-stack developer, working on everything from
              dashboards to AI-driven mobile applications. I thrive at the
              intersection of design and code — turning imagination into
              polished, usable products.
            </p>
            {/* <img
              src="src/assets/avatars/mani-4.png"
              alt="Curious beginnings"
              className="rounded-xl shadow-md w-full max-w-md mx-auto"
            /> */}
          </div>

          {/* Image on the right */}
          <div className="md:w-1/3 w-full flex justify-center md:justify-end">
            <img
              src="src/assets/avatars/mani-3.png"
              alt="Manish's photo"
              className="rounded-xl shadow-lg max-w-sm w-full object-cover"
            />
          </div>
        </div>
        <div className="mt-16 space-y-6 w-full">
          <h3 className="text-4xl font-bold text-gray-700 dark:text-gray-300">
            Contact
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Send me an email to say hi, or connect via the socials.
          </p>

          <ul className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:manishawtani01@gmail.com" // hello@taniarascia.com
                className="underline hover:text-blue-500"
              >
                manishawtani01@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/manish-awtani"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://yournewsletter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/manish-awtani/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500"
              >
                Linkedin
              </a>
            </li>
          </ul>

          <h4 className="text-2xl font-semibold mt-10">What I'm Doing Now</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Updated May 20th, 2025
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Working full-time</li>
            <li>Playing Marvel Rivals</li>
            <li>Trekking across India</li>
            <li>Building a new side project</li>
            Learning how to garden and landscape
          </ul>

          <h4 className="text-2xl font-semibold mt-10">Miscellaneous</h4>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <a
                href="https://drive.google.com/file/d/1a0Eea939bw8yOw3E7g0Ln5Et7ZzmAgXt/view"
                className="underline hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/illustrations"
                className="underline hover:text-blue-500"
              >
                Illustrations
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
