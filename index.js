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

    tick = () => {
        console.log('tick');
    }

    pause = () => {
        console.log('pause')
        clearInterval(this.intervalFunction);
    }
}

const timer = new Timer(durationInput, startButton, pauseButton);