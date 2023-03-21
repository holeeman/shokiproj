const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = new Schema({
    name: {
        type: String,
        required: "Enter a food name"
    },
    address: {
        type: String,
        required: "Enter an address"
    },
    city: {
        type: String,
        required: "Enter a city"
    },
    state: {
        type: String,
        required: "Enter a state"
    },
    zip: {
        type: Number,
        required: "Enter a zip code"
    },
    miles: {
        type: Number,
        required: "Enter a zip code"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
 
});