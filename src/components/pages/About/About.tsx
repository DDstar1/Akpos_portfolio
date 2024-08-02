import React from "react";

import Timeline from "../../ui/TImeline";
import { AuroraBackground } from "../../ui/AuroraBackground";
import { GiMaterialsScience } from "react-icons/gi";
import Interests from "../../ui/Interest";
import Publications from "../../ui/Publications";

function About() {
  return (
    <div className="mx-auto max-w-[1200px] flex flex-col justify-center align-center ">
      <p className="p-3">
        Bio I became fascinated with the relationship between the human brain &
        mind after suffering concussions playing college football and rugby.
        Upon completing my bachelor’s degree in engineering at Columbia
        University, I pursued an MFA in Design & Technology at Parsons School of
        Design, where I discovered brain-computer interfaces and spent two years
        studying electronics and coding while creating DIY brain-sensing
        headsets and neuro-interactive games, animations, and stories. As the
        Founder and CEO of OpenBCI, a company dedicated to open-source
        innovation of human-computer interface technologies, I have spent the
        past decade overseeing the design and distribution of more than 40,000
        tools for neuroscience to over 100 countries around the world. I’ve led
        the development of numerous products, including the Cyton and Ganglion
        bioseatured in major media outlets such as Bloomberg, Scientific
        American, and Wired. In 2018 I was recognized in Forbes 30 Under 30 –
        Science.
      </p>
      <AuroraBackground>
        <Timeline />
      </AuroraBackground>
      <div className="flex justify-center items-start gap-20">
        <Interests />
        <Publications />
      </div>
    </div>
  );
}

export default About;
