'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _adminRoutes = require('./adminRoutes');

var _adminRoutes2 = _interopRequireDefault(_adminRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var app = express();

//import customerRoutes from './customerRoutes';
//import productRoutes from './productRoutes';


app.use('/admin', _adminRoutes2.default);
exports.default = app;
//# sourceMappingURL=indexRoutes.js.map