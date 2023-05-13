import { FTButton } from "components/about/FTButton";
import { Oswald, Press_Start_2P } from "next/font/google";
import { FC } from "react";
import { Experience } from "./Experience";

const oswald = Oswald({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const experienceLinks: { [key in Experience]: string } = {
  Tapija: "https://www.tapija.com/",
  Infobip: "https://www.infobip.com/",
  iOLAP: "https://www.iolap.com/",
  tcp: "https://www.tcp.hr/",
};

const experiencePosition: { [key in Experience]: string } = {
  Tapija: "Lead Engineer",
  Infobip: "Software Engineer",
  iOLAP: "Associate Engineer",
  tcp: "President",
};

export const ExperienceDescription: FC<{ company: Experience }> = ({
  company,
}) => {
  return (
    <div className="mt-4">
      <div className="flex gap-2 items-center">
        <p className={`${oswald.className} text-2xl text-slate-300`}>
          {experiencePosition[company]}
        </p>
        <span className={`${pressStart.className} text-sm text-aqua`}>
          @{" "}
          {/* <a
          href="https://www.tapija.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tapija
        </a> */}
          <FTButton url={experienceLinks[company]} name={company} />
        </span>
      </div>
      <p className="text-slate-300">AAAAAAAAAAAA</p>
    </div>
  );
};
