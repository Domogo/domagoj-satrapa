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
  shipHeight,
  BULLET_SIZE,
  checkCollision,
  initializeInvaders,
  moveShip,
  moveInvaders,
  shipHorizonLine,
  checkShipCollision,
  INVADERS_PER_ROW,
  INVADER_ROWS,
} from "./helpers";
import { Press_Start_2P, Roboto_Mono } from "next/font/google";

const Sketch = dynamic(() => import("react-p5"), { ssr: false });
const robotoMono = Roboto_Mono({ weight: "300", subsets: ["latin"] });
const pressStart = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const Game = () => {
  const gameWidth = window.innerWidth > 800 ? 800 : window.innerWidth;

  const [playing, setPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);

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
    p5.createCanvas(gameWidth, gameWidth / 1.33).parent(canvasParentRef);

    const initialInvaders = initializeInvaders(gameWidth);
    setInvaders(initialInvaders);

    drawShip(p5, shipX, gameWidth);
    initialInvaders.forEach((invader) => {
      drawInvader(
        p5,
        invader.x,
        invader.y,
        invader.isBlue ? invaderBlueSprite! : invaderWhiteSprite!,
        gameWidth
      );
    });
  };

  const draw = (p5: p5Types) => {
    if (!playing) return;

    p5.background(NIGHT_COLOR);

    drawShip(p5, shipX, gameWidth);
    moveShip(shipX, shipDirection, gameWidth, setShipX);
    checkShipCollision(
      p5.height - shipHorizonLine(gameWidth) - shipHeight(gameWidth),
      invaders,
      gameWidth,
      () => {
        setPlaying(false);
        setGameEnd(true);
        p5.background(NIGHT_COLOR);
      }
    );

    invaders.forEach((invader) => {
      drawInvader(
        p5,
        invader.x,
        invader.y,
        invader.isBlue ? invaderBlueSprite! : invaderWhiteSprite!,
        gameWidth
      );
      moveInvaders(
        invaders,
        invaderDirection,
        gameWidth,
        setInvaders,
        setInvaderDirection
      );
    });

    bullets.forEach((bullet) => {
      drawBullet(p5, bullet.x, bullet.y);
      moveBullet(bullet, setBullets);
      checkCollision(
        bullet,
        invaders,
        gameWidth,
        setInvaders,
        setBullets,
        setScore
      );
    });

    if (score === INVADERS_PER_ROW * INVADER_ROWS) {
      setPlaying(false);
      setGameEnd(true);
      setHasWon(true);
      p5.background(NIGHT_COLOR);
      return;
    }
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
        y: p5.height - shipHeight(gameWidth) - BULLET_SIZE,
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

        <div className={`text-slate-300 ${robotoMono.className}`}>
          <p>Press play to start playing.</p>
          <p>Desktop: Use arrow keys to move, and X to shoot.</p>
          <p>Mobile: Use the on screen buttons to move and shoot.</p>
        </div>

        {!playing && (
          <div className="flex justify-center">
            <button
              onClick={() => setPlaying(true)}
              className={`w-fit uppercase ${robotoMono.className} cursor-pointer mt-2 text-aqua border border-aqua p-2`}
            >
              PLAY
            </button>
          </div>
        )}

        {gameEnd && (
          <div
            className={`flex justify-center text-aqua ${pressStart.className}`}
          >
            {hasWon ? <p>You won!</p> : <p>You lost!</p>}
          </div>
        )}

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
