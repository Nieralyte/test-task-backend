'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrToTree = arrToTree;
exports.inspect = inspect;

var _lodashFp = require('lodash-fp');

var _lodashFp2 = _interopRequireDefault(_lodashFp);

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrToTree(arr) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$id = _ref.id;
  var id = _ref$id === undefined ? 'id' : _ref$id;
  var _ref$parentId = _ref.parentId;
  var parentId = _ref$parentId === undefined ? 'parentId' : _ref$parentId;

  var map = {};
  var tree = [];

  arr.forEach(function (item) {
    return map[item[id]] = item;
  });

  arr.forEach(function (item) {
    var parent = map[item[parentId]];

    if (parent) (parent.nodes || (parent.nodes = [])).push(item);else tree.push(item);
  });

  return tree;
}

function inspect(obj) {
  var depth = arguments.length <= 1 || arguments[1] === undefined ? 10 : arguments[1];

  if (!Array.isArray(obj)) {
    obj = _lodashFp2.default.zipObject(_lodashFp2.default.pairs(obj).sort(function (a, b) {
      a = a[0].toLowerCase();
      b = b[0].toLowerCase();

      return a > b ? 1 : a < b ? -1 : 0;
    }), undefined);
  }

  return (0, _util.inspect)(obj, { depth: depth });
}