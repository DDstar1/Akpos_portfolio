"use client";

// import { Chrono } from "react-chrono";
import { Chrono } from "@/lib/react-chrono-client";

const Timeline = () => {
  return (
    <Chrono
      disableToolbar
      mode="VERTICAL_ALTERNATING"
      slideShow
      slideItemDuration={4500}
      slideShowType="reveal"
      //   scrollable={{ scrollbar: true }}
      highlightCardsOnHover
      items={[
        {
          title: "January 2022",
          cardTitle: "Attended Neurotech Innovations Conference",
          cardSubtitle: "International Event on Neurotechnology",
          cardDetailedText: `Attended the Neurotech Innovations Conference, where cutting-edge developments in brain-computer interfaces were showcased. Engaged with leading researchers and industry professionals to discuss future trends and applications of neurotechnology.`,
        },
        {
          title: "March 2023 - September 2023",
          cardTitle: "Avionics Engineering Intern",
          cardSubtitle: "Aero Contractors of Nigeria Ltd",
          cardDetailedText: `Completed a 7-month internship as an Avionics Engineering Intern at Aero Contractors of Nigeria Ltd, where I worked on the maintenance and repair of aircraft electronic systems. Gained hands-on experience in avionics systems and troubleshooting procedures.`,
        },
        {
          title: "June 2022 - August 2022",
          cardTitle: "Electrical Engineering Intern",
          cardSubtitle: "Petroleum Training Institute Nigeria",
          cardDetailedText: `Interned at Petroleum Training Institute Nigeria for 3 months, focusing on electrical systems in the oil and gas sector. Contributed to projects involving electrical maintenance and system upgrades, enhancing practical knowledge in electrical engineering.`,
        },
      ]}
    />
  );
};

export default Timeline;
