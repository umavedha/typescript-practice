
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