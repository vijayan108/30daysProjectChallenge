const display =document.querySelector('.display');
const startBtn =document.querySelector('.start');
const stopBtn =document.querySelector('.stop');
const resetBtn =document.querySelector('.reset');


let time = 0;
let interval;
let isRunning = false;

function start(){
    display.style.backgroundColor = "#a9ffac";
    if(!isRunning){
        interval = setInterval(run, 10);
        isRunning = true;
    }
}

function run(){

    time++;
    display.innerText = time / 10;
}

function stop(){
    display.style.backgroundColor = "#ffadad";
    if(isRunning){
        clearInterval(interval);
        isRunning = false;
    }
}


function reset(){
    display.style.backgroundColor = "#fff";
    clearInterval(interval);
    isRunning = false;
    time = 0;
    display.innerText = '0.00';
}

startBtn.addEventListener('click', start);

stopBtn.addEventListener('click', stop);

resetBtn.addEventListener('click', reset);

