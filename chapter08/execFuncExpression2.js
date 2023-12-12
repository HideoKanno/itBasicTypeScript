"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showConcatName(f) {
    var result = f("田中", "太郎");
    console.log(result);
}
var func = function (lastName, firstName) {
    return "".concat(lastName, " ").concat(firstName);
};
showConcatName(func);
