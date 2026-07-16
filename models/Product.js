// ======================================================
// Product Model
// Day 15 Assignment
// ======================================================

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name: {

        type: String,

        required: [true, "Product name is required."],

        minlength: [2, "Product name must contain at least 2 characters."]

    },

    price: {

        type: Number,

        required: [true, "Product price is required."],

        min: [1, "Price must be greater than 0."]

    },

    stock: {

        type: Number,

        required: [true, "Stock is required."],

        min: [0, "Stock cannot be negative."]

    }

});

module.exports = mongoose.model("Product", productSchema);