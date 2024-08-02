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
          title: "May 1940",
          cardTitle: "Dunkirk",
          url: "http://google.com",
          cardSubtitle:
            "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
          cardDetailedText: `On 10 May 1940, Hitler began his longd capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`,
        },
        {
          title: "25 July 1940",
          cardTitle: "The Battle of Britain",
          cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
          cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfieldscane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`,
        },
        {
          title: "June 1941",
          cardTitle: "Operation Barbarossa",
          cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
          cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after theoviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
        },
      ]}
    />
  );
};

export default Timeline;
