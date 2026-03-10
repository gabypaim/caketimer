# CakeTimer 🍰⏱️
O **CakeTimer** é um aplicativo desktop que eu desenvolvi usando **Electron** e **JavaScript** para ajudar a acompanhar o tempo de preparo de diferentes tipos de bolo.
A ideia é simples: você escolhe o tipo de bolo no menu e o aplicativo inicia um timer com o tempo ideal de preparo. Durante a contagem regressiva, uma imagem do bolo escolhido aparece na tela.
Criei esse projeto para praticar **Electron**, lógica em **JavaScript** e também para organizar melhor um projeto com **HTML, CSS e JS** separados em diferentes partes.

## Demonstração 

[ Assistir demonstração ](https://www.youtube.com/watch?v=Xsbu20aNYZg)

## 🛠️ Tecnologias utilizadas 

- **Electron:** para transformar o projeto em um aplicativo desktop
- **JavaScript:** lógica do timer e interação com a interface
- **HTML e CSS:** estrutura e estilo do aplicativo

## Como abrir o projeto

Antes de tudo, é preciso ter o [Node.js](https://nodejs.org/) instalado.

1. **Clone o repositório:**

    ```bash
    git clone <link-do-repositório>
    cd caketimer
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Execute o aplicativo:**

    ```bash
    npm start
    ```


## 📁 Estrutura de pastas 
```
CAKETIMER/
│
├── node_modules/
├── src/
│   ├── assets/              # Imagens, fontes, sons
│   ├── renderer/            # HTML, CSS e JS do front-end
│   │   ├── javascripts/
│   │   │   ├── bolodone.js
│   │   │   ├── closeopen.js
│   │   │   ├── menu.js
│   │   │   └── timer.js
│   │   ├── bolodone.html
│   │   ├── caketimer.html
│   │   ├── menu.html
│   │   ├── startpage.html
│   │   ├── style.css
│   │   └── index.html
│   └── main.js
├── package.json
├── package-lock.json
└── README.md
```
##  Avisos importantes

- Este código é apenas para **uso pessoal e não comercial**.
- As imagens do projeto podem ser substituídas por suas próprias artes.

## Inspiração

A ideia para o **CakeTimer** foi inspirada por um projeto semelhante encontrado no YouTube. O código-fonte foi desenvolvido de forma totalmente independente, utilizando apenas o conceito como base.

**Referência da Ideia:** [vídeo](https://www.youtube.com/watch?v=4TODW-IP4XM)

## Artes / Créditos

Todas as artes e imagens do projeto foram criadas por mim (Gaby Paim) exclusivamente para este aplicativo.
Elas são apenas ilustrativas e **não devem ser usadas comercialmente sem permissão**.

### Efeitos Sonoros
O som de clique (`Minimal Pop Click UI 1`) foi obtido no [Pixabay](https://pixabay.com/pt/sound-effects/minimal-pop-click-ui-1-198301/)  e é distribuído sob a Licença Conteúdo Pixabay (não exige atribuição).

