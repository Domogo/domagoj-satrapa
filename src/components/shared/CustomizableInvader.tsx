import { FC } from "react";
import Image from "next/image";

export const CustomizableInvader: FC<{ deg: number; isBlue: boolean }> = ({
  deg,
  isBlue,
}) => {
  const degStr = `${deg}deg`;
  const imgSrc = isBlue ? "/invader_blue.webp" : "/invader_white.webp";
  return (
    <div className={`relative h-8 w-8 md:h-12 md:w-12 lg:h-20 lg:w-20`}>
      <Image
        className={`object-contain`}
        style={{ transform: `rotate(${degStr})` }}
        fill
        sizes="100%"
        src={imgSrc}
        alt="invader"
      />
    </div>
  );
};
