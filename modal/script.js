'use strict'

const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const overlay = document.getElementById('overlay');
openBtn.addEventListener('click', showModal);


function showModal() {
modal.style.display = 'block';
}
function hideModal() {
modal.style.display = 'none';
overlay.style.display = "none";
}


closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
