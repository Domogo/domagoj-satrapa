"use client";

import { InvaderWhite } from "components/invader/InvaderWhite";
import { SectionHeader } from "components/shared/SectionHeader";
import { Roboto_Mono } from "next/font/google";
import { useState } from "react";

// Lead Engineer Tapija
// President TCP
// Lead Engineer Enmaga
// Software Engineer Infobip
// Associate Engineer iOLAP

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

type Experience = "Tapija" | "TCP" | "Enmaga" | "Infobip" | "iOLAP";
const experienceList: Experience[] = [
  "Tapija",
  "TCP",
  "Enmaga",
  "Infobip",
  "iOLAP",
];

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>("Tapija");

  const translateAmount = experienceList.indexOf(selectedExperience) * 20;

  return (
    <div className="w-full h-screen px-4 lg:px-24">
      <div className="flex flex-col gap-2">
        <SectionHeader text="Where I've worked" />

        <div className="flex flex-col md:w-1/2 lg:w-1/2 mt-4">
          <div className="w-full">
            <div
              className="ease-in-out duration-300"
              style={{ transform: `translateX(${translateAmount}%)` }}
            >
              <div className="flex w-[20%] justify-center">
                <InvaderWhite />
              </div>
            </div>
          </div>

          <div
            className={`flex gap-1 text-slate-300 ${robotoMono.className} text-l lg:text-xl`}
          >
            {experienceList.map((e) => (
              <div
                className={`${
                  selectedExperience === e ? "text-aqua" : ""
                } cursor-pointer w-[20%] text-center`}
                onClick={() => setSelectedExperience(e)}
                key={e}
                id={e}
              >
                <p>{e}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
