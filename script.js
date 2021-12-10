// console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

setInterval(function loadTime() {
  let d = new Date();
  hourHand.style.transform = "rotate(" + d.getHours() * 30 + "deg)";
  minuteHand.style.transform = "rotate(" + d.getMinutes() * 6 + "deg)";
  secondHand.style.transform = "rotate(" + d.getSeconds() * 6 + "deg)";
}, 1000);

function loadTime() {}
