let redBtn = document.querySelector("#red-btn");
let greenBtn = document.querySelector("#green-btn");
let yellowBtn = document.querySelector("#yellow-btn");

const red = document.querySelector("#red");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");

let vdio = document.querySelector("video");
let result = document.querySelector("#result-title");
let desc = document.querySelector("#result-description");
let circle = document.querySelector(".circle");

// Active light controller
function activateLight(light) {
  [red, green, yellow].forEach((l) => l.classList.remove("active", "blink"));
  light.classList.add("active", "blink");
}

// Reusable traffic update function
function updateSignal(light, videoSrc, color, title, description) {
  activateLight(light);
  vdio.src = videoSrc;
  circle.style.backgroundColor = color;
  result.innerText = title;
  desc.innerText = description;
}

// Event Listeners
redBtn.addEventListener("click", () => {
  updateSignal(
    red,
    "assets/Red.mp4",
    "red",
    "Red - Stop",
    "Stop your vehicle and wait until the signal changes to green.",
  );
});

greenBtn.addEventListener("click", () => {
  updateSignal(
    green,
    "assets/green.mp4",
    "green",
    "Green - Go",
    "Proceed when the way is clear and it is safe to move.",
  );
});

yellowBtn.addEventListener("click", () => {
  updateSignal(
    yellow,
    "assets/yellow.mp4",
    "yellow",
    "Yellow - Caution / Prepare to Stop",
    "Slow down and prepare to stop as the signal is about to change.",
  );
});
