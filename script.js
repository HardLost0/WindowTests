const button = document.getElementById('follow-button');
const offsetX = 50;
const offsetY = 20;

document.addEventListener('mousemove', (e) => {
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;
  button.style.left = x + 'px';
  button.style.top = y + 'px';
});

const yesButton = document.getElementById('yes-button');

yesButton.addEventListener('click', () => {
  yesButton.style.display = 'none';
});