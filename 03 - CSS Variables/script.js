/* eslint-env browser */
const inputs = document.querySelectorAll('.controls input');

const handleChange = (e) => {
  const suffix = e.currentTarget.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${e.currentTarget.name}`,
    e.currentTarget.value + suffix,
  );
};

inputs.forEach(input => input.addEventListener('change', handleChange));
inputs.forEach(input => input.addEventListener('mousemove', handleChange));
