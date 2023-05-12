import { Roboto_Mono } from "next/font/google";
import { FavoriteTechnologies } from "./FavoriteTechnologies";
const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

export const AboutMeText = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-2">
      <p className={`${robotoMono.className} text-l lg:text-l text-slate-300`}>
        Meet me, a full stack developer who found my passion for programming
        through my love for building games. I&apos;ve been honing my skills
        since 2013 when I built a 9GAG clone with a friend, and have since
        become a creative problem solver in all aspects of code.
      </p>
      <p className={`${robotoMono.className} text-l lg:text-l text-slate-300`}>
        As a president and founder of a non-profit organization dedicated to
        teaching people how to code, web design, and use digital technologies,
        I&apos;m committed to sharing my knowledge and skills.
      </p>
      <p className={`${robotoMono.className} text-l lg:text-l text-slate-300`}>
        When I&apos;m not coding, you&apos;ll find me snowboarding, cooking,
        reading, or playing board and video games.
      </p>
      <FavoriteTechnologies />
    </div>
  );
};
