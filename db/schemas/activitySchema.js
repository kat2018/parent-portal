const Schema = require("mongoose").Schema;

const activitySchema = new Schema({
    title: String,
    description: String,
    subject: String,
    startDate: Number,
    endDate: Number,
    Cost: Number
})

module.exports = activitySchema;