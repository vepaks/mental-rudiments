const Accessory = require("../models/Accessory")

exports.create = async ( accessoryData ) => {
    const accessory = new Accessory(accessoryData)
    await accessory.save()
    return accessory;
}

exports.getAllAccessory = () => Accessory.find().lean()