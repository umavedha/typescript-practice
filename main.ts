
export{};
// declare a variable properly

let message="hi welcome";
console.log(message);

// type declaration var let const

// message=1;
// Type 'number' is not assignable to type 'string'
// any - datatype---type annotation
let a:any=123;
a=1;
a="hi";

let b:number;
b=2;
b=2.3;

let s:string;
s="hiii";

let e:boolean;
e=true;

let n:null;
n=null;

let u:undefined;
u=undefined;

let arr=[1,2,34]

let arrStr:string[]=['uma','maha']

let arrNum:Array<number>=[1,2,3]

// multiple datatype

let multiType:number|string;

multiType=1;
multiType="hiii"

// create an object

let obj={name:"uma",age:25,gender:"F"}
// obj.age= "dfg" will not allow this
// obj.address  Property 'address' does not exist on type '{ name: string; age: number; gender: string; }'

// conditional statements same as javascript

// loop same as javascript.we can also use map,filter,reduce,forEach

// function
// 1.
function sum(a:number,b:number):number{
 let sum =a+b
 return sum
}

// console.log(sum(1,2))

// 2.change case

function changeCase(a){
    return a.toLowerCase()
   }
//  changeCase(2)
// intellisense
function changeCase2(a:string){
return a.toLowerCase()
}

// changeCase2(2) -- Argument of type '2' is not assignable to parameter of type 'string'.
changeCase2('h')

// optional argument

function changeCase3(a:string,b?:string){
   if(b)  
        return a.toLowerCase()+b
        return a.toLowerCase()
    }
    changeCase3('H')

// default argument

function changeCase4(a:string,b:string="hey"){
    if(b)  
         return a.toLowerCase()+b
         return a.toLowerCase()
    }
     console.log( changeCase4('H'))

// function can also take objects

function add(point:{x:number,y:number}){
    return point.x + point.y
}
let p ={x:2,y:5}
console.log(add(p));

// interface

interface Point{
    x:number,
    y:number
}

function addition(point:Point){
    return point.x + point.y
}

let q ={x:45,y:45}
console.log(addition(q));
