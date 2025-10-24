// ---------- Pegando elementos ----------
const nameBolo = document.getElementById('nome-bolo');
const timerElement = document.getElementById('tempo-timer');

// ---------- Pegando dados do localStorage ----------
const nomeSelecionado = localStorage.getItem('boloselecionado');
const tempo = localStorage.getItem('tempopreparo');

// ---------- Atualiza o nome do bolo ----------
nameBolo.textContent = nomeSelecionado;

// ---------- Pré-carregar imagens do forno ----------
const imagensForno = [
    "../assets/forno-animation/fogao.png",
    "../assets/forno-animation/fogao2.png",
    "../assets/forno-animation/fogao3.png",
    "../assets/forno-animation/fogao4.png"
];

imagensForno.forEach(src => {
    const img = new Image();
    img.src = src;
});

// ---------- Timer do bolo ----------
let tempoRestante = parseInt(tempo) * 60; // converte minutos em segundos

function atualizarDisplay() {
    const minutos = Math.floor(tempoRestante / 60);
    const segundos = tempoRestante % 60;
    timerElement.textContent = `${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`;
}

// Atualiza imediatamente ao abrir a página
atualizarDisplay();

// Inicia o timer
const intervaloTimer = setInterval(() => {
    tempoRestante--;
    atualizarDisplay();

    if (tempoRestante < 0) {
        clearInterval(intervaloTimer);
        timerElement.textContent = "00:00";
        window.location.href = 'bolodone.html';
    }
}, 1000);

//som
const botao = document.getElementById('button');
const selectsom = document.getElementById('somselect');

botao.addEventListener('mouseenter', () => {
  selectsom.currentTime = 0; 
  selectsom.play();           
});
