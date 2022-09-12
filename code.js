var mode = "study";
var sec = 1500;
var timer1 = null;
var isRunning = false
function timer(ck){
    try {
        if (ck =="Start") {
            console.log("Timer created")
            isRunning = true;
            timer1 = setInterval(function () {
                document.getElementById('timerContainer').innerHTML=secondsToMinutesFormatted(sec);
                sec--;
                if (sec < 0) {
                    clearInterval(timer);
                    document.getElementById("timerContainer").innerHTML = secondsToMinutesFormatted(sec);
                    sec = time
                    enableButtons()
                    isRunning = false;
                }
            }, 1000)
        } else {
            console.log("Clearing timer: " + timer)
            document.getElementById("timerContainer").innerHTML = secondsToMinutesFormatted(sec);
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
    document.getElementById("startButton").classList.add("startButtonClicked");
    console.log("Mode: "+mode);
    if (mode == "study") {
        sec = secondsMinutesToSeconds(25, 0);
        console.log("inside study")
        
    } else if (mode == "short") {
        sec = secondsMinutesToSeconds(5, 0);
    } else if (mode == "long") {
        sec = secondsMinutesToSeconds(15, 0)
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
        document.getElementById("timerContainer").innerHTML = secondsToMinutesFormatted(secondsMinutesToSeconds(25, 0));
    }
    if (newMode == "short"){
        document.getElementById("short").classList.add("selected")
        document.getElementById("timerContainer").innerHTML = secondsToMinutesFormatted(secondsMinutesToSeconds(5, 0));
    }
    if (newMode == "long"){
        document.getElementById("long").classList.add("selected")
        document.getElementById("timerContainer").innerHTML = secondsToMinutesFormatted(secondsMinutesToSeconds(15, 0));
    }
}

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

function secondsMinutesToSeconds(minutes, seconds) {
    return minutes * 60 + seconds;
}