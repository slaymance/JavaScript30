/* eslint-env browser */
const keys = document.getElementsByClassName('key');
const sounds = document.getElementsByTagName('audio');
const pairs = {};
for (let i = 0; i < keys.length; i += 1) {
  pairs[keys[i].dataset.key] = [keys[i], sounds[i]];
  keys[i].addEventListener('transitionend', (event) => {
    if (event.propertyName !== 'transform') { return; }
    keys[i].classList.remove('playing');
  });
}

document.addEventListener('keydown', (event) => {
  const pair = pairs[event.keyCode];
  if (pair) {
    pair[0].classList.add('playing');
    pair[1].currentTime = 0;
    pair[1].play();
  }
});
