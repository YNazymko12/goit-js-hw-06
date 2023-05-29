function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInputEl = document.querySelector('input[type = "number"]');
const createButtonEl = document.querySelector('[data-create]');
const destroyButtonEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createButtonEl.addEventListener('click', createBoxes);
destroyButtonEl.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = +numberInputEl.value;

  for (let i = 0; i < amount; i ++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    boxesEl.append(box);

  }
}

function destroyBoxes() {

  boxesEl.innerHTML = '';
  numberInputEl.value = '';
}