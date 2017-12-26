/* eslint-env browser */
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const initialTime = new Date();
const initialHour = initialTime.getHours();
const initialMin = initialTime.getMinutes();
const initialSecond = initialTime.getSeconds();

// Testers
// const initialHour = 12;
// const initialMin = 25;
// const initialSecond = 0;

hourHand.style.transform = `rotate(
  ${(30 * initialHour) + 90 + (Math.floor(initialMin / 12))}deg
)`;
minHand.style.transform = `rotate(
  ${(6 * initialMin) + 90}deg
)`;
secondHand.style.transform = `rotate(
  ${(6 * initialSecond) + 90}deg
)`;

setInterval(() => {
  const newTime = new Date();
  const newHour = newTime.getHours();
  const newMin = newTime.getMinutes();
  const newSecond = newTime.getSeconds();

  hourHand.style.transform = `rotate(
    ${(30 * newHour) + 90 + (Math.floor(newMin / 12))}deg
  )`;
  minHand.style.transform = `rotate(
    ${(6 * newMin) + 90}deg
  )`;
  secondHand.style.transform = `rotate(
    ${(6 * newSecond) + 90}deg
  )`;
}, 1000);
