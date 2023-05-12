import { Invader } from "components/invader/Invader";
import { Hero } from "./Hero";

export const HeroSection = () => {
  return (
    <div className="w-full h-screen px-4 lg:px-24 flex flex-col items-center">
      <div className="w-full h-1/3 flex items-center justify-center">
        <Invader />
      </div>
      <div className="w-full h-2/3">
        <Hero />
      </div>
    </div>
  );
};
