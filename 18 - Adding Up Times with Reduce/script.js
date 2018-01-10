/* eslint-env browser */

const listItems = [...document.querySelectorAll('[data-time]')];

const totalSeconds = listItems.reduce((acc, item) => {
  const [min, sec] = item.dataset.time.split(':').map(parseFloat);
  return acc + (min * 60) + sec;
}, 0);

const seconds = totalSeconds % 60;
const minutes = (Math.floor(totalSeconds / 60)) % 60;
const hours = Math.floor(totalSeconds / 3600);

console.log(`${hours} hours, ${minutes} minutes, ${seconds} seconds`);
