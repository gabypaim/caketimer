# CakeTimer 🍰⏱️
O CakeTimer é um aplicativo desktop feito com Electron e JavaScript que ajuda a acompanhar o tempo de preparo de diferentes tipos de bolo.
Você escolhe o bolo, o app inicia um timer visual com o tempo ideal e exibe uma imagem correspondente.

---

## 🍰 Demonstração do CakeTimer

[ Assistir demonstração ](https://www.youtube.com/watch?v=Xsbu20aNYZg)


---

## Funcionalidades

- Menu interativo para escolher o tipo de bolo
- Timer com contagem regressiva de acordo com o tipo de bolo selecionado
- Exibição de imagem correspondente ao bolo escolhido
- Botão para voltar ao menu e selecionar outro bolo
- Estrutura organizada de pastas (HTML, CSS, JS e assets)

---

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

**Referência da Ideia:** [Link para o vídeo](https://www.youtube.com/watch?v=4TODW-IP4XM)

## Artes / Créditos

Todas as artes e imagens do projeto foram criadas por mim (Gaby Paim) exclusivamente para este aplicativo.
Elas são apenas ilustrativas e **não devem ser usadas comercialmente sem permissão**.

### Efeitos Sonoros
O som de clique (`Minimal Pop Click UI 1`) foi obtido no [Pixabay](https://pixabay.com/pt/sound-effects/minimal-pop-click-ui-1-198301/)  e é distribuído sob a Licença Conteúdo Pixabay (não exige atribuição).

## Licença

© 2025 Gaby Paim

**Licença Creative Commons Atribuição-NãoComercial 4.0 Internacional (CC BY-NC 4.0)** — Uso pessoal e não comercial.

Para mais informações sobre a licença: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.pt)
