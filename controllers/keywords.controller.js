const { Keywords } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, keywords;
    
    let keywords_info = req.body;
    [err, keywords] = await to(Keywords.create(keywords_info))
    if(err) return ReE(res, err, 422);

    return ReS(res, {keywords:keywords.toWeb()}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, keywords;
    [err, keywords] = await to(Keywords.find({}));
    // console.log(keywords)
    return ReS(res, {keywords: keywords}, 201);
}
module.exports.getAll = getAll;

const searchKey = async function(req, res){
    res.setHeader('content-Type', 'application/json');
    let keyword = req.body
    let err, seachkey;
    [err, searchkey] = await to(Keywords.find({'keyword':'work'}));

    return ReS(res, {keywords: searchkey}, 201)
}
module.exports.searchKey = searchKey;