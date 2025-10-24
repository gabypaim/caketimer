 const { ipcRenderer } = require('electron');

  // Minimizar
  document.querySelector('.minimizar-icon').addEventListener('click', () => {
    ipcRenderer.send('minimize');
  });

  // Fechar
  document.querySelector('.fechar-icon').addEventListener('click', () => {
    ipcRenderer.send('close');
  });

  function start() {
    window.location.href = 'menu.html';
  }

  //som
const somselect = document.getElementById('somselect');
const minimizar = document.querySelector('.minimizar-icon');
const fechar = document.querySelector('.fechar-icon');


[minimizar, fechar].forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    somselect.currentTime = 0;
    somselect.play();
  });
});