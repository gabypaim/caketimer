function start() {
    window.location.href = 'menu.html'
}

const botao = document.getElementById('start-button');
const selectsom = document.getElementById('somselect');

botao.addEventListener('mouseenter', () => {
  selectsom.currentTime = 0; 
  selectsom.play();           
});

