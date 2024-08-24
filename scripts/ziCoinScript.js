let countDownDate = new Date("Aug 26, 2024 12:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    let hr = hours < 10 ? "0" + hours : hours;
    let mins = minutes < 10 ? "0" + minutes : minutes;
    let secs = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hr;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);


// MINING READING TIME DIGITS IS HERE BELOW:👇
let [firstSeconds, firstMinutes, firstHours] = [0, 0, 0];
let miningTime = document.getElementById("miningtime");
let endMining = null;


function mining() {
    firstSeconds++;
    if (firstSeconds == 3) {
        firstSeconds = 0;
        firstMinutes++;
        if (firstMinutes == 2) {
            firstMinutes = 0;
            firstHours++;
        }
    }
    let h = firstHours < 10 ? "0" + firstHours : firstHours;
    let m = firstMinutes < 10 ? "0" + firstMinutes : firstMinutes;
    let s = firstSeconds < 10 ? "0" + firstSeconds : firstSeconds;
    miningTime.innerHTML = s + ':' + m + ':' + h;


    //TEST IF MINING HERE:👇
    const button = document.createElement("button");
    const boxer = document.getElementById("start-mining-box");
    boxer.style.fontSize = "1.3rem";
    boxer.style.color = "#999896";
    boxer.style.fontWeight = "bold";
    boxer.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    // box.style.backdropFilter = "blur(40px)";

    const points = document.getElementById("points");
    let counter = 0;
    const countInterval = setInterval(perearning, 1000);
    function perearning() {
        counter++;
        points.innerHTML = counter;
        if (counter >= 500) {
            clearInterval(countInterval);
        }
    }

    if (s >= 0 || endMining !== null) {
        boxer.innerHTML = "Mining has Started.";
        if (h >= 4) {
            boxer.innerHTML = "Mining Completed.";
            clearInterval(endMining);
            [s, m, h] = [0, 0, 0];
            miningTime.innerHTML = "00:00:00";
            boxer.appendChild(button);
            button.innerHTML = "Claim $ZIC";
            boxer.addEventListener("onclick", function (e) {
                if (e.target.tagName === "button") {
                    // const points = document.getElementById("points");
                    // let counter = 0;
                    // const countInterval = setInterval(perearning, 1000);
                    // function perearning() {
                    //     counter++;
                    //     if (counter >= 500) {
                    //         clearInterval(countInterval);
                    //     }
                    // }
                }
            }, false);

        }

    }
    // const button = document.createElement("button");
    // if (miningtime === "00:00:00") {
    //     boxer.appendChild(button);
    // }
}

function startMining() {
    setInterval(mining, 1000);

}