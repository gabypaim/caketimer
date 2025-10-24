const imageMap = {
    "Pão de Ló": "../assets/paodelo.png",
    "Bolo": "../assets/bolo.png",
    "Cupcake": "../assets/cupcake.png",
    "Cookie": "../assets/cookie.png",
};

const imagembolo = document.getElementById('imagem-bolo');
const namebolo = document.getElementById('nome-bolo');

const nomeselecionado = localStorage.getItem('boloselecionado');


namebolo.textContent = `${nomeselecionado}`;

const imageFile = imageMap[nomeselecionado];
if (imageFile) {
    imagembolo.src = imageFile;
    imagembolo.alt = nomeselecionado;
} else {
    imagembolo.style.display = 'none';
}

//som
const botao = document.getElementById('button');
const selectsom = document.getElementById('somselect');

botao.addEventListener('mouseenter', () => {
  selectsom.currentTime = 0; 
  selectsom.play();           
});