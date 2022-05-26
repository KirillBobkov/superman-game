import { Component } from './Component';
import { playField } from '../services';

class Background extends Component {
  constructor({ image, positionX, positionY, width, height }) {
    super({ image, positionX, positionY });
    this.width = width;
    this.height = height;
  }

  drawBack() {
    super.draw();
    playField.ctx.drawImage(this.image, this.positionX, this.positionY - playField.canvas.height);
  }
}

export { Background };
