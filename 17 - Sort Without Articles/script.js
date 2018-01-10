/* eslint-env browser */

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive',
  'Anywhere But Here', 'An Old Dog'];

const list = document.querySelector('#bands');

function strip(bandName) {
  const copy = bandName;
  return copy.replace(/^(a |the |an )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

list.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
