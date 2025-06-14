import React, { useState } from "react";
import { FiArrowDownLeft, FiArrowDownRight, FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import blogPosts from "../utils/constants/blogsData";

const Blogs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const togglePost = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Function to beautify and render blog content
  // const renderContent = (rawText) => {
  //   return rawText
  //     .split("\n")
  //     .filter((line) => line.trim() !== "")
  //     .map((line, i) => {
  //       const trimmed = line.trim();
  //       if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
  //         return (
  //           <h3
  //             key={i}
  //             className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-2"
  //           >
  //             {trimmed.slice(2, -2)}
  //           </h3>
  //         );
  //       } else {
  //         return (
  //           <p key={i} className="text-gray-600 dark:text-gray-400 mb-3">
  //             {trimmed}
  //           </p>
  //         );
  //       }
  //     });
  // };
  // const renderContent = (rawText) => {
  //   const lines = rawText.split("\n").filter((line) => line.trim() !== "");

  //   const elements = [];
  //   let currentList = [];

  //   lines.forEach((line, i) => {
  //     const trimmed = line.trim();

  //     // Heading
  //     if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
  //       // Push pending list if exists
  //       if (currentList.length > 0) {
  //         elements.push(
  //           <ul
  //             key={`list-${i}`}
  //             className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-3"
  //           >
  //             {currentList.map((item, idx) => (
  //               <li key={idx}>{item}</li>
  //             ))}
  //           </ul>
  //         );
  //         currentList = [];
  //       }

  //       elements.push(
  //         <h3
  //           key={`heading-${i}`}
  //           className="text-xl font-bold text-red-400 mt-6 mb-2"
  //         >
  //           {trimmed.slice(2, -2)}
  //         </h3>
  //       );
  //     }
  //     // Bullet point
  //     else if (trimmed.startsWith("- ")) {
  //       currentList.push(trimmed.slice(2));
  //     }
  //     // Paragraph
  //     else {
  //       // Push pending list if exists
  //       if (currentList.length > 0) {
  //         elements.push(
  //           <ul
  //             key={`list-${i}`}
  //             className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-3"
  //           >
  //             {currentList.map((item, idx) => (
  //               <li key={idx}>{item}</li>
  //             ))}
  //           </ul>
  //         );
  //         currentList = [];
  //       }

  //       elements.push(
  //         <p
  //           key={`para-${i}`}
  //           className="text-gray-700 dark:text-gray-300 mb-3 text-justify"
  //         >
  //           {trimmed}
  //         </p>
  //       );
  //     }
  //   });

  //   // Flush any remaining list items
  //   if (currentList.length > 0) {
  //     elements.push(
  //       <ul
  //         key={`list-end`}
  //         className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-3"
  //       >
  //         {currentList.map((item, idx) => (
  //           <li key={idx}>{item}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   return elements;
  // };

const renderContent = (rawText) => {
  const lines = rawText.split("\n");

  const elements = [];
  let currentList = [];
  let insideCodeBlock = false;
  let codeLanguage = "";
  let codeLines = [];

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    // Handle code block start
    if (trimmed.startsWith("```")) {
      if (!insideCodeBlock) {
        insideCodeBlock = true;
        codeLanguage = trimmed.slice(3).trim(); // language name after ```
        codeLines = [];
      } else {
        // End of code block
        insideCodeBlock = false;
        elements.push(
          <div key={`code-${i}`} className="my-4">
            <SyntaxHighlighter language={codeLanguage} style={atomOneDark} customStyle={{ borderRadius: "0.5rem", fontSize: "0.9rem" }}>
              {codeLines.join("\n")}
            </SyntaxHighlighter>
          </div>
        );
        codeLanguage = "";
        codeLines = [];
      }
      return;
    }

    if (insideCodeBlock) {
      codeLines.push(line);
      return;
    }

    // Handle headings
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${i}`} className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-3">
            {currentList.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        );
        currentList = [];
      }
      elements.push(
        <h3 key={`heading-${i}`} className="text-xl font-bold text-red-400 mt-6 mb-2">
          {trimmed.slice(2, -2)}
        </h3>
      );
      return;
    }

    // Handle bullet points
    if (trimmed.startsWith("- ")) {
      currentList.push(trimmed.slice(2));
      return;
    }

    // Handle paragraph
    if (currentList.length > 0) {
      elements.push(
        <ul key={`list-${i}`} className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-3">
          {currentList.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      );
      currentList = [];
    }

    // Handle inline code (single *)
    const paragraphWithInlineCode = trimmed.split(/(\*.*?\*)/).map((part, idx) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <span key={idx} className="bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded text-sm mx-0.5">
            {part.slice(1, -1)}
          </span>
        );
      } else {
        return part;
      }
    });

    elements.push(
      <p key={`para-${i}`} className="text-gray-700 dark:text-gray-300 mb-3 text-justify">
        {paragraphWithInlineCode}
      </p>
    );
  });

  // Flush any remaining list items
  if (currentList.length > 0) {
    elements.push(
      <ul key={`list-end`} className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-3">
        {currentList.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    );
  }

  return elements;
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
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:underline">
                    {post.title}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{post.date}</span>
                    <span>{post.views.toLocaleString()} views</span>
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
