const playPause = document.querySelector('#playPause');
const reset = document.querySelector('#reset');

//Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variables for setInterval and timer status
let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {
    seconds++

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        leadingSeconds = '0' + seconds.toString();
    }else {
        leadingSeconds = seconds;
    }

    if(minutes < 10) {
        leadingMinutes = '0' + minutes.toString();
    }else {
        leadingMinutes = minutes;
    }

    if(hours < 10) {
        leadingHours = '0' + hours.toString();
    }else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer');
    displayTimer.innerText = leadingHours + ":" 
                         + leadingMinutes + ":" 
                         + leadingSeconds;
}

playPause.addEventListener('click', function() {
    if(timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('playPause').innerHTML = `<i 
        class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else {
        window.clearInterval(timerInterval);
        document.getElementById('playPause').innerHTML = `<i 
        class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
})

reset.addEventListener('click', function() {
    window.clearInterval(timerInterval);

    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerText = "00:00:00"; 
})