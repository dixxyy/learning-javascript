document.title = 'dixxyycuy';

const btn1 = document.getElementById('btn-1');
const btn2 = document.querySelector('.btn-2');

const defaultText = 'klik cuy 1';

btn1.textContent = defaultText;

btn1.style.border = 'none';
btn1.style.background = 'grey';
btn1.style.fontSize = '24px';
btn1.style.padding = '5px';

console.log(btn2);

function gantiWarna() {
  btn1.style.background = 'lightblue';
}

function hoverIn() {
  btn1.textContent = 'kepencet';
}

function hoverOut() {
  btn1.textContent = defaultText;
}
