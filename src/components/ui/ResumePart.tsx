"use client";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ResumePart = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col md:max-w-4xl max-w-[90vw] mx-auto items-center my-6">
      <div
        className={`flex flex-col md:flex-row transition-all duration-1000 bg-white shadow-lg rounded-lg overflow-hidden w-full ${
          isExpanded ? "max-h-[5000px]" : "max-h-[70vh]"
        }`}
      >
        {/* Left Section */}
        <div className="p-6 flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-blue-700">
              Aminone Alexander
            </h1>
            <p className="text-lg mt-2">
              B.Eng Mechatronics Engineering || Robotics and Embedded Systems
            </p>
            <p className="text-gray-500 mt-1">Lagos, Lagos State, Nigeria</p>
          </header>

          {/* Contact for Mobile */}
          <section className="mb-8 block md:hidden">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Contact
            </h2>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/aminone-alexander-6876671b3"
                className="text-blue-500 hover:underline"
              >
                www.linkedin.com/in/aminone-alexander-6876671b3
              </a>
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Experience
            </h2>
            <Fade cascade>
              {[
                {
                  title: "Avionics Engineering Intern",
                  company: "Aero Contractors of Nigeria Ltd",
                  period: "March 2023 - September 2023 (7 months)",
                  location: "Lagos State, Nigeria",
                },
                {
                  title: "Electrical Engineering Intern",
                  company: "Petroleum Training Institute Nigeria",
                  period: "June 2022 - August 2022 (3 months)",
                  location: "Delta State, Nigeria",
                },
                {
                  title: "Mechanical Engineering Intern",
                  company: "Petroleum Training Institute Nigeria",
                  period: "June 2021 - August 2021 (3 months)",
                  location: "Delta State, Nigeria",
                },
              ].map((job, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-gray-600">{job.period}</p>
                  <p className="text-gray-600">{job.location}</p>
                </div>
              ))}
            </Fade>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">
              Education
            </h2>
            <Fade cascade>
              {[
                {
                  school: "Afe Babalola University",
                  degree:
                    "Bachelor of Engineering - BE, Mechatronics, Robotics, and Automation Engineering",
                  period: "August 2019 - June 2024",
                },
                {
                  school: "Lumen Christi International High School",
                  degree: "SSCE || WASSCE",
                  period: "September 2013 - July 2019",
                },
              ].map((edu, index) => (
                <div key={index} className="mb-6">
                  <h3 className="font-semibold text-lg">{edu.school}</h3>
                  <p className="text-gray-600">{edu.degree}</p>
                  <p className="text-gray-600">{edu.period}</p>
                </div>
              ))}
            </Fade>
          </section>
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-br from-amber-600 to-amber-900 p-6 text-white flex-1">
          <Fade cascade>
            {/* Contact for Desktop */}
            <section className="mb-8 hidden md:block">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                Contact
              </h2>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/aminone-alexander-6876671b3"
                  className="text-blue-200 hover:underline"
                >
                  www.linkedin.com/in/aminone-alexander-6876671b3
                </a>
              </p>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                Top Skills
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analytical Skills</li>
                <li>Robotics</li>
                <li>Neuroscience</li>
              </ul>
            </section>

            {/* Languages Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                Languages
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Chinese (Mandarin) (Elementary)</li>
                <li>English (Native or Bilingual)</li>
                <li>Russian (Elementary)</li>
                <li>French (Elementary)</li>
              </ul>
            </section>

            {/* Certifications Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                Certifications
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Health Safety and Environment (HSE) Level 3</li>
                <li>Health Safety and Environment (HSE) Level 2</li>
                <li>Basic First Aid/CPR</li>
                <li>Health Safety and Environment (HSE) Level 1</li>
                <li>Level 1 Program</li>
              </ul>
            </section>

            {/* Honors and Awards Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300">
                Honors & Awards
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>OpenBCI Discovery Program Awardee</li>
                <li>Best in Science</li>
                <li>Lapo Quiz Regional Finalist</li>
              </ul>
            </section>
          </Fade>
        </div>
      </div>

      <button
        onClick={toggleExpand}
        className="bg-blue-600 bg-opacity-70 mt-4 text-white py-3 w-full max-w-[90vw] rounded hover:bg-blue-700 transition-all duration-300"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ResumePart;
