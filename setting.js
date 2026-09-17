const STORAGE_KEY = "pomodoroMinutes";
const DEFAULT_MINUTES = 25;
const MIN_MINUTES = 1;
const MAX_MINUTES = 60;

const minutesInput = document.getElementById("timer-minutes");
const confirmBtn = document.getElementById("confirm-btn");

function getStoredMinutes() {
  const stored = Number(localStorage.getItem(STORAGE_KEY));
  return stored >= MIN_MINUTES && stored <= MAX_MINUTES ? stored : DEFAULT_MINUTES;
}

function isValidMinutes(value) {
  if (value === "") {
    return false;
  }

  const minutes = Number(value);
  return Number.isFinite(minutes) && minutes >= MIN_MINUTES && minutes <= MAX_MINUTES;
}

function handleInputChange() {
  confirmBtn.disabled = !isValidMinutes(minutesInput.value);
}

function saveSettings() {
  if (!isValidMinutes(minutesInput.value)) {
    return;
  }

  localStorage.setItem(STORAGE_KEY, Number(minutesInput.value));
  location.href = "index.html";
}

minutesInput.value = getStoredMinutes();
handleInputChange();
