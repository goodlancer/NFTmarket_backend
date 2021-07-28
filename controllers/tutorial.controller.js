const { Tutorial } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tutorial;
    let user = req.user;

    let tuto_info = req.body;
    
    [err, tutorial] = await to(Tutorial.create(tuto_info));
    if(err) return ReE(res, err, 422);

    return ReS(res,{tutorial:tutorial.toWeb()}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, tutorial;
    [err, tutorial] = await to(Tutorial.find({}));
    // console.log(keywords)
    return ReS(res, {tutorial: tutorial}, 201);
}
module.exports.getAll = getAll;