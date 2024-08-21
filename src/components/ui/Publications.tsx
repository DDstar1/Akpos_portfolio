import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import {
  FaBrain,
  FaRobot,
  FaMicroscope,
  FaLaptopCode,
  FaGlobe,
} from "react-icons/fa";

function Publications() {
  const publications = [
    {
      title: "Neural Interfaces and Cognitive Enhancement",
      icon: <FaBrain size={30} />,
      description:
        "A comprehensive guide on the integration of neural interfaces for cognitive enhancement, exploring the latest advancements and future possibilities.",
      year: 2022,
    },
    {
      title: "Advances in Robotic Prosthetics",
      icon: <FaRobot size={30} />,
      description:
        "An in-depth exploration of the cutting-edge technologies in robotic prosthetics and their impact on human mobility and rehabilitation.",
      year: 2020,
    },
    {
      title: "Microscopic Innovations in Neuroscience",
      icon: <FaMicroscope size={30} />,
      description:
        "A look at the groundbreaking microscopic technologies revolutionizing neuroscience, from brain imaging to neural mapping.",
      year: 2021,
    },
    {
      title: "AI in Biomedical Engineering",
      icon: <FaLaptopCode size={30} />,
      description:
        "An exploration of the role of artificial intelligence in the development of biomedical engineering solutions, focusing on AI-driven diagnostics and treatment.",
      year: 2023,
    },
  ];

  return (
    <div className="mt-5 flex flex-col justify-center items-center">
      <h2 className="p-4 text-2xl font-semibold">Publications</h2>
      <div className="flex gap-5 items-center justify-center flex-wrap">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="flex flex-col min-w-72 items-center justify-center basis-1/4 p-4 m-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            {pub.icon}
            <h3 className="mt-4 text-xl font-medium text-center">
              {pub.title}
            </h3>
            <p className="mt-2 text-center text-gray-600 ">{pub.description}</p>
            <span className="mt-2 text-sm text-gray-500 ">
              Published: {pub.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
