// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting');

// Options
const showAmPm = true;

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}


// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
    )} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
    setBgGreet(amPm);
}
showTime();


// Set Background and Greeting
function setBgGreet() {
    let today = new Date();
    hour = today.getHours();
    
    if (hour >= 6 && hour < 12) {
        setInterval(function () {
            document.body.style.backgroundImage = "url('./images/morning.jpeg')";
            greeting.innerHTML = 'Good Morning';
        }, 10)
    }
    else if (hour >= 12 && hour < 18) {
        setInterval(function () {
            document.body.style.backgroundImage = "url('./images/afternoon.jpeg')";
            greeting.innerHTML = 'Good Afternoon';
        }, 10)
    }
    else if (hour >= 18 && hour < 20) {
        setInterval(function () {
            document.body.style.backgroundImage = "url('./images/evening.jpeg')";
            greeting.innerHTML = 'Good Evening';
        }, 10)
    }
    else {
        setInterval(function () {
            document.body.style.backgroundImage = "url('./images/night.jpg')";
            greeting.innerHTML = 'Good Night';
        }, 10)
    }
}



