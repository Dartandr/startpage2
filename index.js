const timeElement = document.getElementById("clock-content");
const greetingElement = document.getElementById("greeting");
const dateElement = document.getElementById("date");

function time() {
  const newDate = new Date();
  const time = newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const hours = newDate.getHours();
  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const weekDay = newDate.getDay();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let greetingText = "";
  if (hours >= 5 && hours < 12) {
    greetingText = "morning";
  } else if (hours >= 12 && hours < 18) {
    greetingText = "afternoon";
  } else if (hours >= 18 && hours < 23) {
    greetingText = "evening";
  } else {
    greetingText = "night";
  }
  const finalGreetText = `Good ${greetingText}, Dartandr`;
  const finalDateText = `Today is ${weekDays[weekDay]}, ${months[month]} ${day} ${year}`;
  if (timeElement.innerHTML !== time) {
    timeElement.innerHTML = time;
  }
  if (greetingElement.innerHTML !== finalGreetText) {
    greetingElement.innerHTML = finalGreetText;
  }
  if (dateElement.innerHTML !== finalDateText) {
    dateElement.innerHTML = finalDateText;
  }
}
time();
setInterval(time, 1000);
