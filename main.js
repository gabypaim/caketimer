const {
    app,
    BrowserWindow,
    ipcMain,
    Tray,
    Menu
} = require('electron');

const path = require('path');

// Recarregamento automático somente durante o desenvolvimento
if (!app.isPackaged) {
    require('electron-reload')(__dirname, {
        electron: require(`${__dirname}/node_modules/electron`)
    });
}

let win;
let tray;

// Cria a janela quando o app estiver pronto
app.whenReady().then(() => {
    createWindow();
    createTray();
});

function createWindow() {
    win = new BrowserWindow({
        width: 592,
        height: 753,
        resizable: false,
        transparent: false,
        autoHideMenuBar: true,
        frame: false,

        icon: path.join(__dirname, 'src/assets/bolo.ico'),

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
});

    // Abre a página inicial
    win.loadFile(
        path.join(__dirname, 'src/renderer/startpage.html')
    );

    // Minimizar
    ipcMain.on('minimize', () => {
        win.minimize();
    });

    // Fechar completamente
    ipcMain.on('close', () => {
        app.isQuiting = true;
        app.quit();
    });
}

function createTray() {
    tray = new Tray(
        path.join(__dirname, 'src/assets/bolo.png')
    );

    const menu = Menu.buildFromTemplate([
        {
            label: 'Abrir CakeTimer',
            click: () => {
                win.show();
            }
        },
        {
            label: 'Sair',
            click: () => {
                app.isQuiting = true;
                app.quit();
            }
        }
    ]);

    tray.setToolTip('CakeTimer');
    tray.setContextMenu(menu);

    // Clique no ícone da bandeja → abre a janela
    tray.on('click', () => {
        win.show();
    });
}

// Indica que o aplicativo está realmente sendo encerrado
app.on('before-quit', () => {
    app.isQuiting = true;
});

// Evita que o Electron encerre sozinho por causa da janela
app.on('window-all-closed', (event) => {
    if (!app.isQuiting) {
        event.preventDefault();
    }
});