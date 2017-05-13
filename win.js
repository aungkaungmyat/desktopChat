//let win;
exports.name1 = "peter";
//global.sname = 'law law sal';
//module.exports.win = win;
/*function myObject(name1){
  this.name1 = name1;
}*/

var myObject = function(name1){
  module.exports.name1 = name1;
  return;
}

var getName = function(){
  return module.exports.name1;
}
/*function myObject(){

}*/

// myObject.prototype.foo = function foo(){
//   return name1;
//}

module.exports.myObject = myObject;
module.exports.getName = getName;
//module.exports.name1 = name1;
//module.exports.name1 = this.name1;
// module.exports.name1 = name1;
//
// module.exports.get = function getName(inputName){
//   module.exports.name1 = inputName;
// }
