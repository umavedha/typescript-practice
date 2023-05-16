export{}
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting=message
    }
    greet(){
        return "Hello, "+this.greeting
    }
}
let g= new Greeter('Uma')
console.log(g.greet())