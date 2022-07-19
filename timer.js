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
            this.onStart();
        }
        this.tick();
        this.intervalFunction = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.intervalFunction);
    }

    tick = () => {
        if(this.timeRemaining > 0) {
            this.timeRemaining = this.timeRemaining - 1;
            if(this.onTick) {
                this.onTick();
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
        this.durationInput.value = time;
    }
}