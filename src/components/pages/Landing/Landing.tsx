"use client";

import React, { useState, useEffect } from "react";
import MyTypeWriter from "../../ui/MyTypeWriter";
import styles from "./Landing.module.css"; // Ensure this path is correct
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
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
        <motion.p className="font-bold text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          <MyTypeWriter />
        </motion.p>
        <div className="mt-5 flex gap-5 justify-center">
          <FaSquareTwitter size={30} color="grey" />
          <FaSquareInstagram size={30} color="grey" />
          <FaSquareWhatsapp size={30} color="grey" />
        </div>
      </motion.div>
    </ImagesSlider>
  );
}

export default Home;
