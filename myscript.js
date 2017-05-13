//var hehe = require('./main');
//const {BrowserWindow} = require('electron');
var fs = require('fs');
const url = require('url');
var path = require('path');

const {ipcRenderer} = require('electron')
const {remote} = require('electron')

var filePath = path.join(__dirname, 'userinfo.txt');

var button = document.getElementById("theButton");
var name1;
var win = require('./win');
//= require('./win').name1;
var password1;
button.onclick = function(){
  name1 = document.getElementById('name').value;
  password1 = document.getElementById('password').value;
  //var obj = new win(name1);
  sname = name1;
  console.log('sname is '+sname);
  //ipcRenderer.send('asynchronous-message', 'ping');

  win.myObject(name1)
  //win.name1 = name1;
  console.log(win.name1);
  // console.log(obj.foo())
  // console.log("name is " + name1 + " and password is " + password1)//
  const window = remote.getCurrentWindow();

  /*win = new BrowserWindow({width:800, height:600, icon:__dirname+'img/gear.png'});*/
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'chat.html'),
    protocol: 'file:',
    slashes: true
  }));
  //ipcRenderer.send('asynchronous-message', 'ping');
  //window.close();
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

//module.exports.name1 = name1;
