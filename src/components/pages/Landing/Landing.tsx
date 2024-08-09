"use client";

import React, { useState, useEffect } from "react";
import MyTypeWriter from "../../ui/MyTypeWriter";
import styles from "./Landing.module.css"; // Ensure this path is correct
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { ImagesSlider } from "@/components/ui/HeroBg";
import { motion } from "framer-motion";

const backgrounds = [
  "/images/akpos_1.jpeg",
  "/images/akpos_2.jpeg",
  "/images/akpos_3.jpeg",
];

function Home() {
  return (
    <ImagesSlider className="h-[40rem]" images={backgrounds}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-2xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <MyTypeWriter />
        </motion.p>
        <div className="mt-5 flex gap-5 justify-center">
          <div className="rounded-2xl backdrop-blur-md bg-gray-300/30 p-2">
            <FiTwitter size={30} color="#1e3a8a" />
          </div>
          <div className="rounded-2xl  backdrop-blur-md bg-gray-300/30 p-2">
            <FaInstagram size={30} color="#1e3a8a" />
          </div>
          <div className="rounded-2xl backdrop-blur-md bg-blue bg-gray-300/30 p-2">
            <FaWhatsapp size={30} color="#1e3a8a" />
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}

export default Home;
