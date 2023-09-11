var promise = "I promies i will work hard to become a programmer";
console.log(promise.toLowerCase());

var promise = "I promies i will work hard to become a programmer";
console.log(promise.toUpperCase());

var promise = "I promies i will work hard to become a programmer";
console.log(promise.indexOf("will"));

var promise = "I promies I will work hard to become a programmer";
console.log(promise.indexOf("HARD"));

var promise = "I promies i will work hard to become a programmer";
console.log(promise.split("I"));

var promise = "I promies i will work hard to become a programmer";
console.log(promise.split(" "));

var number1 = 25;
var number2 = 15.5;
console.log(number1 + number2);

var number1 = "25";
var number2 = 15.5;
console.log(number1 + number2);

var number1 = "25";
var number2 = 15.5;
console.log(number1 + number2);

var number1 = 25;
var number2 = "15.5";
number2 = parseFloat(number2)
console.log(number1 + number2);

var number1 = 25;
var number2 = "15.5";
number2 = parseInt(number2)
console.log(number1 + number2);

var number1 = 25;
var number2 = "15.5";
number2 = +number2;
console.log(number1 + number2);

var number1 = 25;
var number2 = 15.5;
number1 = '' + number1;
console.log(typeof number1);

var number1 = 0.1;
var number2 = 0.2;
var total = number1 + number2
total = total.toFixed(1)
console.log(total);

var price1 = 25;
var price2 = 35;
var total = price1 + price2;
console.log(total)

var price1 = 25;
var price2 = 35;
var total = price2 - price1;
console.log(total)

var price1 = 25;
var price2 = 35;
var total = price2 * price1;
console.log(total)

var price1 = 25;
var price2 = 35;
var total = price2 / price1;
console.log(total)

var price1 = 25;
var price2 = 35;
var total = price2 % price1;
console.log(total)

var price1 = 25;
var price2 = 35;
price2++;
console.log(price2)

var price1 = 25;
var price2 = 35;
price2--;
console.log(price2)

var price1 = 25;
var name = "alu";
var result = price1 + name;
console.log(result);

var price1 = 25;
var name = "alu";
var result = name + price1;
console.log(result);

var price1 = 25;
var name = "35";
var result = price1 + name;
console.log(result);

var price1 = "Jakir";
var name = "Hossain";
var result = price1 + name;
console.log(result);

var price1 = "Jakir";
var name = "Hossain";
var result = price1 + " " + name;
console.log(result);

var number = -5;
var result = Math.abs(number);
console.log(result);

var number = 5.4900000;
var result = Math.round(number);
console.log(result);

var number = 5.141155;
var result = Math.ceil(number);
console.log(result);

var number = 5.141155;
var result = Math.floor(number);
console.log(result);

var number = Math.random()*100;
var result = Math.round(number);
console.log(result)