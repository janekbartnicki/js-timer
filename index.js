const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const durationInput = document.querySelector('#duration-input');
const circle = document.querySelector('circle');

const premiter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', premiter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {onStart, onTick, onComplete});

function onStart(totalDuration) {
    duration = totalDuration;
}

function onTick(timeRemaining) {
    circle.setAttribute('stroke-dashoffset', (premiter * timeRemaining) / duration - premiter);
}

function onComplete() {
    console.log('Timer is completed!');
}