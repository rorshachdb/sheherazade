const {BrowserWindow, ipcMain} = require("electron");
const {CHN_WIN_CLOSE, CHN_WIN_FS, CHN_WIN_MIN, CHN_WIN_UNMAX, CHN_WIN_MAX} = require("../bridge/bridge.window");

const windowHandler =
{

  init: () => {
    console.log("REGISTERING WINDOW EVENTS")

    ipcMain.on(CHN_WIN_CLOSE, (event) => {
      let win = BrowserWindow.getFocusedWindow();
      if (win) win.close();
    })

    ipcMain.on(CHN_WIN_MAX, (event) => {
      let win = BrowserWindow.getFocusedWindow();
      if (win) win.maximize();
    })

    ipcMain.on(CHN_WIN_UNMAX, (event) => {
      let win = BrowserWindow.getFocusedWindow();
      if (win) win.unmaximize();
    })

    ipcMain.on(CHN_WIN_MIN, (event) => {
      let win = BrowserWindow.getFocusedWindow();
      if (win) win.minimize();
    })

  }
}

module.exports = windowHandler
