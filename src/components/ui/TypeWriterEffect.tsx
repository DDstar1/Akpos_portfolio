"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  sentences,
  className,
  cursorClassName,
}: {
  sentences: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Ensure each sentence has valid text and split it into characters
  const sentencesArray = sentences.map((sentence) => ({
    ...sentence,
    text: sentence.text ? sentence.text.split("") : [],
  }));

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        for (const sentence of sentencesArray) {
          // Ensure sentence.text is not empty
          if (sentence.text.length === 0) continue;

          for (let i = 0; i <= sentence.text.length; i++) {
            await controls.start({
              clipPath: `inset(0% ${
                100 - i * (100 / sentence.text.length)
              }% 0% 0%)`,
              transition: {
                duration: 0.1,
                ease: "linear",
              },
            });
          }
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for a moment before deleting
          for (let i = sentence.text.length; i >= 0; i--) {
            await controls.start({
              clipPath: `inset(0% ${
                100 - i * (100 / sentence.text.length)
              }% 0% 0%)`,
              transition: {
                duration: 0.1,
                ease: "linear",
              },
            });
          }
          await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for a moment before typing the next sentence
        }
      }
    };
    sequence();
  }, [controls, sentencesArray]);

  const renderSentences = () => (
    <div className="inline-block">
      {sentencesArray.map((sentence, idx) => (
        <div key={`sentence-${idx}`} className="inline-block">
          {sentence.text.map((char, index) => (
            <span
              key={`char-${index}`}
              className={cn(` text-black`, sentence.className)}
            >
              {char}
            </span>
          ))}
          &nbsp;
        </div>
      ))}
    </div>
  );

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          clipPath: "inset(0% 100% 0% 0%)",
        }}
        animate={controls}
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold">
          {renderSentences()}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
