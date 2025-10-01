// index.js

// Remove the <main id="main"> element from the DOM
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'VICTOR is the champion';

// Append the newHeader to the body
document.body.appendChild(newHeader);

// Make newHeader global for tests
window.newHeader = newHeader;