const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.startBtn.addEventListener("click", () => {
    colorSwitcher.start();
});
refs.stopBtn.addEventListener("click", () => {
    colorSwitcher.stop();
});

const colorSwitcher = {
    isActive: false,
    start() {
        if (this.isActive) {
            return
        }
        this.isActive = true;
        refs.startBtn.style.color = 'grey'
        refs.stopBtn.style.color = 'black'
        timerId = setInterval(() => {
        refs.body.style.backgroundColor = `${getRandomHexColor()}`
        }, 1000);
    },

    stop() {
        clearInterval(timerId);
        this.isActive = false;
        refs.stopBtn.style.color = 'grey'
        refs.startBtn.style.color = 'black'
    }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// console.log()
