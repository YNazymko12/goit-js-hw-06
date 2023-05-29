const formInputEl = document.querySelector("#validation-input");

formInputEl.addEventListener('blur', () => {
    const enteredValue = formInputEl.value;
    const requiredLength = parseInt(formInputEl.dataset.length);

    formInputEl.classList.remove('valid', 'invalid');
    formInputEl.classList.add(enteredValue.length > requiredLength ? 'valid' : 'invalid');
})