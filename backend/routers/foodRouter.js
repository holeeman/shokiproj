const router = require('express').Router();
const foodController = require("../controllers/foodController");
router.get("/", foodController.getFoods);
router.post("/", foodController.addNewFood);
module.exports = router