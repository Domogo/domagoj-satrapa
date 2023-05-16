import { CustomizableInvader } from "components/shared/CustomizableInvader";

export const AboutMeInvaders = () => {
  const invaders = [];

  let deg = 0;
  for (let i = 0; i < 18; i++) {
    invaders.push(<CustomizableInvader key={i} deg={deg} isBlue={i == 8} />);
    deg += 90;
  }

  return <div className="grid grid-cols-6">{invaders}</div>;
};
