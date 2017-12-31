/* eslint-env browser */

const boxes = document.querySelectorAll('input');

let lastChecked;

boxes.forEach((box, index) => {
  box.addEventListener('click', (e) => {
    if (lastChecked === undefined) {
      lastChecked = index;
    } else if (e.shiftKey) {
      for (
        let i = Math.min(lastChecked, index) + 1;
        i < Math.max(lastChecked, index);
        i += 1
      ) {
        boxes[i].checked = true;
      }
    }
    lastChecked = index;
  });
});
