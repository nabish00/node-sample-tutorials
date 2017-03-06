'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
var adminSchema = _mongoose2.default.Schema({

    firstName: { type: String, required: true, maxLength: 255, trim: true },
    lastName: { type: String, required: true, maxLength: 255, trim: true },
    userName: { type: String, required: true, maxLength: 255, trim: true },
    email: { type: String, required: true, maxLength: 255, trim: true },
    password: { type: String, required: true, maxLength: 255, trim: true },
    createdAt: { type: Date, required: true, maxLength: 100, trim: true, default: Date.now() },
    updatedAt: { type: Date, required: true, maxLength: 100, trim: true, default: Date.now() },
    logDate: { type: Date, required: true, maxLength: 100, trim: true, default: Date.now() },
    logNum: { type: Number, required: true, maxLength: 12, trim: true, default: 1 },
    rp_token: { type: String, required: true, maxLength: 100, trim: true }, //link
    rp_token_created_at: { type: Date, required: true, maxLength: 100, trim: true, default: Date.now() }
});

var Admin = _mongoose2.default.model('Admin', adminSchema);
exports.default = Admin;
//# sourceMappingURL=Admin.js.map