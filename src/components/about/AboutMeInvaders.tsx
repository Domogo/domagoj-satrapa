import { FC } from "react";
import Image from "next/image";

const Invader: FC<{ deg: number; isBlue: boolean }> = ({ deg, isBlue }) => {
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

export const AboutMeInvaders = () => {
  const invaders = [];

  let deg = 0;
  for (let i = 0; i < 18; i++) {
    invaders.push(<Invader deg={deg} isBlue={i == 8} />);
    deg += 90;
  }

  return <div className="grid grid-cols-6">{invaders}</div>;
};
