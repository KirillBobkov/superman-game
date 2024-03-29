
class Context {
  constructor() {
    this.canvas = null;
    this.ctx = null;
  }

  create(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
  };
}

const playField = new Context();
playField.create('canvas');

export { playField };

