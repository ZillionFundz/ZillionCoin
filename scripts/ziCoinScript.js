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
    if (firstSeconds == 60) {
        firstSeconds = 0;
        firstMinutes++;
        if (firstMinutes == 60) {
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

    if (s >= 0 || endMining !== null) {
        boxer.innerHTML = "Mining has Started.";

        //MINING POINTS IS HERE BELOW:👇
        let [counter1, counter2] = [0, 0];
        if (firstSeconds == 5) {
            const mainPoints = document.getElementById("main-points");
            const fractionalPoints = document.getElementById("fractional-points");
            // let counter1 = 0;
            const countInterval = setInterval(perearning, 1000);

            function perearning() {
                counter1++;
                if (counter1 == 10) {
                    counter1 = 0;
                    counter2++;
                }
                fractionalPoints.innerHTML = counter1;
                mainPoints.innerHTML = counter2;

                if (counter2 >= Number(2) || h >= 12) {
                    clearInterval(countInterval, endMining);
                    [counter1, counter2, s, m, h] = [0, 0, 0, 0, 0];
                    // [s, m, h] = [0, 0, 0];
                    miningTime.innerHTML = "00:00:00";

                }
            }

            if (h >= 12) {
                boxer.innerHTML = "Mining Completed.";
                clearInterval(endMining);
                [s, m, h] = [0, 0, 0];
                miningTime.innerHTML = "00:00:00";
                boxer.appendChild(button);
                button.innerHTML = "Claim $ZIC";
                boxer.addEventListener("onclick", function (e) {
                    if (e.target.tagName === "button") {
                        // const mainPoints = document.getElementById("points");
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

    }


}

function startTiming() {
    setInterval(mining, 1000);

}