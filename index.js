const electron = require("electron");
const cookies = electron.cookies;
const url = require("url");
const path = require("path");
//const ElectronCookies = require('@exponent/electron-cookies');

// Add support for document.cookie, using the given origin (protocol, host, and
// port)
/*ElectronCookies.enable({
  origin: 'https://www.adventurebox.com',
});*/

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('browser-window-created',function(e,window) {
    window.setMenu(null);
});

app.on("ready", function(){
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      partition: "persist:adventurebox"
    }
  });
  mainWindow.loadURL(/*url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file:",
    slashes: true
  })*/ "https://www.adventurebox.com");
});
