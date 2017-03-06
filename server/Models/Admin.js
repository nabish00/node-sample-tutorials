import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
var adminSchema = mongoose.Schema({

    firstName: {type:String , required:true, maxLength:255, trim:true},
    lastName: {type:String , required:true, maxLength:255, trim:true},
    userName: {type:String , required:true, maxLength:255, trim:true},
    email: {type:String , required:true, maxLength:255, trim:true},
    password: {type:String , required:true, maxLength:255, trim:true},
    createdAt: {type:Date , required:true, maxLength:100, trim:true, default:Date.now()},
    updatedAt: {type:Date , required:true, maxLength:100, trim:true, default:Date.now()},
    logDate: {type:Date , required:true, maxLength:100, trim:true, default:Date.now()},
    logNum: {type:Number , required:true, maxLength:12, trim:true, default:1},
    rp_token: {type:String , required:true, maxLength:100, trim:true}, //link
    rp_token_created_at: {type:Date , required:true, maxLength:100, trim:true, default:Date.now()},
});

const Admin = mongoose.model('Admin',adminSchema);
export default Admin;