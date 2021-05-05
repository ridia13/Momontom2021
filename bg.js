'use strict';

const body = document.querySelector('body');
const IMG_NUMBER = 5;

function paintImage(imageNumber) {
  const bgImg = document.createElement('div');
  bgImg.style.background = `center / cover no-repeat url("images/${imageNumber}.jpg")`;
  bgImg.classList.add('bgImage');
  body.appendChild(bgImg);
  /*const image = new Image();
  image.src = `images/${imageNumber}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);*/
}

function getRandom() {
  const randomNum = Math.ceil(Math.random() * IMG_NUMBER);
  return randomNum;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}
init();