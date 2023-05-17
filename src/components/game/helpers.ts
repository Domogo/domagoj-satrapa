import { Dispatch, SetStateAction } from "react";
import p5Types from "p5";
import { nanoid } from "nanoid";

export const X_KEY = 88;
export const NIGHT_COLOR = "#131313";

export const shipWidth = (screenWidth: number) => screenWidth / 80;
export const shipHeight = (screenWidth: number) => screenWidth / 40;
export const SHIP_SPEED = 5;
export const SHIP_SPEED_MOBILE = 3;
export const shipHorizonLine = (screenWidth: number) => screenWidth / 20;

export const BULLET_SIZE = 5;
export const BULLET_SPEED = 5;

export const invaderHeight = (screenWidth: number) => screenWidth / 20;
export const invaderWidth = (screenWidth: number) => screenWidth / 16;
export const invaderSpacing = (screenWidth: number) => screenWidth / 80;
export const INVADERS_PER_ROW = 6;
export const INVADER_ROWS = 3;
export const INVADER_SPEED = 2;
export const INVADER_SPEED_MOBILE = 1;

export const drawShip = (p5: p5Types, shipX: number, screenWidth: number) => {
  p5.noStroke();
  p5.fill(255);
  p5.rectMode(p5.CENTER);
  p5.rect(
    shipX,
    p5.height - shipHorizonLine(screenWidth),
    shipWidth(screenWidth),
    shipHeight(screenWidth)
  );
};

export const moveShip = (
  shipX: number,
  shipDirection: number,
  screenWidth: number,
  setShipX: Dispatch<SetStateAction<number>>
) => {
  if (shipX <= 0 + shipWidth(screenWidth) && shipDirection === -1) {
    return;
  }
  if (shipX >= screenWidth - shipWidth(screenWidth) && shipDirection === 1) {
    return;
  }
  const speed = screenWidth >= 800 ? SHIP_SPEED : SHIP_SPEED_MOBILE;
  setShipX(shipX + speed * shipDirection);
};

export const checkShipCollision = (
  shipY: number,
  invaders: InvaderSprite[],
  screenWidth: number,
  pauseGame: () => void
) => {
  const collision = invaders.some((invader) => {
    return invader.y + invaderHeight(screenWidth) >= shipY;
  });

  if (collision) {
    pauseGame();
  }
};

export const drawInvader = (
  p5: p5Types,
  x: number,
  y: number,
  invader: p5Types.Image,
  screenWidth: number
) => {
  p5.image(
    invader,
    x,
    y,
    invaderWidth(screenWidth),
    invaderHeight(screenWidth)
  );
};

export const moveInvaders = (
  invaders: InvaderSprite[],
  invaderDirection: number,
  screenWidth: number,
  setInvaders: Dispatch<SetStateAction<InvaderSprite[]>>,
  setInvaderDirection: Dispatch<SetStateAction<number>>
) => {
  let shift = false;
  invaders.map((invader) => {
    if (invader.x >= screenWidth - invaderWidth(screenWidth)) {
      setInvaderDirection(-1);
      shift = true;
    }
    if (invader.x < 0) {
      setInvaderDirection(1);
      shift = true;
    }
  });

  const speed = screenWidth >= 800 ? INVADER_SPEED : INVADER_SPEED_MOBILE;
  const newInvaders = invaders.map((invader) => {
    return {
      ...invader,
      x: invader.x + speed * invaderDirection,
      y: shift ? invader.y + invaderHeight(screenWidth) / 2 : invader.y,
    };
  });

  setInvaders(newInvaders);
};

export const drawBullet = (p5: p5Types, x: number, y: number) => {
  p5.noStroke();
  p5.fill(255);
  p5.rect(x, y, BULLET_SIZE, BULLET_SIZE);
};

export const moveBullet = (
  bullet: Bullet,
  setBullets: Dispatch<SetStateAction<Bullet[]>>
) => {
  const newY = bullet.y - BULLET_SPEED;
  const newBullet = { ...bullet, y: newY };

  // if bullet is off screen, remove it
  if (newY < 0) {
    setBullets((bullets) => bullets.filter((b) => b.id !== bullet.id));
    return;
  }

  // replace bullet with new bullet
  setBullets((bullets) => {
    const bulletIndex = bullets.findIndex((b) => b.id === bullet.id);
    const newBullets = [...bullets];
    newBullets[bulletIndex] = newBullet;
    return newBullets;
  });
};

export const checkCollision = (
  bullet: Bullet,
  invaders: InvaderSprite[],
  screenWidth: number,
  setInvaders: Dispatch<SetStateAction<InvaderSprite[]>>,
  setBullets: Dispatch<SetStateAction<Bullet[]>>,
  setScore: Dispatch<SetStateAction<number>>
) => {
  invaders.forEach((invader) => {
    // check if bullet is within x range of invader
    const bulletIsWithinXRange =
      bullet.x >= invader.x &&
      bullet.x <= invader.x + invaderWidth(screenWidth);

    // check if bullet is within y range of invader
    const bulletIsWithinYRange =
      bullet.y >= invader.y &&
      bullet.y <= invader.y + invaderHeight(screenWidth);

    // if both are true, then we have a collision
    if (bulletIsWithinXRange && bulletIsWithinYRange) {
      // remove bullet
      setBullets((bullets) => bullets.filter((b) => b.id !== bullet.id));

      // if blue, turn white
      if (invader.isBlue) {
        setInvaders((invaders) =>
          invaders.map((i) => {
            if (i.id === invader.id) {
              return { ...i, isBlue: false };
            }
            return i;
          })
        );
      } else {
        // remove invader
        setInvaders((invaders) => invaders.filter((i) => i.id !== invader.id));
        setScore((score) => score + 1);
      }
    }
  });
};

export const initializeInvaders = (screenWidth: number) => {
  const initialInvaders: InvaderSprite[] = [];
  for (let j = 0; j < INVADER_ROWS; j++) {
    for (let i = 0; i < INVADERS_PER_ROW; i++) {
      initialInvaders.push({
        id: nanoid(),
        x: i * (invaderWidth(screenWidth) + invaderSpacing(screenWidth)),
        y: j * (invaderHeight(screenWidth) + invaderSpacing(screenWidth)) + 60,
        isBlue: j === 0,
      });
    }
  }

  return initialInvaders;
};

export type InvaderSprite = {
  id: string;
  x: number;
  y: number;
  isBlue: boolean;
};

export type Bullet = {
  id: string;
  x: number;
  y: number;
};
