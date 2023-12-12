"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useCalc2Param(calc2Param) {
    var ans = calc2Param.calc(5, 4);
    console.log("".concat(calc2Param.name, "\u306E\u5B9F\u884C\u7D50\u679C\uFF1A").concat(ans));
}
var multiplication = {
    name: "掛け算",
    calc: function (num1, num2) {
        return num1 * num2;
    }
};
useCalc2Param(multiplication);
