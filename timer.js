class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalFunction = setInterval(this.tick, 50);
        this.startButton.classList.toggle('button-activated-background');
        this.pauseButton.classList.toggle('button-activated-background', false);
    }

    pause = () => {
        clearInterval(this.intervalFunction);
        this.startButton.classList.toggle('button-activated-background');
        this.pauseButton.classList.toggle('button-activated-background');
    }

    tick = () => {
        if(this.timeRemaining > 0) {
            this.timeRemaining = this.timeRemaining - .05;
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }
         } else {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
         }
    }

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}