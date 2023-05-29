const userNameInputEl = document.querySelector("#name-input");
const userNameOutputEl = document.querySelector("#name-output");

userNameInputEl.addEventListener('input', (e) => {
    userNameOutputEl.textContent = e.target.value.length !== 0 ? `${e.target.value}` : 'Anonymous';
})