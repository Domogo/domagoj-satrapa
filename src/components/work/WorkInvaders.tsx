import { CustomizableInvader } from "components/shared/CustomizableInvader";

export const WorkInvaders = () => {
  const invaders = [];

  let deg = 0;
  for (let i = 0; i < 18; i++) {
    invaders.push(
      <CustomizableInvader
        key={i}
        deg={deg}
        isBlue={[2, 8, 9, 14].includes(i)}
      />
    );
    deg += 90;
  }

  return <div className="grid grid-cols-6">{invaders}</div>;
};
