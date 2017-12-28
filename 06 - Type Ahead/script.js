/* eslint-env browser */

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch and cache cities array
fetch(endpoint)
  .then(response => response.json())
  .then(responseCities => cities.push(...responseCities));

// select relevant document elements
const suggestions = document.querySelector('.suggestions');
const search = document.querySelector('.search');
const defaultListItems = document.querySelectorAll('li');

function findMatches(wordToMatch, regex) {
  return cities.filter(({ city, state }) =>
    city.match(regex) || state.match(regex));
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function appendMatches() {
  suggestions.innerHTML = '';

  if (!this.value) {
    defaultListItems.forEach(item => suggestions.appendChild(item));
  } else {
    const regex = new RegExp(this.value, 'gi');
    const matchArray = findMatches(this.value, regex);

    const html = matchArray.map(({ city, state, population }) => {
      const cityName = city.replace(regex, `<span class='hl'>${this.value}</span>`);
      const stateName = state.replace(regex, `<span class='hl'>${this.value}</span>`);
      return `
        <li>
          <span class='name'>${cityName}, ${stateName}</span>
          <span class='population'>${numberWithCommas(population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }
}


search.addEventListener('keyup', appendMatches);
