const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let WebsiteSchema = mongoose.Schema({
    name: {type:String},
}, {timestamps: true});

WebsiteSchema.methods.toWeb = function(){
    let json = this.toJSON();
    json.id = this._id;//this is for the front end
    return json;
};

let website = module.exports = mongoose.model('Website', WebsiteSchema);

