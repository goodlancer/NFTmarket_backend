const db = require("../models");
const Nftlink = db.nftlink;


exports.allAccess = (req, res) => {
    res.status(200).send("public content.");
};


exports.nftupload = async (req, res) => {
    const userid = req.userId;
    const nftlink = new Nftlink({
        datalink: req.body.datalink,
        nftToken: req.body.token,
        privatekey: req.body.privatekey,
        byuser: userid,
    })

    nftlink.save((err, nftdata) => {
        if(err) {
            res.status(500).send({message: err});
            return;
        }
        res.send({message: 'Success', data: nftdata});
    });
}

exports.getAllNfts = async (req, res) => {
    const allnftdata = await Nftlink.find().exec();
    res.status(200).send({nftdata: allnftdata});
}

exports.getbyId = async (req, res) => {
    const nftid = req.params.nftid;
    const nftdatabyId = await Nftlink.findById(nftid).exec();
    res.status(200).send({data: nftdatabyId});
}

exports.getbyUser = async (req, res) => {
    const userId = req.userId;
    const allnftdatabyUser = await Nftlink.find({
        byuser: userId
    }).exec()
    res.status(200).send({data: allnftdatabyUser});
}

exports.getbyNFT = async(req, res) => {
    const nft = req.body.nftToken;
    const nftData = await Nftlink.find({
        nftToken: nft
    }).exec()
    res.status(200).send({ data: nftData });
}

exports.uploadAsset = async (req, res) => {
    // console.log(req.body.file);
    // res.status(200).send({msg: 'The file was saved'});
    const filers = require('fs');
    filers.writeFile("/test1.png", req.body.file, 'binary', function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("The file was saved!");
        res.status(200).send({msg: 'The file was saved'});
    });
}