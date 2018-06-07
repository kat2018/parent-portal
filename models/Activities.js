const mongoose = require("mongoose")
const activitiesSchema = require(".../db/schemas/activitiesSchema")

const Activities = mongoose.model('activities', activitiesSchema)

module.exports = Activities

