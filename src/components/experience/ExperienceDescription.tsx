import { FTButton } from "components/about/FTButton";
import { Oswald, Press_Start_2P, Roboto_Mono } from "next/font/google";
import { FC } from "react";
import { Experience } from "./Experience";

const oswald = Oswald({ subsets: ["latin"] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

const experienceLinks: { [key in Experience]: string } = {
  Tapija: "https://www.tapija.com/",
  Infobip: "https://www.infobip.com/",
  iOLAP: "https://www.iolap.com/",
  tcp: "https://www.tcp.hr/",
};

const experiencePosition: { [key in Experience]: string } = {
  Tapija: "Software Engineer, Founder",
  Infobip: "Software Engineer",
  iOLAP: "Associate Engineer",
  tcp: "President",
};

const experienceDate: { [key in Experience]: string } = {
  Tapija: "Oct. 2021 - Present (Previously Enmaga)",
  Infobip: "Feb. 2020 - Oct. 2021",
  iOLAP: "Feb 2019 - Nov. 2019",
  tcp: "Sep. 2022 - Present",
};

// Building and managing teams, architecting software systems,
//  running a mix of cloud and on-prem infrastructure, and developing
//   web and mobile apps for startups, established companies,
//    and non-profits throughout Europe and the US

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
          @
          <FTButton url={experienceLinks[company]} name={company} />
        </span>
      </div>
      <div>
        <p className={`text-slate-300 ${robotoMono.className} text-xs`}>
          {experienceDate[company]}
        </p>
      </div>
      <p className={`text-slate-300 ${robotoMono.className}`}>AAAAAAAAAAAA</p>
    </div>
  );
};
