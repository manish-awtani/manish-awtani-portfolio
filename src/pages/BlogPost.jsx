import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../utils/constants/blogsData";
import { renderContent, incrementViewCount, getViewCount } from "../utils/blogUtils.jsx";

const BlogPost = () => {
  const { slug } = useParams();
  const [viewCount, setViewCount] = useState(0);
  const post = blogPosts.find((p) => p.link === `/blog/${slug}`);

  useEffect(() => {
    if (post) {
      // Get the base count from blogData and add the dynamic count
      const baseCount = post.views || 0;
      const dynamicCount = getViewCount(post.id);
      const totalCount = baseCount + dynamicCount;
      setViewCount(totalCount);
      
      // Only increment if this is the first time visiting this session
      const sessionKey = `blog_session_${post.id}`;
      if (!sessionStorage.getItem(sessionKey)) {
        const newCount = incrementViewCount(post.id);
        setViewCount(baseCount + newCount);
        sessionStorage.setItem(sessionKey, 'true');
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <Link to="/blogs" className="text-pink-500 hover:underline">Back to Blogs</Link>
      </div>
    );
  }

  // Simple content rendering (reuse your renderContent if needed)
  return (
    <section className="min-h-screen flex flex-col justify-start items-center py-16 px-4">
      <div className="max-w-2xl w-full font-inter text-gray-700 dark:text-gray-300 text-left gap-4 leading-relaxed">
        <h1 className="text-4xl font-bold font-gabarito text-gray-800 dark:text-gray-200 mb-4">{post.title}</h1>
        <div className="flex justify-between text-sm text-gray-500 mb-8">
          <span>{post.date}</span>
          <span>{viewCount.toLocaleString()} views</span>
        </div>
        {/* Render content using the shared renderContent function */}
        {renderContent(post.content)}
        <Link to="/blogs" className="text-pink-500 hover:underline mt-8 inline-block">← Back to Blogs</Link>
      </div>
    </section>
  );
};

export default BlogPost; 