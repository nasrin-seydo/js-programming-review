/*

let---> it ia avariable in the same scope block,and in any nested block scope, it can be reassigned and updated

const---> it is a variable in the same scope block, and in any nested block scope, it can not be reassigned and updated

var---> it is a variable in the same function scope, and in any nested function scope, it can be reassigned and updated
*/

let name = 'Nasrin';
let age = 30;
let is_student = true;
{
let a = 20;
var b = 30;

console.log(a);//20
console.log(b);//30
}
var b = 40;
let a = 100;
console.log(b);//40
console.log(a);//20
