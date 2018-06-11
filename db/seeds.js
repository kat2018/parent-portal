const mongoose = require("mongoose");
// const Activity = require(".../models/Activities");
// const Children = require(".../models/Children");
const Parent = require("../models/Parent");

// Connect to database
if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect("mongodb://localhost/parent-portal");
}
mongoose.connection.on("error", function (err) {
    console.error("MongoDB connection error: " + err);
    process.exit(-1);
});
mongoose.connection.once("open", function () {
    console.log("Mongoose has connected to MongoDB!");
});

Parent.remove()
.then(()=>{

    const parent1 = new Parent({
        firstName: "Mary",
        lastName: "Lynn",
        email: "mary@lynn.com"
    });
    const parent2 = new Parent({
        firstName: "John",
        lastName: "Smith",
        email: "jsmith@msn.com"
    });
    const parent3 = new Parent({
        firstName: "Patty",
        lastName: "Crabby",
        email: "crabby@patty.com"
    });
    return Parent.create([parent1, parent2, parent3])
}).then(() => {
    console.log('Saved data!')
    mongoose.connection.close()
})





//remove parent profile
