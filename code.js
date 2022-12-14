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
                    enableButtons()
                    isRunning = false;
                    document.getElementById("endAudio").play();
                    document.getElementById("startButton").onclick = function(){
                        findMode()
                    }
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
    document.getElementById("buttonClickAudio").play();
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
    document.getElementById("buttonClickAudio").play();
    clearInterval(timer1)
    document.getElementById("startButton").classList.remove("startButtonClicked");
    document.getElementById("startButton").innerHTML = "Resume";
    document.getElementById("startButton").onclick = function(){
        makeResume()
    }
    
}

function makeResume(){
    document.getElementById("buttonClickAudio").play();
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

var taskCount = 0;

function addTask() {
    taskCount++;

    var element = document.createElement("div");
    element.classList.add("horizontalFlex");
    element.style.marginBottom = "10px";
    element.id = "task" + taskCount;

    var element2 = document.createElement("div");
    element2.classList.add("horizontalFlex");
    element2.classList.add("newTask");
    element2.style.justifyContent = "space-between";

    var element3 = document.createElement("div");
    element3.setAttribute("contenteditable", "true");
    element3.style.marginLeft = "10px";
    element2.appendChild(element3);

    var element4 = document.createElement("img");
    element4.src = "assets/close.png";
    element4.style.marginRight = "10px";
    element4.style.cursor = "pointer";
    element4.style.height = "30px";
    element4.style.width = "30px";
    element4.onclick = function() {
        var parent = this.parentElement.parentElement;
        parent.remove();
    }
    element2.appendChild(element4);


    // element2.classList.add("verticalFlex");
    // element2.classList.add("newTask");
    // element2.setAttribute("contenteditable", "true");
    element.appendChild(element2);
    document.getElementById("tasks").insertBefore(element, document.getElementById("tasks").childNodes[0]);
}

var usingTelescope = false;
function toggleTelescope() {
    usingTelescope = !usingTelescope;
    if (usingTelescope) {
        document.body.setAttribute("style", "font-family: 'Annie Use Your Telescope' !important;");
    } else {
        document.body.removeAttribute("style", "");
    }
}