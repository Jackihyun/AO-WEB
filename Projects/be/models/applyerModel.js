const mongoose = require("mongoose");

//스키마
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