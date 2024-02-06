const mongoose = require("mongoose");

const applyerSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    phoneNum: {
        type: String,
        require: true
    },
    aWord: {
        type: String,
        require: true
    }
})

const applyer = mongoose.model("applyer", applyerSchema);
module.exports = applyer;