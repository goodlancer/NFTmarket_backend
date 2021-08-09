const mongoose = require("mongoose");

const Nftlink = mongoose.model(
    "Nftlink",
    new mongoose.Schema({
        datalink: String,
        title: String,
        detail: String,
        price: Number,
        byuser: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
            }
          ]
    })
);

module.exports =Nftlink;