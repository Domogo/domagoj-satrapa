"use client";
import { SectionHeader } from "components/shared/SectionHeader";
import { ExperienceDescription } from "./ExperienceDescription";
import { ExperienceInvaders } from "./ExperienceInvaders";
import { useState } from "react";
import { ExperienceNavbar } from "./ExperienceNavbar";

export type Experience = "Tapija" | "tcp" | "Infobip" | "iOLAP"; // | "Enmaga";

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>("Tapija");
  return (
    <div className="w-full min-h-screen px-4 lg:px-24">
      <div className="flex flex-col gap-2">
        <SectionHeader text="Where I've worked" />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="lg:w-1/2">
            <ExperienceNavbar
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
            />
            <ExperienceDescription company={selectedExperience} />
          </div>
          <ExperienceInvaders />
        </div>
      </div>
    </div>
  );
};
