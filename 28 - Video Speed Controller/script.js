/* eslint-env browser */
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function changePlaybackRate(percent) {
  const min = 0.4;
  const max = 4;
  const playbackRate = (percent * (max - min)) + min;
  video.playbackRate = playbackRate;
  return playbackRate;
}

function styleSpeedBar(e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = changePlaybackRate(percent);
  bar.style.height = height;
  bar.textContent = `${playbackRate.toFixed(1)}x`;
}

speed.addEventListener('mousemove', styleSpeedBar);
