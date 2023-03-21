require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const foodRouter = require('./routers/foodRouter');
const restaurantRouter = require('./routers/restaurantRouter');

const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/food", foodRouter);
app.use("/restaurant", restaurantRouter);
// CONNECT TO MONGODB SERVER
mongoose
  .connect("mongodb+srv://runway3207:IDygjMv3dnQaZC0I@cluster0.h9c7apz.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.listen(12345, () => console.log(`Server listening on port ${12345}`));