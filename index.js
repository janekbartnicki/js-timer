const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const durationInput = document.querySelector('#duration-input');
const circle = document.querySelector('circle');

const premiter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', premiter);

let currentOffset = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {onStart, onTick, onComplete});

function onStart() {
    console.log('Timer started!');
}

function onTick() {
    circle.setAttribute('stroke-dashoffset', currentOffset);
    currentOffset -= 50;
}

function onComplete() {
    console.log('Timer is completed!');
}