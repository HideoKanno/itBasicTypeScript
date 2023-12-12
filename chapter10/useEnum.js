"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rgb;
(function (Rgb) {
    Rgb[Rgb["RED"] = 10] = "RED";
    Rgb[Rgb["GREEN"] = 20] = "GREEN";
    Rgb[Rgb["BLUE"] = 30] = "BLUE";
})(Rgb || (Rgb = {}));
function showColorSelection(name, color) {
    var colorStr = "赤";
    if (color == Rgb.GREEN) {
        colorStr = "緑";
    }
    else {
        colorStr = "青";
    }
    console.log("".concat(name, "\u3055\u3093\u304C\u9078\u3093\u3060\u8272\uFF1A").concat(colorStr));
}
showColorSelection("美知恵", Rgb.GREEN);
console.log(Rgb.RED);
