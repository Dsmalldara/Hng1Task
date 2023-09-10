// getting date
const date = new Date();
const DaysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day  = DaysOfTheWeek[date.getDay()];
const UtcTime = Date.now();
console.log(UtcTime);
console.log(day);
// getting day of the week;

const dayOfTheWeek = document.querySelector("#dayOfWeek")
dayOfTheWeek.textContent = day;
const UtcTiming = document.querySelector("#utcTime")
UtcTiming.textContent = UtcTime;
