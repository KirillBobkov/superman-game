const imageAdapter = (src) => {
  const image = new Image();
  image.src = src;
  return image;
};

const chooseSrcForEnemy = () => {
  const image = new Image();
  const rand = Math.floor(1 + (Math.random() * 7));
  image.src = `public/barrier${rand}.png`;
  return image;
};

const preloadOneImage = url => new Promise((res) => {
  const img = new Image();
  img.onload = res();
  img.src = url;
});

const preloadImages = urls => Promise.all(urls.map(url => preloadOneImage(url)));

export { imageAdapter, chooseSrcForEnemy, preloadImages };
