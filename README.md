# CakeTimer 🍰⏱️
Aplicativo desktop desenvolvido com **Electron** e **JavaScript** que permite selecionar diferentes tipos de bolos e acompanhar o tempo de preparo com um **timer visual**. Cada bolo tem um tempo específico e uma imagem correspondente.

---

## 🍰 Demonstração do CakeTimer

[![Assista a Demonstração Completa no YouTube](http://img.youtube.com/vi/Xsbu20aNYZg/0.jpg)](https://www.youtube.com/watch?v=Xsbu20aNYZg)

## Funcionalidades

- Menu interativo para escolher o tipo de bolo
- Timer com contagem regressiva de acordo com o tipo de bolo selecionado
- Exibição de imagem correspondente ao bolo escolhido
- Botão para voltar ao menu e selecionar outro bolo
- Estrutura organizada de pastas (HTML, CSS, JS e assets)

---

## 🛠️ Tecnologias utilizadas 
>>>>>>> bb6d2a849779bfd62647ca706c900296447bba48

- **Electron:** Criação de aplicativos desktop multiplataforma
- **JavaScript:** Lógica do timer e manipulação do DOM
- **HTML e CSS:** Estrutura e estilo do aplicativo

## Como abrir o projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

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

=======
## 📁 Estrutura de pastas 
>>>>>>> bb6d2a849779bfd62647ca706c900296447bba48
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
## ⚠️ Avisos importantes

- Este código é apenas para **uso pessoal e não comercial**.
- As imagens do projeto podem ser substituídas por suas próprias artes.

## ✨ Inspiração

A ideia para o **CakeTimer** foi inspirada por um projeto semelhante encontrado no YouTube. O código-fonte foi desenvolvido de forma totalmente independente, utilizando apenas o conceito como base.

**Referência da Ideia:** [Link para o vídeo](https://www.youtube.com/watch?v=4TODW-IP4XM)

## 🎨 Artes / Créditos

Todas as artes e imagens usadas neste projeto são criações próprias do autor (Gaby Paim). Elas servem apenas para fins ilustrativos no aplicativo e **não devem ser usadas comercialmente sem permissão**.

### Efeitos Sonoros
O efeito sonoro de clique (`Minimal Pop Click UI 1`) foi obtido no [Pixabay](https://pixabay.com/pt/sound-effects/minimal-pop-click-ui-1-198301/) e é usado sob a Licença Conteúdo Pixabay (Nenhuma atribuição necessária).

## 📝 Licença

© 2025 Gaby Paim

**Licença Creative Commons Atribuição-NãoComercial 4.0 Internacional (CC BY-NC 4.0)** — Uso pessoal e não comercial.

Para mais informações sobre a licença: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.pt)
