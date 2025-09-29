const userModel = require('../models/user.model')
const foodPartnerModel = require('../models/footpartner.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    
    const { fullName, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email })
    
    if (isUserExist) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    })
}

async function loginUser(req, res) {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email })

    if (!user) {
        return res.status(400).json({
            message: "Invalid email or password"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)


    res.cookie("token", token);

    res.status(201).json({
        message: "User login successfully",
        user: {
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        }
    })
}

async function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    })
}

async function registerFoodPartner(req, res) {

    const { fullName, email, password } = req.body;

    const isFoodPartnerExist = await userModel.findOne({ email });

    if (isFoodPartnerExist) {
        return res.status(400).json({
            message: "Food Partner already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
        fullName,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "Food Partner registered successfully",
        foodPartner: {
            _id: foodPartner._id,
            fullName: foodPartner.fullName,
            email: foodPartner.email,
        },
    });
}

async function loginFoodPartner(req, res) {

    const { email, password } = req.body;

    const foodPartner = await foodPartnerModel.findOne({ email });

    if (!foodPartner) {
        return res.status(400).json({
            message: "Invalid email or password",
        });
    }

    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordValid) {
        return res.status(400).json({
        message: "Invalid email or password",
        });
    }

    const token = jwt.sign({
        id: foodPartner._id,
    },process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "Food Partner login successfully",
        foodPartner: {
            _id: foodPartner._id,
            fullName: foodPartner.fullName,
            email: foodPartner.email,
        },
    });
}

async function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "Food Partner logged out successfully",
    });
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner,
}