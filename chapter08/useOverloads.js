"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function descOneself(name, msgOrMonth, day) {
    var desc = "\u3053\u3093\u306B\u3061\u306F\u3001".concat(name, "\u3067\u3059\u3002");
    if (typeof msgOrMonth == "string") {
        desc += msgOrMonth;
    }
    else {
        desc += "".concat(msgOrMonth, "\u6708").concat(day, "\u65E5\u751F\u307E\u308C\u3067\u3059\u3002");
    }
    console.log(desc);
}
descOneself("江藤", "よろしくお願いします！");
descOneself("江藤", 6, 12);
