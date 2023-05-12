import { Roboto_Mono } from "next/font/google";
import { FC } from "react";

const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });

export const CTAButton: FC<{ url: string; text: string }> = ({ url, text }) => {
  return (
    <a
      href={url}
      className={`w-fit uppercase ${robotoMono.className} cursor-pointer mt-2 text-aqua border border-aqua p-2`}
    >
      {text}
    </a>
  );
};
