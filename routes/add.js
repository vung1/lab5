var data = require("../data.json");

exports.addFriend = function (request, response) {
    // Your code goes here
    const name = request.query.name;
    const description = request.query.description;
    const imageURL = "http://lorempixel.com/400/400/people";
    const newFriend = { name, description, imageURL };
    data.friends.push(newFriend);
    response.render("index", data);
};
