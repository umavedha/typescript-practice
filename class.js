"use strict";
// when we put access specifier in constructor it also act as member variable
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// class Car{
//     engine:string;
//     constructor(engine:string){
//         this.engine=engine;
//     }
//     start(){
//        return "Started "+this.engine
//     }
//     stop(){
//         return "Stopped "+this.engine
//      }
// }
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
// console.log('---------------------------');
// let car1=new Car('Audi')
// console.log(car1)
// console.log(car1.start())
// console.log('---------------------------');
// let car2=new Car('Jaguar')
// console.log(car2.start())
// console.log('---------------------------');
var Car1 = /** @class */ (function () {
    function Car1(engine) {
        this.engine = engine;
        // console.log(this.engine)
    }
    Object.defineProperty(Car1.prototype, "engine", {
        get: function () {
            console.log('inside get');
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'supply an engine';
            this._engine = value;
            console.log('inside set');
        },
        enumerable: true,
        configurable: true
    });
    Car1.prototype.getMyEngine = function () {
        return this._engine;
    };
    return Car1;
}());
var car = new Car1('BMW');
console.log(car);
console.log(car.getMyEngine());
console.log(car.engine);
console.log('---------------------------');
var carss = new Car1('Toyota');
console.log(carss.engine);
console.log('---------------------------');
// inheritance
var Engine = /** @class */ (function () {
    function Engine(horsepower, engineType) {
        this.horsepower = horsepower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Auto = /** @class */ (function () {
    function Auto(engine) {
        this.engine = engine;
    }
    Auto.prototype.getHp = function () {
        return this.engine.horsepower;
    };
    return Auto;
}());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    // fourByFour:boolean;
    function Truck(engine, fourByFour) {
        var _this = _super.call(this, engine) || this;
        _this.fourByFour = fourByFour;
        return _this;
    }
    return Truck;
}(Auto));
var engine = new Engine(200, 'Ashok Leyland');
var truck = new Truck(engine, true);
console.log(truck);
console.log(truck.getHp());
console.log('---------------------------');
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function (message) {
        return this.engine + message;
    };
    Car.prototype.stop = function (message) {
        return this.engine + message;
    };
    return Car;
}());
var newCar = new Car('Audi');
console.log(newCar.start(' Started'));
console.log(newCar.start(' Didnt Stopped'));
console.log('---------------------------');
