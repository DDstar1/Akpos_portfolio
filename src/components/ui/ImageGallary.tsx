import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageGallary.module.css";

const animationClasses = [
  styles.slideInLeft,
  styles.slideInRight,
  styles.slideInUp,
  styles.slideInDown,
  styles.zoomInOut,
  styles.fadeInOut,
];

const ImageGallery = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const displayCount = 4; // Number of images to display at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + displayCount) % images.length
      );
      setCurrentAnimationIndex(
        (prevIndex) => (prevIndex + displayCount) % animationClasses.length
      );
    }, 20000); // Change images every 20 seconds

    return () => clearInterval(interval);
  }, [images]);

  const getCurrentItems = (items: any, startIndex: any, count: any) => {
    const endIndex = (startIndex + count) % items.length;
    if (endIndex > startIndex) {
      return items.slice(startIndex, endIndex);
    } else {
      return [...items.slice(startIndex), ...items.slice(0, endIndex)];
    }
  };

  const currentImages = getCurrentItems(images, currentIndex, displayCount);
  const currentAnimations = getCurrentItems(
    animationClasses,
    currentAnimationIndex,
    displayCount
  );

  const pairedData = currentImages.map((image: any, index: any) => ({
    image,
    animation: currentAnimations[index % currentAnimations.length],
  }));
  console.log(pairedData);
  return (
    <div className="flex flex-wrap flex-1 items-center justify-center sm:max-h-[70vh] max-w-[1000px] mx-auto overflow-scroll">
      {pairedData.map((pair: any, index: any) => (
        <div
          key={index}
          className={`relative m-1`}
          style={{ width: "200px", height: "200px" }}
        >
          <Image
            src={pair.image}
            alt={`Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            loading="eager"
            placeholder="blur"
            blurDataURL={`/_next/image?url=${pair.image}&w=640&q=1`}
            className={`${pair.animation} rounded-lg shadow-2xl hover:scale-110`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
