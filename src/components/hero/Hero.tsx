import Image from "next/image";
import { CTAButton } from "../shared/CTAButton";
import styles from "./Hero.module.css";
import { Press_Start_2P, Oswald, Roboto_Mono } from "next/font/google";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

const name = "DOMAGOJ SATRAPA.";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className={`${robotoMono.className} text-l text-slate-300`}>
        Hi, my name is
      </p>
      <div>
        <h1
          className={`${styles.glitchEffect} ${pressStart.className} text-xl md:text-4xl text-aqua lg:text-6xl`}
          title={name}
        >
          {name}
        </h1>
        <h2
          className={`${oswald.className} text-3xl lg:text-5xl text-slate-300`}
        >
          I build digital experiences.
        </h2>
      </div>

      <div className="w-full lg:w-1/2">
        <p
          className={`${robotoMono.className} text-l lg:text-l text-slate-300`}
        >
          I&apos;m passionate about working on impactful projects that make a
          difference. As a software engineer, I find fulfillment in using my
          skills to create products that matter and have a positive impact on
          society.
        </p>
      </div>

      <div className="flex gap-2">
        <CTAButton url="#contact" text="Get in touch" />
        <CTAButton url="#" text="Resume" />
        <a
          href="https://github.com/Domogo"
          target="_blank"
          rel="noopener noreferrer"
          className={`w-fit uppercase ${robotoMono.className} cursor-pointer mt-2 text-aqua border border-aqua p-2`}
        >
          <div className="w-6 h-6 relative text-aqua">
            <Image src="/github.svg" fill alt="GitHub icon" />
          </div>
        </a>
      </div>
    </div>
  );
};
