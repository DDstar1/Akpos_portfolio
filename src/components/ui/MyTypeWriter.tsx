"use client";

import React from "react";
import Typewriter from "typewriter-effect";

const MyTypeWriter = () => {
  return (
    <div className="flex">
      <span className="mr-2">I am </span>
      <span className="text-blue-600 ">
        <Typewriter
          options={{
            strings: ["a Scientist!", "Innovative!", "a Strategist!"],
            autoStart: true,
            loop: true, // Set to true to loop through the strings
            delay: 50, // Adjust typing speed
          }}
        />
      </span>
    </div>
  );
};

export default MyTypeWriter;
