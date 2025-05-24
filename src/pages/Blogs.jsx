import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const blogPosts = [
  {
    title: "Hello, World!",
    date: "June 29, 2024",
    views: 513,
    link: "/blog/hello-world",
  },
  {
    title: "Why Math is the Secret Weapon of Great Developers",
    date: "August 10, 2024",
    views: 10823,
    link: "/blog/math-secret-weapon",
  },
  {
    title: "Building AI Features in Flutter Using OpenAI",
    date: "July 18, 2024",
    views: 7340,
    link: "/blog/flutter-ai-openai",
  },
];

const Blogs = () => {
  return (
    <section className="min-h-screen flex flex-col justify-start items-center py-16 px-4">
      <div className="max-w-4xl w-full font-inter items-start text-left text-gray-800 dark:text-gray-200">
        <h2 className="text-5xl font-bold font-gabarito border-b-4 border-pink-500 w-fit pb-2 mb-10">
          My Writings
        </h2>
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-900 transition group"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:underline">
                  {post.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    {/* <FiEye size={14} /> */}
                    {"   "} {post.views.toLocaleString()} views
                  </span>
                </div>
              </div>
              <FiArrowUpRight
                className="text-pink-500 group-hover:scale-105 transition-transform"
                size={20}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
