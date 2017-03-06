'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Admin = require('./../Models/Admin');

var _Admin2 = _interopRequireDefault(_Admin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminController = {};

AdminController.addAdmin = function (req, res) {
    console.log('req body comming');
    console.log(req.body);
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var userName = req.body.userName;
    var email = req.body.email;
    var password = req.body.password;
    var createdAt = req.body.createdAt;
    var updatedAt = req.body.updatedAt;
    var logDate = req.body.logDate;
    var logNum = req.body.logNum;
    var rp_token = req.body.rp_token;
    var rpTokenCreatedAt = req.body.rpTokenCreatedAt;

    var admin = new _Admin2.default({
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
        createdAt: createdAt,
        updatedAt: updatedAt,
        logDate: logDate,
        logNum: logNum,
        rp_token: rp_token,
        rpTokenCreatedAt: rpTokenCreatedAt

    });
    admin.save().then(function (admin) {
        res.send(admin);
    }).catch(function (err) {
        res.send(err);
    });
};

exports.default = AdminController;
//# sourceMappingURL=AdminController.js.map