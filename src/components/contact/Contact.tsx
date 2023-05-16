import { Invader } from "components/invader/Invader";
import { InvaderWhite } from "components/invader/InvaderWhite";
import { CTAButton } from "components/shared/CTAButton";
import { CustomizableInvader } from "components/shared/CustomizableInvader";
import { GitHubButton } from "components/shared/GitHubButton";
import { LinkedInButton } from "components/shared/LinkedInButton";
import { SectionHeader } from "components/shared/SectionHeader";
import { Press_Start_2P, Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen px-4 lg:px-24">
      <div className="flex flex-col gap-4">
        <SectionHeader text="Contact" />

        <div className="flex flex-col gap-4">
          <div className="mt-2">
            <p
              className={`${pressStart.className} text-l md:text-2xl text-aqua lg:text-3xl`}
            >
              SAY HELLO!
            </p>
          </div>

          <div className="flex flex-col gap-1 lg:w-2/3">
            <p
              className={`${robotoMono.className} text-l lg:text-l text-slate-300`}
            >
              I am open to new opportunities and inquiries.
            </p>
            <p
              className={`${robotoMono.className} text-l lg:text-l text-slate-300`}
            >
              If you have a project in mind, require assistance with web
              development, or wish to explore potential collaborations, please
              don&apos;t hesitate to contact me.
            </p>
            <p
              className={`${robotoMono.className} text-l lg:text-l text-slate-300`}
            >
              You can reach me directly via email, and I am open to discussing
              various possibilities. I look forward to hearing from you and
              exploring how we can work together to achieve your goals.
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <CustomizableInvader deg={0} />
            <LinkedInButton />
            <CTAButton
              url="mailto:domagoj@tapija.com"
              text="domagoj@tapija.com"
            />
            <CustomizableInvader deg={180} isBlue />
          </div>
        </div>
      </div>
    </div>
  );
};
