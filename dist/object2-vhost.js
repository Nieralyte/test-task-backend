'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodashFp = require('lodash-fp');

var _lodashFp2 = _interopRequireDefault(_lodashFp);

var _util = require('./util.js');

var $$ = _interopRequireWildcard(_util);

var _express = require('express');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
exports.default = router;

router.get('/', function (req, res) {
  var objectGroups = [{ text: 'Группа 1', id: 1 }, { text: 'Группа 2', id: 2, parentId: 1 }, { text: 'Группа 3', id: 3, parentId: 2 }];

  var objects = [{ id: 1, groupId: 1, text: 'объект 1' }, { id: 2, groupId: 1, text: 'объект 2' }, { id: 3, groupId: 2, text: 'объект 3' }];

  res.json({ objects: objects, objectGroups: objectGroups });
});