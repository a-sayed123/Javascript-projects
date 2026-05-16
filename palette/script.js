'use strict'

function getRandomColor() {
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
return `rgb(${r}, ${g}, ${b})`;
}

function createColorBox(color) {
const box = document.createElement('div');
box.style.background = color;
box.textContent = color;
box.style.width = "100px";
box.style.height = "50px";
box.style.display = "block"
return box;
}
function copyColor(color){
    navigator.clipboard.writeText(color);
    alert('Color copied!');
}

const palette = document.getElementById('palette');
console.log(palette)
for (let i = 0; i < 5; i ++) {
const color = getRandomColor();
const box = createColorBox(color);
box.addEventListener('click', () => copyColor(color));
palette.appendChild(box);
}

