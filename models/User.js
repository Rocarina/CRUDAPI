// ======================================================
// User Model
// Day 15 - User CRUD API
// ======================================================

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {

        type: String,

        required: [true, "Name is required."],

        minlength: [3, "Name must be at least 3 characters long."]

    },

    email: {

        type: String,

        required: [true, "Email is required."],

        unique: true,

        match: [/.+@.+\..+/, "Please enter a valid email address."]

    },

    age: {

        type: Number,

        required: [true, "Age is required."],

        min: [1, "Age must be greater than 0."],

        max: [100, "Age cannot exceed 100."]

    }

});

module.exports = mongoose.model("User", userSchema);