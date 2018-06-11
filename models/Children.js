const mongoose = require("mongoose");
const childrenSchema = require(".../db/schemas/childrenSchema");

const Children = mongoose.model("children", childrenSchema);

module.exports = Children;
