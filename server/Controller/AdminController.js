import adminModel from './../Models/Admin';

var AdminController = {};


AdminController.addAdmin = (req, res) => {
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

    var admin = new adminModel({
        firstName,
        lastName,
        userName,
        email,
        password,
        createdAt,
        updatedAt,
        logDate,
        logNum,
        rp_token,
        rpTokenCreatedAt

    });
    admin.save().then((admin) =>
    {
        res.send(admin)
    }).catch( (err)=>
    {
        res.send(err)

    });
};


AdminController.getAllAdmin = (req, res) => {
    
}
export default AdminController;