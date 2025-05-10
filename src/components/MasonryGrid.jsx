/* eslint-disable no-unused-vars */
import React from "react";

const images = [
  "/mani.JPG",
  "/mani.JPG",
  "/mani.JPG",
  "/mani.JPG",
  "/mani.JPG",
  "/mani.JPG",
]; 
const MasonryGrid = () => {
  return (
    // <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
    //   {images.map((src, index) => (
    //     <div key={index} className="mb-4 break-inside-avoid">
    //       <img src={src} className="w-full object-cover rounded-lg" />
    //     </div>
    //   ))}
    // </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10 py-10">
      {images.map((image, index) => (
        <div
          key={index}
          className={`overflow-hidden rounded-lg ${
            image.group === "A"
              ? "aspect-[4/3]" // Wider and shorter
              : "aspect-[3/4]" // Taller and narrower
          }`}
        >
          <img
            src={image.src}
            alt={`Photo ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
