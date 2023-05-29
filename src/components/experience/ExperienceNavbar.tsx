import { InvaderWhite } from "components/invader/InvaderWhite";
import { Experience } from "./Experience";
import { Roboto_Mono } from "next/font/google";
import { FC } from "react";

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

const experienceList: Experience[] = ["Tapija", "Infobip", "iOLAP", "tcp"];

export const ExperienceNavbar: FC<{
  selectedExperience: Experience;
  setSelectedExperience: (e: Experience) => void;
}> = ({ selectedExperience, setSelectedExperience }) => {
  const translateAmount = experienceList.indexOf(selectedExperience) * 25;
  return (
    <div className="flex flex-col w-full mt-4">
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
        className={`flex gap-2 text-slate-300 ${robotoMono.className} text-md lg:text-xl `}
      >
        {experienceList.map((e) => (
          <div
            className={`${
              selectedExperience === e ? "text-aqua" : ""
            } w-[25%] text-center`}
            onClick={() => setSelectedExperience(e)}
            key={e}
            id={e}
          >
            <p className="cursor-pointer">{e}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
