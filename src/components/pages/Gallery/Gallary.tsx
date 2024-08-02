import React from "react";
import ImageGallary from "@/components/ui/ImageGallary";
import { Button } from "@/components/ui/MovingBorder";

const imageList = [
  "/images/akpos_1.jpeg",
  "/images/akpos_2.jpeg",
  "/images/akpos_3.jpeg",
  "/images/akpos_4.jpeg",
  "/images/akpos_5.jpeg",
  "/images/akpos_6.jpeg",
  "/images/akpos_7.jpeg",
  "/images/akpos_8.jpeg",
  "/images/akpos_9.jpeg",
  "/images/akpos_10.jpeg",
  "/images/akpos_11.jpeg",
  "/images/akpos_12.jpeg",
  "/images/akpos_13.jpeg",
  "/images/akpos_14.jpeg",
];
const Gallary = () => {
  return (
    <div className="flex flex-col h-screen">
      <center className="m-3">
        {" "}
        <Button
          borderRadius="1.75rem"
          className="btn glass text-blue-50 hover:text-black dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Buy me a Coffee
        </Button>
        {/* <button className="btn glass">Glass button</button> */}
      </center>
      <ImageGallary images={imageList} />
    </div>
  );
};

export default Gallary;
