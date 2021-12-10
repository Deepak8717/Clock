// console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());

const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

setInterval(function loadTime() {
  let d = new Date();
  if (d.getMinutes() > 30) {
    console.log(d.getMinutes());
    let h = d.getHours() + 0.5;
    hourHand.style.transform = "rotate(" + h * 30 + "deg)";
  } else {
    hourHand.style.transform = "rotate(" + d.getHours() * 30 + "deg)";
  }

  minuteHand.style.transform = "rotate(" + d.getMinutes() * 6 + "deg)";
  secondHand.style.transform = "rotate(" + d.getSeconds() * 6 + "deg)";
}, 1000);

function loadTime() {}
