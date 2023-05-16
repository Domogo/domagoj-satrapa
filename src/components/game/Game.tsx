"use client";

import { SectionHeader } from "components/shared/SectionHeader";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import p5Types from "p5";
import { Dispatch, SetStateAction, useState } from "react";
import {
  InvaderSprite,
  Bullet,
  INVADER_WIDTH,
  NIGHT_COLOR,
  drawShip,
  drawInvader,
  drawBullet,
  moveBullet,
  X_KEY,
  SHIP_HEIGHT,
  BULLET_SIZE,
  checkCollision,
  INVADER_SPEED,
  initializeInvaders,
  SHIP_SPEED,
  SHIP_WIDTH,
} from "./helpers";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export const moveInvaders = (
  invaders: InvaderSprite[],
  invaderDirection: number,
  setInvaders: Dispatch<SetStateAction<InvaderSprite[]>>,
  setInvaderDirection: Dispatch<SetStateAction<number>>
) => {
  const newInvaders = invaders.map((invader) => {
    if (invader.x >= 800 - INVADER_WIDTH) {
      setInvaderDirection(-1);
    }
    if (invader.x < 0) {
      setInvaderDirection(1);
    }
    return {
      ...invader,
      x: invader.x + INVADER_SPEED * invaderDirection,
    };
  });

  setInvaders(newInvaders);
};

const moveShip = (
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

export const Game = () => {
  const [shipX, setShipX] = useState(300);
  // 0 - not moving, 1 - moving right, -1 - moving left
  const [shipDirection, setShipDirection] = useState(0);
  const [invaders, setInvaders] = useState<InvaderSprite[]>([]);
  const [invaderDirection, setInvaderDirection] = useState<number>(1);
  const [bullets, setBullets] = useState<Bullet[]>([]);
  const [invaderBlueSprite, setInvaderBlueSprite] = useState<p5Types.Image>();
  const [invaderWhiteSprite, setInvaderWhiteSprite] = useState<p5Types.Image>();

  const preload = (p5: p5Types) => {
    const ib = p5.loadImage("/invader_blue.webp");
    setInvaderBlueSprite(ib);
    const iw = p5.loadImage("/invader_white.webp");
    setInvaderWhiteSprite(iw);
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(800, 600).parent(canvasParentRef);

    setShipX(p5.width / 2);

    const initialInvaders = initializeInvaders();
    setInvaders(initialInvaders);
  };

  const draw = (p5: p5Types) => {
    p5.background(NIGHT_COLOR);

    drawShip(p5, shipX);
    moveShip(shipX, shipDirection, setShipX);
    invaders.forEach((invader) => {
      drawInvader(
        p5,
        invader.x,
        invader.y,
        invader.isBlue ? invaderBlueSprite! : invaderWhiteSprite!
      );
      moveInvaders(
        invaders,
        invaderDirection,
        setInvaders,
        setInvaderDirection
      );
    });

    bullets.forEach((bullet) => {
      drawBullet(p5, bullet.x, bullet.y);
      moveBullet(bullet, setBullets);
      checkCollision(bullet, invaders, setInvaders, setBullets);
    });
  };

  const keyReleased = (p5: p5Types) => {
    if (p5.keyCode !== X_KEY) {
      setShipDirection(0);
    }
  };

  const keyPressed = (p5: p5Types) => {
    if (p5.keyCode === X_KEY) {
      const bullet: Bullet = {
        id: nanoid(),
        x: shipX,
        y: p5.height - SHIP_HEIGHT - BULLET_SIZE,
      };

      setBullets([...bullets, bullet]);
    }
    if (p5.keyCode === p5.RIGHT_ARROW) {
      setShipDirection(1);
    }
    if (p5.keyCode === p5.LEFT_ARROW) {
      setShipDirection(-1);
    }
  };

  return (
    <div className="w-full min-h-screen px-4 lg:px-24">
      <div className="flex flex-col gap-4">
        <SectionHeader text="Play Space Invaders" />
        <div className="flex flex-col items-center">
          <Sketch
            setup={setup}
            draw={draw}
            keyPressed={keyPressed}
            keyReleased={keyReleased}
            preload={preload}
          />
        </div>
      </div>
    </div>
  );
};
