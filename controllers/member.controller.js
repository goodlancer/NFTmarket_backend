const { Member } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, member, existmember;
  
    let member_info = req.body;
    if(member_info.role == 1){
        [err, member] = await to(Member.create(member_info)); 
        if(err) return ReE(res, err, 422);
        return ReS(res,{member:member.toWeb()}, 201);
    }else{
        [err, existmember] = await to(Member.find({'_id': member_info.releatedId}));
        if(err){
            return ReE(res, err, 422);
        }else{
            [err, member] = await to(Member.create(member_info)); 
            if(err) return ReE(res, err, 422);
            return ReS(res,{member:member.toWeb()}, 201);
        }
    }
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, member;
    [err, member] = await to(Member.find({}));
    // console.log(keywords)
    return ReS(res, {member: member}, 201);
}
module.exports.getAll = getAll;

const getOrganize = async function(req, res){
    res.setHeader('content-Type', 'application/json');
    let request = req.body
    let err, getOrganize;
    [err, getOrganize] = await to(Member.find({'orgenizeId': request.id}));

    return ReS(res, {getOrganize: getOrganize}, 201)
}
module.exports.getOrganize = getOrganize;