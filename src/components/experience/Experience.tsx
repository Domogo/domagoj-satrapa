"use client";

import { InvaderWhite } from "components/invader/InvaderWhite";
import { SectionHeader } from "components/shared/SectionHeader";
import { Roboto_Mono } from "next/font/google";
import { useState } from "react";
import { ExperienceDescription } from "./ExperienceDescription";

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

export type Experience = "Tapija" | "tcp" | "Infobip" | "iOLAP"; // | "Enmaga";
const experienceList: Experience[] = [
  "Tapija",
  // "Enmaga",
  "Infobip",
  "iOLAP",
  "tcp",
];

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>("Tapija");

  const translateAmount = experienceList.indexOf(selectedExperience) * 25;

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
              <div className="flex w-[25%] justify-center">
                <InvaderWhite />
              </div>
            </div>
          </div>

          <div
            className={`flex gap-2 text-slate-300 ${robotoMono.className} text-l lg:text-xl`}
          >
            {experienceList.map((e) => (
              <div
                className={`${
                  selectedExperience === e ? "text-aqua" : ""
                } cursor-pointer w-[25%] text-center`}
                onClick={() => setSelectedExperience(e)}
                key={e}
                id={e}
              >
                <p>{e}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Descriptions */}
        <ExperienceDescription company={selectedExperience} />
      </div>
    </div>
  );
};
