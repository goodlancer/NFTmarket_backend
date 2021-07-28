const mongoose =require('mongoose');
const {TE, to} =require('../services/util.service')

let KeywordsSchema = mongoose.Schema({
    keyword : {type: String},
    links: {type: String},
    status: {type: Number}, //1: COMPLETE, 0: No. 2: InProgress
    type: {type: Number},  //1: Affiliate, 0: DIY
    writer: {type: String},
    dateCompleted: {type: Date},
    productDesign: {type: Number}, //1: yes. 0: No. 2: InProgress
    pinterest: {type: Boolean},
    note: {type: String}
}, {timestamps: false});

KeywordsSchema.methods.toWeb = function(){
    let json = this.toJSON();
    json.id = this._id;
    return json;
}

let keywords = module.exports = mongoose.model('Keywords', KeywordsSchema);