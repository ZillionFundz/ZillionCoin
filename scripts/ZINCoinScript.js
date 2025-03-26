let countDownDate = new Date("Apr 26, 2025 12:00:00").getTime();
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

//EVERYTHING MINING STARTS HERE BELOW:👇

// (MINING READING TIME DIGITS IS HERE BELOW):👇
let [firstSeconds, firstMinutes, firstHours] = [0, 0, 0];
let miningTime = document.getElementById("miningtime");
// let endMining = null;
let countInterval1;
let countInterval2


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
    const div = document.getElementById("zin");
    const button = document.createElement("button");
    const miningBox = document.getElementById("mining-box");
    div.style.backgroundColor = "#999896";
    miningBox.style.fontSize = "1.3rem";
    miningBox.style.color = "#999896";
    miningBox.style.fontWeight = "bold";
    miningBox.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    // box.style.backdropFilter = "blur(40px)";

    if (s >= 2) {
        miningBox.innerHTML = "Mining has Started.";
        miningBox.appendChild(div);
        // miningBox.style.opacity = "0";

        //EARNING POINTS IS HERE BELOW:👇
        let [counter1, counter2, counter3] = [0, 0, 0];
        if (firstSeconds == 4) {
            // miningBox.style.opacity = "5";
            let fractionalPoints = document.getElementById("fractional-points");
            let mainPoints = document.getElementById("main-points");
            let zin = document.getElementById("zin");
            countInterval2 = setInterval(perearning, 1000);

            function perearning() {
                counter1++;
                if (counter1 == 10) {
                    counter1 = 0;
                    counter2++;
                    if (counter2 == 10) {
                        counter2 = 0;
                        counter3++
                    }
                }

                fractionalPoints.innerHTML = counter1;
                mainPoints.innerHTML = counter2;
                zin.innerHTML = counter3;
                const earnings = (number(mainPoints) * 10) + number(fractionalPoints);
                if (counter2 >= 1) {
                    clearInterval(countInterval2);
                    // clearInterval(countInterval2);
                    [counter1, counter2] = [0, 0];
                    // [s, m, h] = [0, 0, 0];
                    // [s, m, h] = [0, 0, 0];
                    // miningTime.innerHTML = "00:00:00";

                }
            }

            if (h >= 12) {
                miningBox.innerHTML = "Mining Completed.";
                clearInterval(countInterval1);
                clearInterval(countInterval2);
                [s, m, h] = [0, 0, 0];
                miningTime.innerHTML = "00:00:00";
                miningBox.appendChild(button);
                miningBox.appendChild(div);
                button.innerHTML = "Claim $ZIC";
                miningBox.addEventListener("click", function (e) {
                    if (e.target.tagName === "button") {
                        const balance = document.getElementById("balance");
                        balance.innerHTML = number(earnings);
                        alert("$ZIC Points claimed Successfully");
                    }
                }, false);

            }
        }

    }


}
// let countInterval2 = setInterval(mining, 1000);
function startTiming() {
    countInterval1 = setInterval(mining, 1000);

}
