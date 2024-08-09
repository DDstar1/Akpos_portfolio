import React from "react";
import ImageGallery from "@/components/ui/ImageGallary";
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

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-slate-900 text-center py-6">
      <div className="mb-8">
        <Button
          borderRadius="1.75rem"
          className="btn glass text-blue-50 hover:text-black dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800"
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            ).showModal()
          }
        >
          Buy me a Coffee
        </Button>
      </div>
      <div className="flex-1">
        <ImageGallery images={imageList} />
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Support My Work</h3>
          <p className="py-4">
            Thank you for your support! Press ESC key or click the button below
            to close this dialog.
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-blue-500 hover:bg-blue-700 text-white">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Gallery;
