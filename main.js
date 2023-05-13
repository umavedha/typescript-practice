"use strict";
exports.__esModule = true;
// declare a variable properly
var message = "hi welcome";
console.log(message);
// type declaration var let const
// message=1;
// Type 'number' is not assignable to type 'string'
// any - datatype---type annotation
var a = 123;
a = 1;
a = "hi";
var b;
b = 2;
b = 2.3;
var s;
s = "hiii";
var e;
e = true;
var n;
n = null;
var u;
u = undefined;
var arr = [1, 2, 34];
var arrStr = ['uma', 'maha'];
var arrNum = [1, 2, 3];
// multiple datatype
var multiType;
multiType = 1;
multiType = "hiii";
// create an object
var obj = { name: "uma", age: 25, gender: "F" };
// obj.age= "dfg" will not allow this
// obj.address  Property 'address' does not exist on type '{ name: string; age: number; gender: string; }'
// conditional statements same as javascript
// loop same as javascript.we can also use map,filter,reduce,forEach
// function
// 1.
function sum(a, b) {
    var sum = a + b;
    return sum;
}
// console.log(sum(1,2))
// 2.change case
function changeCase(a) {
    return a.toLowerCase();
}
//  changeCase(2)
// intellisense
function changeCase2(a) {
    return a.toLowerCase();
}
// changeCase2(2) -- Argument of type '2' is not assignable to parameter of type 'string'.
changeCase2('h');
// optional argument
function changeCase3(a, b) {
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
changeCase3('H');
// default argument
function changeCase4(a, b) {
    if (b === void 0) { b = "hey"; }
    if (b)
        return a.toLowerCase() + b;
    return a.toLowerCase();
}
console.log(changeCase4('H'));
// function can also take objects
function add(point) {
    return point.x + point.y;
}
var p = { x: 2, y: 5 };
console.log(add(p));
function addition(point) {
    return point.x + point.y;
}
var q = { x: 45, y: 45 };
console.log(addition(q));
// let r ={x:45}
// console.log(addition(r));
// Argument of type '{ x: number; }' is not assignable to parameter of type 'Point'.
//   Property 'y' is missing in type '{ x: number; }' but required in type 'Point'.
