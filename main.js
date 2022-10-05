const {app, BrowserWindow, ipcMain, Menu} = require('electron')
const {CHN_WIN_CLOSE, CHN_WIN_FS} = require("./electron-src/bridge/bridge.window");

const path = require('path')
const url = require('url');

const args = process.argv.slice(1);
isToolsDev = args.some(val => val === '--devTools');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    frame: true,

    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'electron-src','preload.js')
    }
  })
  // Menu.setApplicationMenu(null);
  if(isToolsDev) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`),
      hardResetMethod: 'exit',
      argv: ['--devTools']
    });
    win.loadURL('http://localhost:4200/')
    win.webContents.openDevTools()
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/sheherazade/index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  win.once('ready-to-show', () => {
    win.show();
  });


  return win;
}

app.on('ready', () => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

require('./electron-src/handler/handler.main').init()
