const mongoose = require('mongoose')

const info = new mongoose.Schema({
    First: {
        type: String,
        require: true
    },
    Middle: {
        type: String,
        require: true
    },
    Last: {
        type: String,
        require: true
    },
    Email: {
        type: String,
        require: true
    },
    Contact: {
        type: Number,
        require: true
    },
    Gender: {
        type: String,
        require: true
    },
    State: {
        type: String,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
}, { timestamps: true }
)


const userInfo =  mongoose.model("UserInfo",info)

module.exports = userInfo