// when we put access specifier in constructor it also act as member variable

// class
export{}
class Car{
    engine:string;
    constructor(engine:string){
        this.engine=engine;
    }
    start(){
       return "Started "+this.engine
    }
    stop(){
        return "Stopped "+this.engine
     }
     

}

// class Cars{
//     constructor(public engine:string){}
//     start(){
//         return "Started "+this.engine
//      }
//      stop(){
//          return "Stopped "+this.engine
//       }
// }

// let cars = new Cars('Mercedez Benz')
// console.log(cars);
// console.log(cars.start());
console.log('---------------------------');

let car1=new Car('Audi')
console.log(car1)
console.log(car1.start())
console.log('---------------------------');
let car2=new Car('Jaguar')
console.log(car2.start())
console.log('---------------------------');



class Car1{
   private _engine:string;
    constructor(engine:string){
        this.engine=engine;
        // console.log(this.engine)
    }
    get engine():string{
        console.log('inside get')
        return this._engine
    }
    set engine(value:string){
        if(value==undefined) throw 'supply an engine';

        this._engine=value
        console.log('inside set')

    }
    getMyEngine(){
        return this._engine
    }
     
}
let car=new Car1('BMW')
console.log(car)
console.log(car.getMyEngine())
console.log(car.engine)
console.log('---------------------------');
let carss=new Car1('Toyota')
console.log(carss.engine)
console.log('---------------------------');

// inheritance
class Engine{
    constructor(public horsepower:number,public engineType:string){
    }
}

class Auto{
    engine:Engine;
    constructor(engine:Engine){
        this.engine=engine;
    }
    getHp(){
        return this.engine.horsepower
      }
}

class Truck extends Auto{
    // fourByFour:boolean;
    constructor(engine:Engine,public fourByFour:boolean){
        super(engine)
    }
    
}

let engine= new Engine(200,'Ashok Leyland')

let truck=new Truck(engine,true)
console.log(truck)
console.log(truck.getHp())

console.log('---------------------------');

