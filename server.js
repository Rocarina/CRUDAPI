// ======================================================
// Day 15 - User CRUD API with MongoDB
// Full Stack Developer Internship
// ======================================================

const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");

const app = express();

const PORT = 3000;

// ======================================================
// Middleware
// ======================================================

app.use(express.json());

// ======================================================
// MongoDB Connection
// ======================================================

mongoose.connect("mongodb://127.0.0.1:27017/mongodbpractice")

.then(() => {

    console.log("========================================");

    console.log("MongoDB Connected Successfully");

    console.log("Database : mongodbpractice");

    console.log("========================================");

})

.catch((error) => {

    console.log("MongoDB Connection Failed");

    console.log(error);

});

// ======================================================
// Home Route
// ======================================================

app.get("/", (req, res) => {

    res.send(`
        <h1>User CRUD API</h1>
        <p>Express + MongoDB + Mongoose</p>
    `);

});

// ======================================================
// GET - Fetch All Users
// ======================================================

app.get("/users", async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch users.",

            error: error.message

        });

    }

});

// ======================================================
// GET - Fetch User By ID
// ======================================================

app.get("/users/:id", async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                message: "User not found."

            });

        }

        res.status(200).json(user);

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch user.",

            error: error.message

        });

    }

});

// ======================================================
// POST - Create New User
// ======================================================

app.post("/users", async (req, res) => {

    try {

        const user = new User({

            name: req.body.name,

            email: req.body.email,

            age: req.body.age

        });

        await user.save();

        res.status(201).json({

            message: "User created successfully.",

            user

        });

    }

    catch (error) {

        res.status(400).json({

            message: "Validation Failed.",

            error: error.message

        });

    }

});

// ======================================================
// PUT - Update User
// ======================================================

app.put("/users/:id", async (req, res) => {

    try {

        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true,

                runValidators: true

            }

        );

        if (!updatedUser) {

            return res.status(404).json({

                message: "User not found."

            });

        }

        res.status(200).json({

            message: "User updated successfully.",

            user: updatedUser

        });

    }

    catch (error) {

        res.status(400).json({

            message: "Unable to update user.",

            error: error.message

        });

    }

});

// ======================================================
// DELETE - Delete User
// ======================================================

app.delete("/users/:id", async (req, res) => {

    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {

            return res.status(404).json({

                message: "User not found."

            });

        }

        res.status(200).json({

            message: "User deleted successfully.",

            user: deletedUser

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to delete user.",

            error: error.message

        });

    }

});

// ======================================================
// Start Server
// ======================================================

app.listen(PORT, () => {

    console.log("========================================");

    console.log("User CRUD API Started");

    console.log(`Server running at http://localhost:${PORT}`);

    console.log("========================================");

});