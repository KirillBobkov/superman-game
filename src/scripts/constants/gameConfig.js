import { imageAdapter } from '../helpers';

export const imageUrls = [
  'public/back3.png',
  'public/barrier1.png',
  'public/barrier2.png',
  'public/barrier3.png',
  'public/barrier4.png',
  'public/barrier5.png',
  'public/barrier6.png',
  'public/barrier7.png',
  'public/bonus.png',
  'public/bonusSpeed.png',
  'public/controls.png',
  'public/explosion.png',
  'public/superman.png',
  'public/supermanBoost.png',
];

export const unitConfig = {
  image: imageAdapter('public/superman.png'),
  width: 25,
  height: 78,
  health: 100,
  score: 0,
  animationX: 3,
  animationY: 0,
  positionX: 170,
  positionY: 400,
};

export const backgroundConfig = {
  image: imageAdapter('public/back3.png'),
  positionX: 0,
  positionY: 0,
};

export const enemyConfig = {
  positionY: -350,
  width: 70,
  height: 240,
};

export const bonusConfig = {
  image: imageAdapter('public/bonus.png'),
  positionY: -32,
  width: 16,
  height: 32,
  widthSpeedBonus: 37,
  heightSpeedBonus: 43,
};

export const explosionConfig = {
  image: imageAdapter('public/explosion.png'),
  width: 100,
  height: 100,
  animationX: 5,
  animationY: 0,
};

