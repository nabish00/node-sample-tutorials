'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AdminController = require('../Controller/AdminController');

var _AdminController2 = _interopRequireDefault(_AdminController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/addAdmin', _AdminController2.default.addAdmin);

exports.default = router;
//# sourceMappingURL=adminRoutes.js.map