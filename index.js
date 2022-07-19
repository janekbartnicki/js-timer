const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const durationInput = document.querySelector('#duration-input');

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.tick();
        this.intervalFunction = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.intervalFunction);
    }

    tick = () => {
        this.timeRemaining > 0 ? this.timeRemaining = this.timeRemaining - 1 : this.pause();
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const timer = new Timer(durationInput, startButton, pauseButton, {onStart});