"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showTotalWage(emp) {
    var total = emp.wage * emp.hours;
    console.log("".concat(emp.name, "\u3055\u3093\u306E\u652F\u7D66\u984D\uFF1A").concat(total, "\u5186"));
}
var Keisuke = {
    name: "和田啓介",
    wage: 1150,
    hours: 105
};
showTotalWage(Keisuke);
