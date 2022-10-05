const {contextBridge, ipcMain, ipcRenderer, BrowserWindow} = require('electron')
const fs = require('fs');
const path = require('path')

console.log("GENERATING WINDOW BRIDGE")

const CHN_WIN_CLOSE = 'win::close';
const CHN_WIN_FS = 'win::isFullScreen';
const CHN_WIN_MAX = 'win::maximize';
const CHN_WIN_UNMAX = 'win::unmaximize';
const CHN_WIN_MIN = 'win::minimize';
windowBridge = {
  closeApp: () => ipcRenderer.send(CHN_WIN_CLOSE),
  maximizeApp: () => ipcRenderer.send(CHN_WIN_MAX),
  unMaximizeApp: () => ipcRenderer.send(CHN_WIN_UNMAX),
  reduceApp: () => ipcRenderer.send(CHN_WIN_MIN),
}

module.exports = {windowBridge,CHN_WIN_CLOSE,CHN_WIN_FS,CHN_WIN_MAX, CHN_WIN_MIN, CHN_WIN_UNMAX};
