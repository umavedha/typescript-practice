"use strict";
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var g = new Greeter('Uma');
console.log(g.greet());
