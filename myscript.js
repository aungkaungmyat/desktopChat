var fs = require('fs');
var path = require('path');

var filePath = path.join(__dirname, 'userinfo.txt');

var button = document.getElementById("theButton");
var name1;
var password1;
button.onclick = function(){
  name1 = document.getElementById('name').value;
  password1 = document.getElementById('password').value;
  console.log("name is " + name1 + " and password is " + password1);
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
