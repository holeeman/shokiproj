const mongoose = require("mongoose");
const FoodSchema = require("../models/foodModel");

const Food = mongoose.model("Food", FoodSchema);

const addNewFood = (req, res) => {
    let newFood = new Food(req.body);

    newFood.save().then((food)=>{
        res.json(food);
        console.log("Food added successfully");
    }).catch((err)=>{
        res.status(500).send(err);
    });
};


const getFoods = (req, res) => {
    Food.find({}).then((food) => {
        res.json(food);
    }).catch((err) => {
        res.status(500).send(err);
    });
}; 

const getFoodFromAddress = (req, res) => {
    Food.find({actual_address: req.params.actual_address}, (err, food) => {
        if (err) {
            res.send(err);
        }
        res.json(food);
    });
};

const getFoodFromID = (req, res) => {
    Food.find({id: req.params.id}, (err, food) => {
        if (err) {
            res.send(err);
        }
        res.json(food);
    });
}


const putFood = (req, res) => {
    Food.findOneAndUpdate({id: req.params
        .id
    }, req
        .body, {new: true, useFindAndModify: false}, (err, food) => {
        if (err) {
            res.send
            (err);
        }
        res.json(food);
    });
};

const deleteFood = (req, res) => {
    Food.remove({id: req.params.id}, (err, food) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "Successfully deleted food"});
    });
};

module.exports = {addNewFood, getFoods, getFoodFromAddress, getFoodFromID, putFood, deleteFood};