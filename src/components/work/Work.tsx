import { SectionHeader } from "components/shared/SectionHeader";
import { WorkProjects } from "./WorkProjects";
import { WorkInvaders } from "./WorkInvaders";

export const Work = () => {
  return (
    <div className="w-full min-h-screen text-white px-4 lg:px-24">
      <SectionHeader text="Some noteworthy projects" />

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <WorkProjects />
        <WorkInvaders />
      </div>
    </div>
  );
};
