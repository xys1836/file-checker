const { app, BrowserWindow } = require('electron')
const FileScanner = require('./utils/file-scanner')

// use for automatically reload when file is saved.
try {
    require('electron-reloader')(module)
} catch (_) {}

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  // open dev tools
  win.webContents.openDevTools()

  win.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// Test class and log
console.log('ok');
var fileScanner = new FileScanner('new file scaner');
fileScanner.print();