const Accessory = require("../models/Accessory")

exports.create =  ( accessoryData ) => {
    const accessory = new Accessory(accessoryData)
    return  accessory.save()
}

exports.getAllAccessory = () => Accessory.find()