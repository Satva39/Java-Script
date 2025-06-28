var hours = 0;
var mins = 0;
var secs = 0;
var ms = 0;

var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var mss = document.getElementById("ms");
var lapContainer = document.getElementById("laps");

let x;

const start2 = () => {
    ms++;

    if (ms === 100) {
        ms = 0;
        secs++;
    }

    if (secs === 60) {
        secs = 0;
        mins++;
    }

    if (mins === 60) {
        mins = 0;
        hours++;
    }

    hour.innerHTML = hours < 10 ? "0" + hours : hours;
    min.innerHTML = mins < 10 ? "0" + mins : mins;
    sec.innerHTML = secs < 10 ? "0" + secs : secs;
    mss.innerHTML = ms < 10 ? "0" + ms : ms;
};

const start = () => {
    clearInterval(x);
    x = setInterval(start2, 10);
};

const stop = () => {
    clearInterval(x);
};

const reset = () => {
    hours = 0;
    mins = 0;
    secs = 0;
    ms = 0;

    hour.innerHTML = "00";
    min.innerHTML = "00";
    sec.innerHTML = "00";
    mss.innerHTML = "00";

    clearInterval(x);
    lapContainer.innerHTML = "";
};

const lap = () => {
    const lapTime = `${hour.innerHTML}:${min.innerHTML}:${sec.innerHTML}:${mss.innerHTML}`;
    const lapElement = document.createElement("div");
    lapElement.textContent = "Lap: " + lapTime;

    if (lapContainer.children.length === 0) {
        lapElement.classList.add("first-lap");
    }

    lapContainer.appendChild(lapElement);
};
