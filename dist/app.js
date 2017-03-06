'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _indexRoutes = require('./routes/indexRoutes');

var _indexRoutes2 = _interopRequireDefault(_indexRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
_mongoose2.default.connect('mongodb://localhost:27017/store');

app.use('/api', _indexRoutes2.default);

app.listen(3000);
console.log('Server Started');

exports.default = app;
//# sourceMappingURL=app.js.map