const buttons = document.querySelectorAll('#menubuttons button, #menubuttons img');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const tempo = this.getAttribute('data-tempo');

        localStorage.setItem('boloselecionado', name);
        localStorage.setItem('tempopreparo', tempo);

        window.location.href = 'caketimer.html';
    }) 

});

//som 
const hoverSound = document.getElementById('somselect');
hoverSound.load();

const botoes = document.querySelectorAll('#menubuttons img');

botoes.forEach(botao => {
  botao.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0; // reinicia o som
    hoverSound.play();           // toca o som
  });
});