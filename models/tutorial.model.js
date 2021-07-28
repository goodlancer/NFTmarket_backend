const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let TutorialSchema = mongoose.Schema({
    title: {type:String},
    detail: {type:String},
    googlelink: {type:String},
}, {timestamps: true});

TutorialSchema.methods.toWeb = function(){
    let json = this.toJSON();
    json.id = this._id;//this is for the front end
    return json;
};

let tutorial = module.exports = mongoose.model('Tutorial', TutorialSchema);

