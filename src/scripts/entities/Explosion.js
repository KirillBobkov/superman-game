import { Component } from './Component';
import { playField } from '../services';

class Explosion extends Component {
  constructor({
    image, positionX, positionY, width, height, animationX, animationY,
  }) {
    super({ image, positionX, positionY });
    this.width = width;
    this.height = height;
    this.animationX = animationX;
    this.animationY = animationY;
  }

  drawExplosion() {
    playField.ctx.drawImage(
      this.image,
      this.animationX,
      this.animationY,
      this.width * 0.8,
      this.height * 0.8,
      this.positionX - 30,
      this.positionY - 55,
      this.width * 1.2,
      this.height * 1.2,
    );

    this.animationX += 80;

    if (this.animationX > 640) {
      this.animationY += 80;
      this.animationX = 5;
    }
  }
}

export { Explosion };
