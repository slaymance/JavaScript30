/* eslint-env browser */
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates.map((plate, index) => `
    <li>
      <input
        type="checkbox"
        data-index=${index}
        id="item${index}"
        ${plate.done ? 'checked' : ''}
      />
      <label for="item${index}">${plate.text}</label>
    </li>
  `).join('');
}

function addItem(e) {
  e.preventDefault();

  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function toggleDone(e) {
  if (e.target.matches('input')) {
    const clickedIndex = e.target.dataset.index;
    items[clickedIndex].done = !items[clickedIndex].done;
    localStorage.setItem('items', JSON.stringify(items));
  }
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
