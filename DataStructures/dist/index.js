"use strict";

var _linkedList = _interopRequireDefault(require("./linkedList.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var list = new _linkedList["default"]();

for (var i = 0; i < 5; i++) {
  list.add(i);
}

console.log(list);