import React from "react";
import {
  GiMaterialsScience,
  GiArtificialIntelligence,
  GiHumanPyramid,
} from "react-icons/gi";
import { FaCode, FaMusic, FaBrain } from "react-icons/fa";

function Interests() {
  const interests = [
    { icon: <GiMaterialsScience size={30} />, label: "Science" },
    { icon: <GiArtificialIntelligence size={30} />, label: "AI & Robotics" },
    { icon: <FaCode size={30} />, label: "Coding" },
    { icon: <FaMusic size={30} />, label: "Music" },
    { icon: <FaBrain size={30} />, label: "Neuroscience" },
    { icon: <GiHumanPyramid size={30} />, label: "Team Sports" },
  ];

  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold p-4">Interests</h2>
      <div className="flex gap-5 items-center justify-center flex-wrap">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {interest.icon}
            <span className="mt-2 text-xl font-medium">{interest.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;
