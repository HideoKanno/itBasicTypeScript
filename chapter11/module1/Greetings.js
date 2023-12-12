"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greetings = void 0;
var Greetings = /** @class */ (function () {
    function Greetings(name) {
        this.name = "";
        this.name = name;
    }
    Greetings.prototype.sayHello = function () {
        console.log("".concat(this.name, "\u3055\u3093\u3001\u3053\u3093\u306B\u3061\u306F"));
    };
    return Greetings;
}());
exports.Greetings = Greetings;
