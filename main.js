const pixelContainer = document.querySelector('.pixel-container');
const CANVAS_WIDTH = 512;
const dimensionButton = document.querySelector('.select-length');
drawCanvass(16);


function drawCanvass (dimension) {
  for (let i = 0; i < dimension * dimension; i++) {
    let pixel = document.createElement('div');
    let pixelDimension = CANVAS_WIDTH/dimension;
    pixel.setAttribute('style', `height: ${pixelDimension}px; width: ${pixelDimension}px;`);
    pixelContainer.appendChild(pixel);
    pixel.addEventListener('mouseover', () => {
    pixel.setAttribute('style', `background: ${colorRandomizer()}; 
      height: ${pixelDimension}px; width: ${pixelDimension}px;`); 
    })
  }
}


function removeCanvass() {
  while(pixelContainer.firstChild) {
    pixelContainer.removeChild(pixelContainer.lastChild);
  }
}

function colorRandomizer () {
  return `rgb(${randonNumberGenerator(255)}, ${randonNumberGenerator(255)}, ${randonNumberGenerator(255)})`;
}

function randonNumberGenerator (num) {
  return Math.floor(Math.random() * num);
}

dimensionButton.addEventListener('click', () => {
  do {
    dimension = prompt('What pixel length would you like? (up to 64)');
  } while (dimension>64);
  removeCanvass();
  drawCanvass(dimension);
})





