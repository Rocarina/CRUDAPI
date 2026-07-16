# User CRUD API with MongoDB

## Day 15 Assignment – Full Stack Developer Internship

A RESTful API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.

---

## Features

### User Management
- Create User
- Get All Users
- Get User by ID
- Update User
- Delete User

### Product Management
- Create Product
- Get All Products
- Update Product
- Delete Product

### Additional Features
- User role (admin/user)
- Fetch all admin users
- Calculate average age of users
- Mongoose validation
- MongoDB Aggregation
- Proper error handling

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

---

## Project Structure

```
UserCRUDAPI
│
├── models
│   ├── User.js
│   └── Product.js
│
├── node_modules
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── server.js
```

---

## Database

```
mongodbpractice
```

Collections:

- users
- products

---

## User API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Fetch all users |
| GET | /users/:id | Fetch user by ID |
| POST | /users | Create user |
| PUT | /users/:id | Update user |
| DELETE | /users/:id | Delete user |
| GET | /users/admins | Fetch all admin users |
| GET | /users/average-age | Calculate average age |

---

## Product API

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /products | Fetch all products |
| POST | /products | Create product |
| PUT | /products/:id | Update product |
| DELETE | /products/:id | Delete product |

---

## Validation

### User

- Name is required
- Name minimum 3 characters
- Email is unique
- Valid email required
- Age between 1–100
- Role must be:
  - admin
  - user

### Product

- Product name required
- Price greater than 0
- Stock cannot be negative

---

## Tested Using

- MongoDB Compass
- Postman

---

## Author

**Tanvi Satej Verlecar**

Full Stack Developer Internship