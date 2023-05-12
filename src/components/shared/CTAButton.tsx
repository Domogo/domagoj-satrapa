import { Oswald } from "next/font/google";
import { FC } from "react";

const oswald = Oswald({ subsets: ["latin"] });

export const CTAButton: FC<{ url: string; text: string }> = ({ url, text }) => {
  return (
    <a
      href={url}
      className={`w-fit uppercase ${oswald.className} cursor-pointer mt-2 text-aqua border border-aqua p-2`}
    >
      {text}
    </a>
  );
};
