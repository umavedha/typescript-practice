"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// declare a variable properly
var message = "hi welcome";
// console.log(message);
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
//  console.log( changeCase4('H'))
// function can also take objects
function add(point) {
    return point.x + point.y;
}
var p = { x: 2, y: 5 };
function addition(point) {
    return point.x + point.y;
}
var q = { x: 45, y: 45 };
// console.log(addition(q));
// let r ={x:45}
// console.log(addition(r));
// Argument of type '{ x: number; }' is not assignable to parameter of type 'Point'.
//   Property 'y' is missing in type '{ x: number; }' but required in type 'Point'.
// enum - special type
var Department;
(function (Department) {
    Department[Department["Mech"] = 0] = "Mech";
    Department[Department["ECE"] = 1] = "ECE";
    Department[Department["EEE"] = 2] = "EEE";
    Department[Department["IT"] = 3] = "IT";
    Department[Department["CSE"] = 4] = "CSE";
    Department[Department["MSc"] = 5] = "MSc";
})(Department || (Department = {}));
console.log('Enum-Department:', Department.MSc);
console.log('----------------------------------');
// generics
var myFunction = function (o) {
    // spread operator ...o
    return __assign(__assign({}, o), { greet: 'hi' });
};
var o = { name: 'uma', age: 20 };
var f = myFunction(o);
console.log('spread parameter', f);
// console.log(f.name); property does not exist
console.log('----------------------------------');
var myFunction1 = function (o) {
    // T is generics
    // spread operator ...o
    return __assign(__assign({}, o), { greet: 'hey' });
};
var g = myFunction1('h');
console.log('Generic', g);
console.log('----------------------------------');
//Object can be updated/modified in four ways 
// 1.Spread parameter
// 2.Object.assign
// 3.Json.stringify-->json.parse
var numArray = [1, 23, 3];
// numArray:number[] same can be written as a:Array<number>
var strArray = ['a', 'b', 'c'];
// strArray:string[]
var myFunction2 = function (a) {
    // spread operator ...o
    return [a];
};
// let myFunction2=(a:number):number[]=>{
//     // spread operator ...o
//     return [a]
// }
var valArr = myFunction2(1);
console.log('generic using array', valArr);
// console.log(f.name); property does not exist
console.log('----------------------------------');
var mulArr;
mulArr = [];
