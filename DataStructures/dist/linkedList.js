"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _node = _interopRequireDefault(require("./node.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var linkedList =
/*#__PURE__*/
function () {
  function linkedList() {
    _classCallCheck(this, linkedList);

    this.head = null;
    this.length = 0;
  }

  _createClass(linkedList, [{
    key: "add",
    value: function add(data) {
      var node = new _node["default"](data);

      if (this.head === null) {
        this.head = node;
      } else {
        var currentNode = this.head;

        while (currentNode.next) {
          currentNode = currentNode.next;
        }

        currentNode.next = node;
      }

      this.length++;
    }
  }, {
    key: "find",
    value: function find(data) {
      var currentNode = this.head;
      var index = -1;

      while (currentNode) {
        index++;

        if (currentNode.data === data) {
          return index;
        }

        currentNode = currentNode.next;
      }

      return -1;
    }
  }, {
    key: "addAt",
    value: function addAt(index, data) {
      var node = new _node["default"](data);
      var currentNode = this.head;
      var previousNode;
      var currentIndex = 0;

      if (index > this.length) {
        return false;
      }

      if (index === 0) {
        node.next = currentNode;
        this.head = node;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        node.next = currentNode;
        previousNode.next = node;
      }

      this.length++;
    }
  }]);

  return linkedList;
}();

exports["default"] = linkedList;