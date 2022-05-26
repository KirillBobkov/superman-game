import { Component } from './Component';

class Bonus extends Component {
  constructor({ image, positionX, positionY, width, height }) {
    super({ image, positionX, positionY });
    this.width = width;
    this.height = height;
  }
}

export { Bonus };
