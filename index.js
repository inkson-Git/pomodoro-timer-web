const STORAGE_KEY = "pomodoroMinutes";
const DEFAULT_MINUTES = 25;
const MIN_MINUTES = 1;
const MAX_MINUTES = 60;

const timeDisplay = document.getElementById("time-display");

function getStoredMinutes() {
  const stored = Number(localStorage.getItem(STORAGE_KEY));
  return stored >= MIN_MINUTES && stored <= MAX_MINUTES ? stored : DEFAULT_MINUTES;
}

let remainingSeconds = getStoredMinutes() * 60;
let intervalId = null;

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (intervalId !== null) {
    return;
  }

  intervalId = setInterval(() => {
    if (remainingSeconds <= 0) {
      stopTimer();
      return;
    }

    remainingSeconds -= 1;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  remainingSeconds = getStoredMinutes() * 60;
  updateDisplay();
}

updateDisplay();
