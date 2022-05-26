import '../index.scss';
import {
  resetGameButton,
  restartGameButton,
  pauseGameButton,
  startGameButton,
  resumeGameButton,
  main,
} from './services';

import { imageUrls } from './constants';
import { enableMain } from './helpers';
import { preloadImages } from './helpers/imageAdapter';
import { Background, Game, Unit } from './entities';
import { backgroundConfig, unitConfig } from './constants';
import { playField } from './services';

window.onload = () => {
  preloadImages(imageUrls)
    .then(() => {
      enableMain(main);

      const unit = new Unit({ ...unitConfig });
      const background = new Background({
        image: backgroundConfig.image,
        positionX: backgroundConfig.positionX,
        positionY: backgroundConfig.positionY,
        width: playField.canvas.width,
        height: playField.canvas.height,
      });

      const game = new Game(background, unit);

      window.document.addEventListener('keydown', game.onKeyDown);
      window.document.addEventListener('keyup', game.onKeyUp);
      pauseGameButton.addEventListener('click', game.pause);
      resumeGameButton.addEventListener('click', game.resume);
      resetGameButton.addEventListener('click', game.restart);
      restartGameButton.addEventListener('click', game.restart);
      startGameButton.addEventListener('click', game.start);
    });
};
