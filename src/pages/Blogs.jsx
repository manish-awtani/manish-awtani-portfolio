import React, { useState, useEffect } from "react";
import { FiArrowDownLeft, FiArrowDownRight, FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import blogPosts from "../utils/constants/blogsData";
import { Link } from "react-router-dom";
import { renderContent, incrementViewCount, getViewCount } from "../utils/blogUtils.jsx";

const Blogs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [viewCounts, setViewCounts] = useState({});

  // Load view counts on component mount
  useEffect(() => {
    const counts = {};
    blogPosts.forEach(post => {
      const baseCount = post.views || 0;
      const dynamicCount = getViewCount(post.id);
      counts[post.id] = baseCount + dynamicCount;
    });
    setViewCounts(counts);
  }, []);

  const togglePost = (index) => {
    const post = blogPosts[index];
    if (openIndex !== index) {
      // Only increment if this is the first time opening this post in this session
      const sessionKey = `blog_session_${post.id}`;
      if (!sessionStorage.getItem(sessionKey)) {
        const newCount = incrementViewCount(post.id);
        const baseCount = post.views || 0;
        setViewCounts(prev => ({
          ...prev,
          [post.id]: baseCount + newCount
        }));
        sessionStorage.setItem(sessionKey, 'true');
      }
    }
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // min-h-screen
    <section className="min-h-screen flex flex-col justify-start items-center py-16 px-4">
      <div
        className="max-w-4xl w-full items-start font-inter text-gray-700 dark:text-gray-300 text-left gap-4 
   leading-relaxed"
      >
        <h2
          className="text-5xl font-bold font-gabarito text-gray-800 dark:text-gray-200 border-b-4 border-pink-500 w-fit pb-2
         mb-14"
        >
          My Writings
        </h2>
        <div className="space-y-6">
          {blogPosts.map((post, idx) => (
            // <a
            //   key={idx}
            //   href={post.link}
            //   className="flex justify-between items-center p-4 rounded-lg hover:bg-gray-200
            //   dark:hover:bg-zinc-800 transition group"
            // >
            //   <div>
            //     <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200
            //     group-hover:underline">
            //       {post.title}
            //     </h4>
            //     <div className="flex justify-between text-sm text-gray-500 mt-1">
            //       <span>{post.date}</span>
            //       <span className="flex items-center gap-1">
            //         {/* <FiEye size={14} /> */}
            //         {"   "} {post.views.toLocaleString()} views
            //       </span>
            //     </div>
            //   </div>
            //   <FiArrowUpRight
            //     className="text-pink-500 group-hover:scale-105 transition-transform"
            //     size={20}
            //   />
            // </a>
            <div
              key={idx}
              className="p-4 rounded-lg border border-transparent transition group cursor-pointer" // hover:bg-gray-200 dark:hover:bg-zinc-800
              onClick={() => togglePost(idx)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <Link to={post.link} className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:underline">
                    {post.title}
                  </Link>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{post.date}</span>
                    <span>{(viewCounts[post.id] || 0).toLocaleString()} views</span>
                  </div>
                </div>
                {openIndex === idx ? (
                  <FiArrowUpRight
                    className="text-pink-500 transition-transform"
                    size={20}
                  />
                ) : (
                  <FiArrowDownLeft
                    className="text-pink-500 transition-transform"
                    size={20}
                  />
                )}
              </div>

              {/* Blog content */}
              {openIndex === idx && (
                <div className="mt-4 px-2">{renderContent(post.content)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
