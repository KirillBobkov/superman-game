import '../index.scss';
import {
  resetGameButton,
  restartGameButton,
  pauseGameButton,
  startGameButton,
  resumeGameButton,
  main,
} from './services';

import { Init } from './main';
import { imageUrls } from './constants';
import { enableMain } from './helpers';
import { preloadImages } from './helpers/imageAdapter';

window.onload = () => {
  preloadImages(imageUrls)
    .then(() => {
      enableMain(main);

      const init = new Init();
      pauseGameButton.addEventListener('click', init.pause);
      resumeGameButton.addEventListener('click', init.resume);
      resetGameButton.addEventListener('click', init.restart);
      restartGameButton.addEventListener('click', init.restart);
      startGameButton.addEventListener('click', init.start);
    });
};
