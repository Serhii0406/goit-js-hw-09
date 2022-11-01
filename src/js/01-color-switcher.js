refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    styleWindow: document.querySelector('body')
}
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        if (timerId) {
         refs.startBtn.disabled = true; 
      }
    refs.styleWindow.style.backgroundColor = getRandomHexColor();  
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});
