document.title = 'dixxyycuy';
const body = document.body;

const btn1 = document.getElementById('btn-1');
const btn2 = document.querySelector('.btn-2');

const defaultText = 'klik cuy 1';

btn1.textContent = defaultText;

const newText = document.createElement('h1');
newText.textContent = 'aku dixxyy';

btn1.style.border = 'none';
btn1.style.background = 'grey';
btn1.style.fontSize = '24px';
btn1.style.padding = '5px';

console.log(btn2);

function clickButton() {
  btn1.style.background = 'lightblue';
  const newText = document.createElement('p');
  newText.textContent = 'aku dixxyy';
  body.append(newText);
}

function hoverIn() {
  btn1.textContent = 'kepencet';
  newText.style.color = 'blue';
  body.append(newText);
}

function hoverOut() {
  newText.style.color = 'tomato';
  body.append(newText);
}
