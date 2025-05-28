import React from "react";
import Masonry from "react-masonry-css";
import masonryItems from "../utils/constants/masonryData";
const MasonaryGrid = () => {
  const breakpointColumnsObj = {
    default: 3,
    768: 2,
    480: 1,
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-6xl px-4">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {masonryItems.map((item, index) => (
            <div
              key={index}
              className="mb-6 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover rounded-t-xl ${
                  [0, 2, 7].includes(index) ? "aspect-[25/16]" : "aspect-[3/4]"
                }`}
                style={{ width: "100%", display: "block" }}
              />
              {/* <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 text-sm mt-2 inline-block"
                  >
                    View →
                  </a>
                )}
              </div> */}
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
};

export default MasonaryGrid;
