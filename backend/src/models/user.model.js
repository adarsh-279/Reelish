const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 11,
    },
    password: {
        type: String,
        minlength: 6
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    }
},
    {
        timestamps: true
    }
)

const userModel = mongoose.model('user', userSchema);
module.exports = userModel