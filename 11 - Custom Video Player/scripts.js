/* eslint-env browser */

const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const inputSliders = document.querySelectorAll('.player__slider');
const progressBar = document.querySelector('.progress');
const elapsedVideoBar = document.querySelector('.progress__filled');

function togglePlay() {
  if (video.paused) {
    playButton.textContent = '';
    video.play();
  } else {
    playButton.textContent = '►';
    video.pause();
  }
}

function handleSliderChange(e) {
  video[this.name] = e.currentTarget.value;
}

function changeElapsedVideoBar() {
  const percent = (video.currentTime / video.duration) * 100;
  elapsedVideoBar.style.flexBasis = `${percent}%`;
}

function handleSkipClick() {
  video.currentTime += Number(this.dataset.skip);
}

function handleProgressBarClick(e) {
  video.currentTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
}

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', changeElapsedVideoBar);

playButton.addEventListener('click', togglePlay);

inputSliders.forEach((slider) => {
  slider.addEventListener('mousemove', handleSliderChange);
  slider.addEventListener('click', handleSliderChange);
});

skipButtons.forEach(button =>
  button.addEventListener('click', handleSkipClick));

let mouseDown = false;
progressBar.addEventListener('click', handleProgressBarClick);
progressBar.addEventListener('movemove', e =>
  mouseDown && handleProgressBarClick(e));
progressBar.addEventListener('movedown', () => mouseDown = true);
progressBar.addEventListener('moveup', () => mouseDown = false);
