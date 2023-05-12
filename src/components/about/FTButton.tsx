import { Press_Start_2P } from "next/font/google";
import { FC } from "react";

const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const FTButton: FC<{ url: string; name: string }> = ({ url, name }) => {
  return (
    <a
      className={`bg-aqua hover:bg-slate-300 text-night p-1 w-fit uppercase ${pressStart.className} cursor-pointer text-[10px]`}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
};
