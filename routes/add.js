var data = require("../data.json");

exports.addFriend = function(req, res) {    
    console.log("addFriend called")
    var friend = req.query.name;
    var description = req.query.description;

    var newFriend = {
        name: friend,
        description: description,
        imageURL: "http://lorempixel.com/400/400/people"
    }

    data.friends.push(newFriend);

    res.redirect('/');
    console.log()
}
