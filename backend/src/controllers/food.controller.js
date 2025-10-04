const foodModel = require('../models/food.model')
const storageService = require('../services/storage.service')
const { v4: uuid } = require('uuid')

async function createFood(req, res) {

    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid())

    const foodItem = await foodModel.create({
        name: req.body.name,
        description: req.body.description,
        video: fileUploadResult.url,
        foodPartner: req.foodPartner._id
    })

    res.status(201).json({
        message: "Food item created sucessfully",
        food: foodItem
    })
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({}).populate("foodPartner", "fullName profileImage")

    res.status(200).json({
        message: "Food items fetched sucessfully",
        foodItems
    })
}

async function getFoodItemsByPartner(req, res) {
    const { id } = req.params;
    try {
        const foodItems = await foodModel
            .find({ foodPartner: id })
            .populate("foodPartner", "fullName profileImage");

    res.status(200).json({
        message: "Food items fetched successfully",
        foodItems,
    });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
}


module.exports = {
    createFood,
    getFoodItems,
    getFoodItemsByPartner
}