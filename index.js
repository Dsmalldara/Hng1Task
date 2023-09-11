// getting date
const date = new Date();
const DaysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day  = DaysOfTheWeek[date.getDay()];
console.log(day);
// getting day of the week;

const dayOfTheWeek = document.querySelector("#dayOfWeek")
dayOfTheWeek.textContent = day;
const UtcTiming = document.querySelector("#utcTime")
function updateUTCTime() {
    const UtcTime = Date.now();
    UtcTiming.textContent = UtcTime.toString();
    console.log(UtcTime);
}
updateUTCTime();
setInterval(updateUTCTime, 500);
