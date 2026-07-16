// ======================================================
// Day 15 - User CRUD API with MongoDB
// Full Stack Developer Internship
// ======================================================

const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");

const Product = require("./models/Product");

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
// GET - Fetch All Admin Users
// ======================================================

app.get("/users/admins", async (req, res) => {

    try {

        const admins = await User.find({

            role: "admin"

        });

        res.status(200).json(admins);

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch admin users.",

            error: error.message

        });

    }

});

// ======================================================
// GET - Average Age of Users
// ======================================================

app.get("/users/average-age", async (req, res) => {

    try {

        const result = await User.aggregate([

            {

                $group: {

                    _id: null,

                    averageAge: {

                        $avg: "$age"

                    },

                    totalUsers: {

                        $sum: 1

                    }

                }

            }

        ]);

        if (result.length === 0) {

            return res.status(404).json({

                message: "No users found."

            });

        }

        res.status(200).json({

            message: "Average age calculated successfully.",

            totalUsers: result[0].totalUsers,

            averageAge: Number(result[0].averageAge.toFixed(2))

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to calculate average age.",

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

            age: req.body.age,

            role: req.body.role      // ⭐ Add this line

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
// POST - Create Product
// ======================================================

app.post("/products", async (req, res) => {

    try {

        const product = new Product({

            name: req.body.name,

            price: req.body.price,

            stock: req.body.stock

        });

        await product.save();

        res.status(201).json({

            message: "Product created successfully.",

            product

        });

    }

    catch (error) {

        res.status(400).json({

            message: "Unable to create product.",

            error: error.message

        });

    }

});

// ======================================================
// GET - Fetch All Products
// ======================================================

app.get("/products", async (req, res) => {

    try {

        const products = await Product.find();

        res.status(200).json(products);

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to fetch products.",

            error: error.message

        });

    }

});

// ======================================================
// PUT - Update Product
// ======================================================

app.put("/products/:id", async (req, res) => {

    try {

        const updatedProduct = await Product.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true,

                runValidators: true

            }

        );

        if (!updatedProduct) {

            return res.status(404).json({

                message: "Product not found."

            });

        }

        res.status(200).json({

            message: "Product updated successfully.",

            product: updatedProduct

        });

    }

    catch (error) {

        res.status(400).json({

            message: "Unable to update product.",

            error: error.message

        });

    }

});

// ======================================================
// DELETE - Delete Product
// ======================================================

app.delete("/products/:id", async (req, res) => {

    try {

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        if (!deletedProduct) {

            return res.status(404).json({

                message: "Product not found."

            });

        }

        res.status(200).json({

            message: "Product deleted successfully.",

            product: deletedProduct

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Unable to delete product.",

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