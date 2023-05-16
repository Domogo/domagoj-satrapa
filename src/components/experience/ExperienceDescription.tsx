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
  Tapija: "(Previously Enmaga) Oct. 2021 - Present",
  Infobip: "Feb. 2020 - Oct. 2021",
  iOLAP: "Feb 2019 - Nov. 2019",
  tcp: "Sep. 2022 - Present",
};

const experienceBullets: { [key in Experience]: string[] } = {
  Tapija: [
    "Provide leadership within the engineering department through close collaboration, knowledge shares, and mentorship",
    "Architect and develop web apps for startups, established companies and non-profits throughout Europe and the US",
    "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
  ],
  Infobip: [
    "Conduct interviews, onboard, and provide mentorship to new team members",
    "Design, develop, and maintain high-throughput backend microservices and APIs and lead the development of multiple web applications.",
    "Monitor and ensure the smooth functioning of several hundred VMs on which our services are deployed",
    "Managed the software development process as the SCRUM Master in an agile environment",
  ],
  iOLAP: [
    "Developed and maintained a web application for a US-based client focused on tax and accounting automation",
    "Integrated with multiple third-party Point of Sale APIs to provide a seamless experience for the end-user",
  ],
  tcp: [
    "Founded a non-profit organization dedicated to teaching people how to code, web design, and use digital technologies",
    "Developed numerous landing pages for non-profit organizations in the area",
    "Oversaw a team of six individuals and successfully organized and executed tens of workshops and events.",
  ],
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
          @
          <FTButton url={experienceLinks[company]} name={company} />
        </span>
      </div>
      <div>
        <p className={`text-slate-300 ${robotoMono.className} text-xs`}>
          {experienceDate[company]}
        </p>
      </div>
      <div
        className={`mt-2 flex flex-col gap-2 text-slate-300 ${robotoMono.className}`}
      >
        {experienceBullets[company].map((b) => (
          <p key={b}>{b}</p>
        ))}
      </div>
    </div>
  );
};
