const counterValueEl = document.querySelector("#value");
const decrementEl = document.querySelector("[data-action='decrement']");
const incrementEl = document.querySelector("[data-action='increment']");


let counterValue = 0;

decrementEl.addEventListener('click', () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
});

incrementEl.addEventListener('click', () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
});