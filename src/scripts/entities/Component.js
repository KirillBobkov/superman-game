import { playField } from '../services';

class Component {
  constructor({ image, positionX, positionY }) {
    this.image = image;
    this.positionX = positionX;
    this.positionY = positionY;
  }

  draw() {
    playField.ctx.drawImage(this.image, this.positionX, this.positionY);
  }
}

export { Component };
