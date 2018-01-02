/* eslint-env browser */
let keySequence = [];
const secretCode = 'shane';
document.addEventListener('keydown', (e) => {
  if (e.key === secretCode[keySequence.length]) {
    keySequence.push(e.key);
  } else {
    keySequence = [];
    return;
  }

  if (keySequence.length === secretCode.length) {
    cornify_add();
    keySequence = [];
  }
});
