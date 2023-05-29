const controlInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

controlInputEl.addEventListener('input', (e) => {
    const fontSizeControl = controlInputEl.value + 'px';
    textEl.style.fontSize = fontSizeControl;
    
})