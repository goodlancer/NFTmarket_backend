const db = require("../models");
const Nftlink = db.nftlink;


exports.allAccess = (req, res) => {
    res.status(200).send("public content.");
};


exports.nftupload = async (req, res) => {
    const userid = req.userId;
    const nftlink = new Nftlink({
        datalink: req.body.datalink,
        title: req.body.title,
        detail: req.body.detail,
        price: req.body.price,
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
