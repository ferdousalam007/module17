var newNumbers = [20, 23, 25, 26, 30];
//push method in array this method add element last serials
var add = newNumbers.push(40);
var add = newNumbers.push(50);
var add = newNumbers.push(60);
// console.log(add);
console.log(newNumbers);
//pop method in array this method remove element last serials
var remove = newNumbers.pop();
var remove = newNumbers.pop();
// console.log(remove);
console.log(newNumbers);
//How to Add New Elements at the Beginning of an Array in JavaScript
var newNumbersAddBegining = [20, 23, 25, 26, 30];
var addBegining = newNumbersAddBegining.unshift(45,60,33);
console.log(newNumbersAddBegining);

//How to remove New Elements at the Beginning of an Array in JavaScript
var newNumbersRemoveBegining = [20, 23, 25, 26, 30,55,88,99];
var removeBegining = newNumbersRemoveBegining.shift();
console.log(newNumbersRemoveBegining); 