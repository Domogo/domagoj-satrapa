import { AboutMeText } from "./AboutMeText";
import { AboutMeInvaders } from "./AboutMeInvaders";
import { SectionHeader } from "components/shared/SectionHeader";

export const About = () => {
  return (
    <div className="w-full h-screen px-4 lg:px-24">
      <div className="flex flex-col gap-4">
        <SectionHeader text="About me" />

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <AboutMeText />
          <AboutMeInvaders />
        </div>
      </div>
    </div>
  );
};
