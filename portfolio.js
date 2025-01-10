function christmasCountdown() {
  const christmasDate = new Date("December 25, 2025 00:00");
  const now = new Date();
  const diff = christmasDate - now;

  const msInSeconds = 1000;
  const msInMinutes = 60 * 1000;
  const msInHours = 60 * 60 * 1000;
  const msInDays = 24 * 60 * 60 * 1000;

  const displayDay = Math.floor(diff / msInDays);
  document.querySelector(".days").textContent = displayDay;

  const displayHour = Math.floor((diff % msInDays) / msInHours);
  document.querySelector(".hours").textContent = displayHour;

  const displayMinute = Math.floor((diff % msInHours) / msInMinutes);
  document.querySelector(".minutes").textContent = displayMinute;

  const displaySecond = Math.floor((diff % msInMinutes) / msInSeconds);
  document.querySelector(".seconds").textContent = displaySecond;

  if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timeID);
    merryChristmas();
  }
}
let timeID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
  const heading = document.querySelector("h1");
  heading.textContent = "MERRY CHRISTMAS!!!";
  heading.classList.add("new-heading");
}

const button = document.querySelector("#my-button");
const audio = document.querySelector("#myAudio");
button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
