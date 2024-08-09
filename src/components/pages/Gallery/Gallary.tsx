import React from "react";
import ImageGallary from "@/components/ui/ImageGallary";
import { Button } from "@/components/ui/MovingBorder";
// import styles from "@/components/pages/Gallery/Gallery.module.css";

// Ensure this path is correct

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
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLInputElement
            ).showModal()
          }
        >
          Buy me a Coffee
        </Button>
        {/* <button className="btn glass">Glass button</button> */}
      </center>
      <ImageGallary images={imageList} />
      {/* The button to open modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Gallary;
