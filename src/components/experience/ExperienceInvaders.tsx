import { CustomizableInvader } from "components/shared/CustomizableInvader";

export const ExperienceInvaders = () => {
  const invaders = [];

  let deg = 90;
  for (let i = 0; i < 18; i++) {
    invaders.push(
      <CustomizableInvader key={i} deg={deg} isBlue={i % 4 === 0} />
    );
    deg += 90;
  }

  return <div className="grid grid-cols-6">{invaders}</div>;
};
