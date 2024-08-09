import React from "react";
import Timeline from "@/components/ui/TImeline";
import { AuroraBackground } from "../../ui/AuroraBackground";
import Interests from "../../ui/Interest";
import Publications from "../../ui/Publications";

function About() {
  return (
    <div className="mx-auto max-w-[1200px] p-6 flex flex-col justify-center align-center space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-white mb-6">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I became fascinated with the relationship between the human brain and
          mind after suffering concussions playing college football and rugby.
          After completing my bachelor’s degree in engineering at Columbia
          University, I pursued an MFA in Design & Technology at Parsons School
          of Design, where I discovered brain-computer interfaces. Over two
          years, I studied electronics and coding while creating DIY
          brain-sensing headsets and neuro-interactive games, animations, and
          stories. As the Founder and CEO of OpenBCI, a company dedicated to
          open-source innovation of human-computer interface technologies, I
          have overseen the design and distribution of more than 40,000
          neuroscience tools across over 100 countries. I have led the
          development of numerous products, including the Cyton and Ganglion,
          which have been featured in major media outlets such as Bloomberg,
          Scientific American, and Wired. In 2018, I was recognized in Forbes 30
          Under 30 – Science.
        </p>
      </div>

      <Timeline />

      <div className="flex flex-col md:flex-row justify-center md:items-start items-center gap-10">
        <Interests />
        <Publications />
      </div>
    </div>
  );
}

export default About;
