var mode = "study";
var sec = 1500;
var timer1 = null;
var isRunning = false
function timer(ck){
    try {
        if (ck =="Start") {
            isRunning = true;
            timer1 = setInterval(function () {
                sec--;
                newtime = secondsToMinutesFormatted(sec)
                setClockTime(newtime)
                document.title=newtime+" - Lang Timer";
                secondTick()
                if (sec <= 0) {
                    clearInterval(timer1);
                    clearInterval(timer)
                    document.getElementById("timerContainer").innerHTML = secondsToMinutesFormatted(sec);
                    enableButtons()
                    isRunning = false;

                    document.getElementById("endAudio").play();
                    console.log("played sound")
                }
            }, 1000)
        } else {
            clearInterval(timer1)
            newtime = secondsToMinutesFormatted(sec)
            setClockTime(newtime)          
            document.getElementById("startButton").classList.remove("startButtonClicked");
            this.timer("Start");
        }
    } catch (error) {
        console.log(error)
    }
}

function findMode() {
    disableButtons()
    document.getElementById("startButton").innerHTML = "Pause"
    document.getElementById("startButton").onclick = function(){makePause()};
    if (mode == "study") {
        sec = secondsMinutesToSeconds(25, 0) - 1;
    } else if (mode == "short") {
        sec = secondsMinutesToSeconds(5, 0) - 1;
    } else if (mode == "long") {
        sec = secondsMinutesToSeconds(15, 0) - 1;
    }
    timer();
    document.getElementById("startButton").classList.add("startButtonClicked");
}

function makePause(){
    clearInterval(timer1)
    document.getElementById("startButton").classList.remove("startButtonClicked");
    document.getElementById("startButton").innerHTML = "Resume";
    document.getElementById("startButton").onclick = function(){
        makeResume()
    }
    
}

function makeResume(){
    timer("Start")
    document.getElementById("startButton").classList.add("startButtonClicked");
    document.getElementById("startButton").innerHTML = "Pause";
    document.getElementById("startButton").onclick = function(){
        makePause()
    }
}

function changeMode(newMode){
    mode = newMode;
    document.getElementById("study").classList.remove("selected");
    document.getElementById("short").classList.remove("selected");
    document.getElementById("long").classList.remove("selected");
    if (newMode == "study"){
        document.getElementById("study").classList.add("selected")
        setClockTime(secondsToMinutesFormatted(secondsMinutesToSeconds(25, 0)));
    }
    if (newMode == "short"){
        document.getElementById("short").classList.add("selected")
        setClockTime(secondsToMinutesFormatted(secondsMinutesToSeconds(5, 0)));
    }
    if (newMode == "long"){
        document.getElementById("long").classList.add("selected")
        setClockTime(secondsToMinutesFormatted(secondsMinutesToSeconds(15, 0)));
    }
}


// Utility functions

// Converts seconds to minutes and seconds in a formatted string
function secondsToMinutesFormatted(seconds) {
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}


// Converts minutes and seconds to seconds
function secondsMinutesToSeconds(minutes, seconds) {
    return minutes * 60 + seconds;
}

function setClockTime(formattedTime) {
    document.getElementById('num4').innerHTML=formattedTime[0];
    document.getElementById('num3').innerHTML=formattedTime[1];
    document.getElementById('num1').innerHTML=formattedTime[3];
    document.getElementById('num0').innerHTML=formattedTime[4];
}

function createTask(){
    
}