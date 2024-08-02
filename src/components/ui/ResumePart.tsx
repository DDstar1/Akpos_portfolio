"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ResumePart = () => {
  return (
    <div className="flex max-w-4xl mx-auto my-2 bg-white text-gray-800">
      <div className="bg-amber-900 p-3 text-white">
        <Fade cascade>
          <section className="mb-6">
            <h1 className="text-xl font-semibold mb-2 text-blue-600">
              Contact
            </h1>
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
          <section>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              Top Skills
            </h2>
            <ul className="list-disc pl-5">
              <li>Analytical Skills</li>
              <li>Robotics</li>
              <li>Neuroscience</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              Languages
            </h2>
            <ul className="list-disc pl-5">
              <li>Chinese (Mandarin) (Elementary)</li>
              <li>English (Native or Bilingual)</li>
              <li>Russian (Elementary)</li>
              <li>French (Elementary)</li>
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              Certifications
            </h2>
            <ul className="list-disc pl-5">
              <li>Health Safety and Environment(HSE) Level 3</li>
              <li>Health Safety and Environment(HSE) Level 2</li>
              <li>Basic First Aid/CPR</li>
              <li>Health Safety and Environment(HSE) Level 1</li>
              <li>Level 1 Program</li>
            </ul>
          </section>
          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-600">
              Honors-Awards
            </h2>
            <ul className="list-disc pl-5">
              <li>OpenBCI Discovery Program Awardee</li>
              <li>Best in Science</li>
              <li>Lapo Quiz Regional Finalist</li>
            </ul>
          </section>
        </Fade>
      </div>

      <div className="p-3">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            Aminone Alexander
          </h1>
          <p className="text-lg">
            B.Eng Mechatronics Engineering || Robotics and Embedded Systems
          </p>
          <p className="text-gray-600">Lagos, Lagos State, Nigeria</p>
        </header>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
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
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-600">{job.period}</p>
                <p className="text-gray-600">{job.location}</p>
              </div>
            ))}
          </Fade>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">
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
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{edu.school}</h3>
                <p>{edu.degree}</p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            ))}
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default ResumePart;
