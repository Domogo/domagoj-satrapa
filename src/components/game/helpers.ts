import { Dispatch, SetStateAction } from "react";
import p5Types from "p5";
import { nanoid } from "nanoid";

export const X_KEY = 88;
export const NIGHT_COLOR = "#131313";

export const SHIP_WIDTH = 10;
export const SHIP_HEIGHT = 20;
export const SHIP_SPEED = 5;
export const SHIP_HORIZON_LINE = 40;

export const BULLET_SIZE = 5;
export const BULLET_SPEED = 5;

export const INVADER_HEIGHT = 40;
export const INVADER_WIDTH = 50;
export const INVADER_SPACING = 10;
export const INVADERS_PER_ROW = 6;
export const INVADER_ROWS = 3;
export const INVADER_SPEED = 2;

export const drawShip = (p5: p5Types, shipX: number) => {
  p5.noStroke();
  p5.fill(255);
  p5.rectMode(p5.CENTER);
  p5.rect(shipX, p5.height - SHIP_HORIZON_LINE, SHIP_WIDTH, SHIP_HEIGHT);
};

export const moveShip = (
  shipX: number,
  shipDirection: number,
  setShipX: Dispatch<SetStateAction<number>>
) => {
  if (shipX <= 0 + SHIP_WIDTH && shipDirection === -1) {
    return;
  }
  if (shipX >= 800 - SHIP_WIDTH && shipDirection === 1) {
    return;
  }
  setShipX(shipX + SHIP_SPEED * shipDirection);
};

export const checkShipCollision = (
  shipY: number,
  invaders: InvaderSprite[],
  pauseGame: () => void
) => {
  const collision = invaders.some((invader) => {
    return invader.y + INVADER_HEIGHT >= shipY;
  });

  if (collision) {
    pauseGame();
  }
};

export const drawInvader = (
  p5: p5Types,
  x: number,
  y: number,
  invader: p5Types.Image
) => {
  p5.image(invader, x, y, INVADER_WIDTH, INVADER_HEIGHT);
};

export const moveInvaders = (
  invaders: InvaderSprite[],
  invaderDirection: number,
  setInvaders: Dispatch<SetStateAction<InvaderSprite[]>>,
  setInvaderDirection: Dispatch<SetStateAction<number>>
) => {
  let shift = false;
  invaders.map((invader) => {
    if (invader.x >= 800 - INVADER_WIDTH) {
      setInvaderDirection(-1);
      shift = true;
    }
    if (invader.x < 0) {
      setInvaderDirection(1);
      shift = true;
    }
  });

  const newInvaders = invaders.map((invader) => {
    return {
      ...invader,
      x: invader.x + INVADER_SPEED * invaderDirection,
      y: shift ? invader.y + INVADER_HEIGHT : invader.y,
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
  setInvaders: Dispatch<SetStateAction<InvaderSprite[]>>,
  setBullets: Dispatch<SetStateAction<Bullet[]>>
) => {
  invaders.forEach((invader) => {
    // check if bullet is within x range of invader
    const bulletIsWithinXRange =
      bullet.x >= invader.x && bullet.x <= invader.x + INVADER_WIDTH;

    // check if bullet is within y range of invader
    const bulletIsWithinYRange =
      bullet.y >= invader.y && bullet.y <= invader.y + INVADER_HEIGHT;

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
      }
    }
  });
};

export const initializeInvaders = () => {
  const initialInvaders: InvaderSprite[] = [];
  for (let j = 0; j < INVADER_ROWS; j++) {
    for (let i = 0; i < INVADERS_PER_ROW; i++) {
      initialInvaders.push({
        id: nanoid(),
        x: i * (INVADER_WIDTH + INVADER_SPACING),
        y: j * (INVADER_HEIGHT + INVADER_SPACING) + 60,
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
