"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";

const ImageGallery = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 6; // Number of images to display at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + displayCount) % images.length
      );
    }, 7000); // Change images every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  const currentImages = images.slice(currentIndex, currentIndex + displayCount);

  // If the current slice is less than displayCount, add the beginning images
  if (currentImages.length < displayCount) {
    currentImages.push(...images.slice(0, displayCount - currentImages.length));
  }

  return (
    <div className="flex flex-wrap flex-1 items-center justify-center sm:max-h-[70vh] max-w-[1000px] mx-auto overflow-scroll">
      {images.map((src: any, index: any) => (
        <div
          key={index}
          className={`relative m-2 transition-all duration-1000 ${
            currentImages.includes(src) ? "max-w-full " : "max-w-0 max-h-0 m-0"
          }`}
          style={{ width: "200px", height: "200px" }}
        >
          <Fade>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-1300"
            />
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
