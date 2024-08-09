"use client";

import React from "react";
import MyTypeWriter from "../../ui/MyTypeWriter";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { FaLinkedin, FaEnvelope } from "react-icons/fa6";
import { ImagesSlider } from "@/components/ui/HeroBg";
import { motion } from "framer-motion";
import Link from "next/link";

const backgrounds = [
  "/images/akpos_1.jpeg",
  "/images/akpos_2.jpeg",
  "/images/akpos_3.jpeg",
];

function Home() {
  return (
    <ImagesSlider className="h-[40rem]" images={backgrounds}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="z-50 flex flex-col justify-center items-center text-center space-y-6"
      >
        <motion.p className="font-extrabold text-3xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 py-4">
          <MyTypeWriter />
        </motion.p>
        <div className="mt-8 flex gap-6 justify-center">
          {[
            {
              icon: <FiGithub />,
              href: "https://github.com/Xanderee12",
              color: "#171515",
            },
            {
              icon: <FiTwitter />,
              href: "https://x.com/XanderLi12",
              color: "#1DA1F2",
            },

            {
              icon: <FaLinkedin />,
              href: "https://www.linkedin.com/in/aminone-alexander-6876671b3",
              color: "#0077B5",
            },
            {
              icon: <FaEnvelope />,
              href: "mailto:aminonelex@gmail.com",
              color: "#D44638",
            },
          ].map(({ icon, href, color }, index) => (
            <Link
              key={index}
              href={href}
              className="rounded-2xl backdrop-blur-md bg-gray-300/30 p-3 hover:scale-105 transition-transform duration-300"
              target="_blank"
              style={{ color }}
            >
              {React.cloneElement(icon, { size: 30 })}
            </Link>
          ))}
        </div>
      </motion.div>
    </ImagesSlider>
  );
}

export default Home;
