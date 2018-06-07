const mongoose = require("mongoose")
const activitySchema = require(".../db/schemas/activitySchema")

const Activity = mongoose.model('activity', activitySchema)

module.exports = Activity

