/* eslint-env browser */
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const timerButtons = document.querySelectorAll('.timer__button');

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `
    ${minutes}:${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}
  `;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minute = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${minute}`;
}

function timer(seconds) {
  const now = Date.now();
  const then = now + (seconds * 1000);

  clearInterval(countdown);
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  timer(this.dataset.time);
}

function handleSubmit(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
}

timerButtons.forEach(button =>
  button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', handleSubmit);

displayTimeLeft(0);
