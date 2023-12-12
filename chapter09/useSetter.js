"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, english, math, japanease) {
        this._name = "";
        this._english = 0;
        this._math = 0;
        this._japanease = 0;
        this._name = name;
        this._english = english;
        this._math = math;
        this._japanease = japanease;
    }
    Student.prototype.showScoresSum = function () {
        var sum = this._english + this._math + this._japanease;
        console.log("".concat(this._name, "\u306E\u5408\u8A08\u5F97\u70B9\uFF1A").concat(sum));
    };
    Object.defineProperty(Student.prototype, "english", {
        get: function () {
            return this._english;
        },
        set: function (value) {
            if (value < 0) {
                value = 0;
            }
            this._english = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var Radius = /** @class */ (function () {
    function Radius() {
    }
    Radius.showCirfumference = function (radius) {
        var circumference = 2 * 3.14 * radius;
        console.log("\u534A\u5F84".concat(radius, "\u306E\u5186\u5468\u306E\u9577\u3055\uFF1A").concat(circumference));
    };
    return Radius;
}());
var taro = new Student("宮本太郎", 78, 82, 85);
taro.showScoresSum();
taro.english = -20;
console.log(taro.english);
console.log(taro);
Radius.showCirfumference(10);
