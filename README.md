# User CRUD API with MongoDB

## Day 15 – Full Stack Developer Internship

This project is a RESTful User Management API built using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. It performs complete CRUD (Create, Read, Update, Delete) operations with MongoDB and validates user data using Mongoose.

---

## Features

- Connect Express server to MongoDB
- Create new users
- Fetch all users
- Fetch user by ID
- Update user details
- Delete user
- Mongoose schema validation
- Proper API error handling
- JSON responses

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (API Testing)

---

## Project Structure

```
UserCRUDAPI
│
├── models
│   └── User.js
│
├── node_modules
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project folder

```bash
cd UserCRUDAPI
```

Install dependencies

```bash
npm install
```

Start MongoDB locally.

Run the server

```bash
node server.js
```

Server runs on

```
http://localhost:3000
```

---

## Database

```
mongodbpractice
```

Collection

```
users
```

---

## API Endpoints

### Home

```
GET /
```

---

### Get All Users

```
GET /users
```

---

### Get User By ID

```
GET /users/:id
```

---

### Create User

```
POST /users
```

Example Request

```json
{
    "name": "Rahul",
    "email": "rahul@example.com",
    "age": 22
}
```

---

### Update User

```
PUT /users/:id
```

Example Request

```json
{
    "age": 23
}
```

---

### Delete User

```
DELETE /users/:id
```

---

## Mongoose Validation

- Name is required
- Name must contain at least 3 characters
- Email is required
- Email must be unique
- Email must be in valid format
- Age must be between 1 and 100

---

## Sample Response

```json
{
    "_id": "64d9b24f3f2a1f9a8c123456",
    "name": "Rahul",
    "email": "rahul@example.com",
    "age": 23
}
```

---

## Error Handling

The API returns meaningful error messages for:

- Invalid Object ID
- Validation errors
- Duplicate email
- User not found
- Database errors

---

## Tested Using

- MongoDB Compass
- Postman

---

## Author

**Tanvi Satej Verlecar**

Full Stack Developer Internship – Day 15