const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const durationInput = document.querySelector('#duration-input');

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }

    start() {
        console.log('im workin')
    }

    pause() {

    }
}

const timer = new Timer(durationInput, startButton, pauseButton);