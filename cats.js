var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

// this defines the pattern for the data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// took the catSchema model and saves it in "Cat"
// the "Cat" in parenthesis is the singular version of our model
var Cat = mongoose.model("Cat", catSchema);

// add a new cat to database
// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("Something went wrong");
//     } else {
//         console.log("Saved cat to the database");
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
}
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("oh no! Error!");
        console.log(err);
    } else {
        console.log("All the cats...");
        console.log(cats);
    }
});



