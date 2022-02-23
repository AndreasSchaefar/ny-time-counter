const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const newYearDate = "1/01/2023";

class Counter {

    constructor(newYearDate, days, hours, minutes, seconds) {
        this.newYearDate = new Date(newYearDate);
        this.days = days;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    static getTime(unit, difference) {
        switch (unit) {
            case "day":
                return difference / day;
            case "hour":
                return (difference / day) % 1 * day / hour;
            case "minute":
                return ((difference / day) % 1 * day / hour) % 1 * hour / minute;
            case "second":
                return (((difference / day) % 1 * day / hour) % 1 * hour / minute) % 1 * minute / second;
            default:
                break;
        }
    }

    static truncate(value) {
        return Math.trunc(value);
    }

    setTime() {
        let currentDate = new Date();
        let timeDiff = this.newYearDate - currentDate;
        this.days.textContent = Counter.truncate(Counter.getTime("day", timeDiff));
        this.hours.textContent = Counter.truncate(Counter.getTime("hour", timeDiff));
        this.minutes.textContent = Counter.truncate(Counter.getTime("minute", timeDiff));
        this.seconds.textContent = Counter.truncate(Counter.getTime("second", timeDiff));
    }
}

const counter = new Counter(newYearDate, days, hours, minutes, seconds);
setInterval(() => counter.setTime(), 1000);