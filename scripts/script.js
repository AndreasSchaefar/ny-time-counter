const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let newYearDate = " 1/01/2023";
let newYear = new Date(newYearDate);

function truncate(val) {
    return Math.trunc(val);
}


function setTime() {
    let currentDate = new Date();
    let timeDiff = newYear - currentDate;
    let dayDiff = timeDiff / day;
    let hourDiff = dayDiff % 1 * day / hour;
    let minDiff = hourDiff % 1 * hour / minute;
    let secDiff = minDiff % 1 * minute / second;
    
    days.textContent = truncate(dayDiff);
    hours.textContent = truncate(hourDiff);
    minutes.textContent = truncate(minDiff);
    seconds.textContent = truncate(secDiff);
}

setInterval(setTime, 1000);