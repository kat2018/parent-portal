const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create parents model

const parent = newSchema({
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

const Parent = mongoose.model('Parent')