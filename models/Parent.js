const mongoose = require("mongoose");
const parentSchema = require(".../db/schemas/parentSchema");

const Parent = mongoose.model("parent", parentSchema);

module.exports = Parent;
