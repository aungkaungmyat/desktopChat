//var hehe = require('./main');
//const {BrowserWindow} = require('electron');
var fs = require('fs');
const url = require('url');
var path = require('path');
let win = require('./win')
const {ipcRenderer} = require('electron')

var filePath = path.join(__dirname, 'userinfo.txt');

var button = document.getElementById("theButton");
var name1;
var password1;
button.onclick = function(){
  name1 = document.getElementById('name').value;
  password1 = document.getElementById('password').value;
  console.log("name is " + name1 + " and password is " + password1)//

  /*win = new BrowserWindow({width:800, height:600, icon:__dirname+'img/gear.png'});
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'chat.html'),
    protocol: 'file:',
    slashes: true
  }));*/
  ipcRenderer.send('asynchronous-message', 'ping');
}




function auth(tname, tpass){
  if(password1.localeCompare(tpass) == 0){
    return true;
  }
  return false;
}

fs.readFile(filePath, 'utf8', function(err, contents) {
    console.log(contents);
});
