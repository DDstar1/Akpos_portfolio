// Home.js
"use client";
import React, { useState } from "react";
import NavBar from "@/components/ui/NavBar";
import Landing from "@/components/pages/Landing/Landing";
import About from "@/components/pages/About/About";
import Resume from "@/components/pages/Resume/Resume";
import Gallery from "@/components/pages/Gallery/Gallary";

export default function Home() {
  const [page, setPage] = useState("Landing");
  const [isFlipping, setIsFlipping] = useState(false);

  const handlePageChange = (newPage: any) => {
    setIsFlipping(true);
    setTimeout(() => {
      setPage(newPage);
      setIsFlipping(false);
    }, 500); // Duration of the flip animation
  };

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar setPage={handlePageChange} />
      <div className={`flex-grow relative ${isFlipping ? "animate-flip" : ""}`}>
        {page === "Landing" && <Landing />}
        {page === "About" && <About />}
        {page === "Resume" && <Resume />}
        {page === "Gallery" && <Gallery />}
      </div>
    </main>
  );
}
