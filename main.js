const { app, BrowserWindow } = require('electron');
const path = require('path');

// Recarregamento automático
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
  const win = new BrowserWindow({
    width: 592,
    height: 753,
    resizable: false,
    transparent: false,
    autoHideMenuBar: true,
    frame: false,  // <- vírgula adicionada aqui
    webPreferences: {
    nodeIntegration: true,
    contextIsolation: false,
    }
  });
  

  // define qual HTML abrir primeiro
  win.loadFile(path.join(__dirname, 'src/renderer/startpage.html'));
  
}

// Cria a janela quando o app estiver pronto
app.whenReady().then(createWindow);

// Fecha o app quando todas as janelas forem fechadas (exceto no macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const { ipcMain } = require('electron'); // adicione no topo junto dos imports

function createWindow() {
  const win = new BrowserWindow({
    width: 592,
    height: 753,
    resizable: false,
    transparent: false,
    autoHideMenuBar: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  // define qual HTML abrir primeiro
  win.loadFile(path.join(__dirname, 'src/renderer/startpage.html'));

  // Escuta eventos do renderer (HTML)
  ipcMain.on('minimize', () => {
    win.minimize();
  });

  ipcMain.on('close', () => {
    win.close();
  });
}
