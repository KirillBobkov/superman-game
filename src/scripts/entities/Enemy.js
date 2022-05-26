import { Component } from './Component';

class Enemy extends Component {
  constructor({ image, positionX, positionY, width, height }) {
    super({ image, positionX, positionY });
    this.width = width;
    this.height = height;
  }
}

export { Enemy };
