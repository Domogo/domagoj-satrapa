import { FC } from "react";
import { Oswald } from "next/font/google";
import { InvaderWhite } from "components/invader/InvaderWhite";

const oswald = Oswald({ subsets: ["latin"] });

export const SectionHeader: FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-center gap-2">
      <InvaderWhite />
      <h2 className={`${oswald.className} text-2xl text-aqua`}>{text}</h2>
    </div>
  );
};
