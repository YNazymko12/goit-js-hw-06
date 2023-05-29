function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBodyEl = document.body;
const colortextEl = document.querySelector('.color');
const changeColorEl = document.querySelector('.change-color');

changeColorEl.addEventListener('click', () => {

  const randomColor = getRandomHexColor();

  colorBodyEl.style.backgroundColor = randomColor;
  colortextEl.textContent = randomColor;

})