import React, { useEffect } from "react";
import { FaLinkedinIn, FaMedium, FaWifi, FaWikipediaW, FaX, FaXTwitter } from "react-icons/fa6";
// import MasonryGrid from "./MasonryGrid";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { dinoGame } from "../utils/common";
import MasonaryGrid from "./MasonaryGrid";
import { FiArrowRight, FiArrowRightCircle, FiArrowUpLeft, FiArrowUpRight } from "react-icons/fi";
import blogPosts from "../utils/constants/blogsData";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    dinoGame();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-start items-center py-16 px-4"
    >
      <div className="max-w-4xl w-full flex flex-col items-start text-left gap-4 font-inter text-gray-800 dark:text-gray-200">
        <h2 className="text-5xl font-bold font-gabarito">
          Hey, I’m Manish!
          {/* 👋 */}
        </h2>
        {/* Subtitle and Socials in One Line */}
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Creative Developer | Engineer
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/manish-awtani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/manish-awtani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {/* <FaLinkedin size={24} /> */}

              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://x.com/manishunleashed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition" // hover:text-sky-500 dark:hover:text-sky-400
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition" // hover:text-sky-500 dark:hover:text-sky-400
            >
              <FaMedium size={24} />
            </a>
            {/* <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a> */}
          </div>
        </div>
        <div className="max-w-4xl w-full mt-10 text-left text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            {/* {" "} */}
            I'm a <span className="font-semibold">software engineer</span>, a
            <span className="font-semibold"> self-taught chef</span>, and
            someone who’s constantly chasing that next big idea. I currently
            work at{" "}
            <a
              href="https://www.srkay.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline hover:decoration-pink-500 hover:text-pink-500"
            >
              SRKay Consulting Group
            </a>
            , while also working on a few side-hustle mobile apps and ai driven
            projects.
            <br />
            <br />I also write articles on math and computer science, and I love
            chatting about new ideas, tech startups, and great products over
            coffee. When I’m not doing that, I’m probably off on a solo trip to
            the mountains — clearing my head, sketching ideas, or just watching
            the clouds drift and dreaming up what’s next.
          </p>
        </div>
        {/* <MasonryGrid /> */}
        <MasonaryGrid />
        <p>
          This is my little corner of the internet where I share my work, ideas
          and whatever’s cooking — on the screen or in the kitchen.
        </p>
        {/* <div className="mt-8">
          <a
            href="#blog" // Or replace with /blog if it's a route
            className="inline-block px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-medium rounded-lg shadow hover:shadow-md transition hover:bg-gray-800 dark:hover:bg-gray-100"
          >
            Read My Blog
          </a>
        </div> */}
        <div className="mt-8 text-center font-inter">
          <p className="text-lg">
            Interested in collaborating or chatting about an idea?{" "}
            <Link
              to="/aboutme#contact"
              className="text-pink-500 hover:underline inline-flex items-center gap-1"
            >
              Let’s talk
              <FiArrowRight className="inline-block transform rotate-[320deg]" />
            </Link>
          </p>
        </div>
        <div className="mt-8 bg-gray-100 dark:bg-zinc-900 text-zinc-900 dark:text-white p-6 rounded-lg shadow w-full font-inter">
          <h3 className="text-xl font-bold mb-2">Latest Blog Post</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            "{blogPosts[0].title}" – I explore how
            core math concepts empower elegant problem solving in software
            engineering.
          </p>
          <a
            href={blogPosts[0].link}
            className="text-pink-500 dark:text-pink-500 font-medium hover:underline"
          >
            Read More
            <FiArrowRight className="inline-block transform rotate-[320deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
