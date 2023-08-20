let now, hours, minutes, seconds, day, date, month;

let time = document.querySelector('.clock');
let today = document.querySelector('.date');

const months = [
    "January","February","March","April","May","June","July",
    "August","September","October","November","December"
];

const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

pad = (unit) => {
    unit = unit.toString()
    if (unit.length < 2) {
        return `0${unit}`;
    }
    return unit;
}

setInterval(() => {
    now = new Date();

    hours = pad(now.getHours());
    minutes = pad(now.getMinutes());
    seconds = pad(now.getSeconds());

    console.log(now.getDay());
    day = days[now.getDay()];
    date = now.getDate()
    month = months[now.getMonth()];

    time.innerHTML = `${hours}:${minutes}:${seconds}`;
    today.innerHTML = `${day} | ${date} ${month}`;

}, 1000);