export const setBestResult = (score) => {
  const data = sessionStorage.getItem('bestScore');
  if (data < score || data === null) {
    sessionStorage.setItem('bestScore', score);
  }
};

export const getBestResult = (field) => {
  field.innerHTML = sessionStorage.getItem('bestScore') || 0;
};

export const setCurrentDataOfGame = (unit, scoreInput, healthInput) => {
  scoreInput.innerHTML = unit.score;
  healthInput.innerHTML = unit.health;
};
