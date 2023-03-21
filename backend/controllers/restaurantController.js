const mongoose = require("mongoose");
const RestaurantSchema = require("../models/restaurantModel");

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

const getRestaurants = (req, res) => {
    Restaurant.find({}).then((restaurants) => {
        res.json(restaurants);
    }).catch((err) => {
        res.status(500).send(err);
    });
}; 


module.exports = {getRestaurants};