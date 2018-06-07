
//create parents model

const ParentSchema = newSchema({
    firstName: {
        type: String,
        require: [true, 'required field']
    },
    lastName: {
        type: String,
        require: [true, 'required field']
    },
    email: String
})

module.exports = ParentSchema