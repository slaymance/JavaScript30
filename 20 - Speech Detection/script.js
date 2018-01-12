/* eslint-env browser */
const SpeechRecognition = window.SpeechRecognition ||
  window.webkitSpeechRecognition;

window.SpeechRecogntion = SpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const words = document.querySelector('.words');
let p;

function appendParagraph() {
  p = document.createElement('p');
  words.appendChild(p);
}


recognition.addEventListener('result', (e) => {
  const transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;
  if (e.results[0].isFinal) {
    appendParagraph();
  }
});

recognition.addEventListener('end', recognition.start);

appendParagraph();
recognition.start();
