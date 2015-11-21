'use strict';

var _lodashFp = require('lodash-fp');

var _lodashFp2 = _interopRequireDefault(_lodashFp);

var _util = require('./util.js');

var $$ = _interopRequireWildcard(_util);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _serveIndex = require('serve-index');

var _serveIndex2 = _interopRequireDefault(_serveIndex);

var _vhost = require('vhost');

var _vhost2 = _interopRequireDefault(_vhost);

var _mainHost = require('./main-host.js');

var _mainHost2 = _interopRequireDefault(_mainHost);

var _object1Vhost = require('./object1-vhost.js');

var _object1Vhost2 = _interopRequireDefault(_object1Vhost);

var _object2Vhost = require('./object2-vhost.js');

var _object2Vhost2 = _interopRequireDefault(_object2Vhost);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import bodyParser from 'body-parser'
//import cookieParser from 'cookie-parser'

var app = (0, _express2.default)();

// enable CORS:

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});

app.use((0, _morgan2.default)('dev')); // logger
//app.use(bodyParser.urlencoded({extended: true}))
//app.use(bodyParser.json())
//app.use(cookieParser())

app.use((0, _vhost2.default)('object1.localhost', _object1Vhost2.default));
app.use((0, _vhost2.default)('object2.localhost', _object2Vhost2.default));

app.use('/', _mainHost2.default);
app.use('/static', (0, _serveStatic2.default)('../test-task-frontend'));
app.use('/static', (0, _serveIndex2.default)('../test-task-frontend'));

app.listen(process.env.PORT || 80);