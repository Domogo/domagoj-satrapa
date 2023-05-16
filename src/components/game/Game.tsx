"use client";

import { SectionHeader } from "components/shared/SectionHeader";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
import p5Types from "p5";
import { useState } from "react";
import {
  InvaderSprite,
  Bullet,
  NIGHT_COLOR,
  drawShip,
  drawInvader,
  drawBullet,
  moveBullet,
  X_KEY,
  SHIP_HEIGHT,
  BULLET_SIZE,
  checkCollision,
  initializeInvaders,
  moveShip,
  moveInvaders,
  SHIP_HORIZON_LINE,
  checkShipCollision,
} from "./helpers";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });

export const Game = () => {
  const [playing, setPlaying] = useState<boolean>(true);
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

    const initialInvaders = initializeInvaders();
    setInvaders(initialInvaders);
  };

  const draw = (p5: p5Types) => {
    if (!playing) return;
    p5.background(NIGHT_COLOR);

    drawShip(p5, shipX);
    moveShip(shipX, shipDirection, setShipX);
    checkShipCollision(
      p5.height - SHIP_HORIZON_LINE - SHIP_HEIGHT,
      invaders,
      () => setPlaying(false)
    );

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
