var friendsAge = [15, 17, 14, 16]
var sonaliAge = friendsAge[2];
friendsAge[1] = 21;
var position = friendsAge.indexOf(16);
console.log(friendsAge.length);
friendsAge.push(19,20)
friendsAge.pop();
console.log(friendsAge);

let array = ["GFG", "Gaks", "for", "Geeks"];

let value = array.unshift('jfhjggjgf');

console.log(value);
console.log(array);

var tealine = ['palam', 'kalam', 'salam', 'balam', 'jalam', 'talam'];
var part = tealine.slice(2, 2);
console.log(part);
console.log(tealine);

var tealine = ['palam', 'kalam', 'salam', 'balam', 'jalam', 'talam'];
var part = tealine.splice(2);
console.log(part);
console.log(tealine);