const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
var express = require('express');
var server = express();
let win = require('./win')
const {ipcMain} = require('electron');

//let win;

function createWindow(){
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'img/gear.png'});

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'login.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  //console.log(win.webContents);

  win.on('closed', ()=>{
    win =  null;
  })
};

function changeWindow(){
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'img/gear.png'});

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'chat.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  //console.log(win.webContents);

  win.on('closed', ()=>{
    win =  null;
  })
};

app.on('ready', createWindow);

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg)  // prints "ping"
  changeWindow()
  //event.sender.send('asynchronous-reply', 'done')
})

app.on('window-all-closed',()=>{
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

//module.exports.win = win;
