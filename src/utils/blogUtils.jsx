import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const renderContent = (rawText) => {
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
            <SyntaxHighlighter 
              language={codeLanguage} 
              style={atomOneDark} 
              customStyle={{ borderRadius: "0.5rem", fontSize: "0.9rem" }}
            >
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

// View counter utilities
export const incrementViewCount = (blogId) => {
  const viewKey = `blog_views_${blogId}`;
  const currentViews = parseInt(localStorage.getItem(viewKey) || '0');
  const newViews = currentViews + 1;
  localStorage.setItem(viewKey, newViews.toString());
  return newViews;
};

export const getViewCount = (blogId) => {
  const viewKey = `blog_views_${blogId}`;
  return parseInt(localStorage.getItem(viewKey) || '0');
}; 