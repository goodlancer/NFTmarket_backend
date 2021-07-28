const mongoose = require('mongoose');
const {TE, to} = require('../services/auth.service');

let MemberSchema = mongoose.Schema({
    orgenizeId: {type: String},
    name: {type: String},
    detail: {type: String},
    role: {type: Number}, //1: admin, 2: editer, 3: writer, 4: other
    releatedId: {type: String},
})

MemberSchema.methods.toWeb = function(){
    let json = this.toJSON();
    json.id = this._id;
    return json;
}

let member = module.exports = mongoose.model('Member', MemberSchema);