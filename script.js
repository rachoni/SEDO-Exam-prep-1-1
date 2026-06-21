// Calculator application with QUnit tests
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function calculateAndDisplay(fn) {
  const rawA = document.getElementById('a').value;
  const rawB = document.getElementById('b').value;

  if (rawA === '' || rawB === '') {
    document.getElementById('result').textContent = 'Please fill both inputs';
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);
  document.getElementById('result').textContent = fn(a, b);
}

function init() {
  ['add', 'subtract', 'multiply'].forEach(op => {
    document.getElementById(`btn-${op}`)
      ?.addEventListener('click', () => calculateAndDisplay(window[op]));
  });
}

// Run initialization for production environment
init();
// Wrap event listeners in a function so we can re-initialize them in tests if needed
function init() {
  document.getElementById('btn-add')
    ?.addEventListener('click', () => calculateAndDisplay(add));

  document.getElementById('btn-subtract')
    ?.addEventListener('click', () => calculateAndDisplay(subtract));

  document.getElementById('btn-multiply')
    ?.addEventListener('click', () => calculateAndDisplay(multiply));
}

// Run initialization
init();
  const a = Number(document.getElementById('a').value);
  const b = Number(document.getElementById('b').value);
  document.getElementById('result').textContent = fn(a, b);
}

document.getElementById('btn-add')
  ?.addEventListener('click', () => calculateAndDisplay(add));

document.getElementById('btn-subtract')
  ?.addEventListener('click', () => calculateAndDisplay(subtract));

document.getElementById('btn-multiply')
  ?.addEventListener('click', () => calculateAndDisplay(multiply));
