import { Component } from './Component';
import { playField } from '../services';

class Unit extends Component {
  constructor({ image, positionX, positionY, width, height, health }) {
    super({ image, positionX, positionY });
    this.width = width;
    this.height = height;
    this.health = health;
    this.score = 0;
    this.animationX = 3;
    this.animationY = 0;
  }

  moveRight() {
    if (this.positionX < playField.canvas.width - this.width) {
      this.positionX += 6;
    }
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= 6;
    }
  }
}

export { Unit };

