const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
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
    address: {
        type: String,
        required: true,
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

const foodPartnerModel = mongoose.model('foodpartner', foodPartnerSchema);
module.exports = foodPartnerModel