const { Website } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, website;
    let user = req.user;

    let website_info = req.body;
    
    [err, website] = await to(Website.create(website_info));
    if(err) return ReE(res, err, 422);

    return ReS(res,{website:website.toWeb()}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, website;
    [err, website] = await to(Website.find({}));
    // console.log(keywords)
    return ReS(res, {website: website}, 201);
}
module.exports.getAll = getAll;