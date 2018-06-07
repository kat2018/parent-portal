const Schema = require("mongoose").Schema;

//create children model

const ChilrenSchema = newSchema({
  firstName: {
    type: String,
    require: [true, "required field"]
  },
  lastName: {
    type: String,
    require: [true, "required field"]
  },
  age: String
});

module.exports = ChildrenSchema;
