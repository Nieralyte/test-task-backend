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
  var collGroups = [{ text: 'Группа коллекций 1', id: 1 }, { text: 'Группа коллекций 2', id: 2 }, { text: 'Группа коллекций 3', id: 3, parentId: 2 }];

  var colls = [{ text: 'Коллекция 1',
    server: '//object1.localhost/',
    id: 1,
    groupId: 1 }, { text: 'Коллекция 2',
    server: '//object2.localhost/',
    id: 2,
    groupId: 2 }];

  res.json({ colls: colls, collGroups: collGroups });
});