# Secure Vault - Backend

This is the backend API for **Secure Vault**, a password manager built with Node.js, Express, and MongoDB Atlas. The backend manages password storage, retrieval, and serves the frontend via RESTful APIs.

## Features

- Save passwords with associated URLs and usernames.
- Retrieve all saved passwords in the vault.
- RESTful API architecture.
- Hosted on **Render.com** (free plan).
- MongoDB Atlas is used for the database.

## Tech Stack

- **Node.js**: v22.8.0
- **Express.js**: v4.21.0
- **MongoDB**: v6.8.0 (Atlas)
- **MongoDB Atlas**: Cloud-hosted MongoDB instance
- **Render.com**: Backend hosting service

## Installation

To run this backend locally, follow these steps:

1. Clone the repository:
   ```
   bash git clone https://github.com/prems51/secure-vault-backend.git
   cd secure-vault-backend
   ```
2. Install dependencies:
   ```npm install```
3. Create a .env file in the root directory and add the following environment variables:
   ```
   MONGO_URI=your-mongodb-atlas-uri
   PORT=your-port-number
   ```
4. Start the server:
   ```node server.js```

# API Endpoints
1. Get All Saved Passwords:

- **Endpoint**: /vault
- **Method**: GET
- **Description**: Fetches all saved passwords from the MongoDB database.
- **Response**: A JSON array containing saved passwords with associated URLs and usernames.

2. Save a New Password
- **Endpoint**: /manager
- **Method**: POST
- **Description**: Saves a new password with the provided URL and username to the database.
- **Request body**: ``{
  "url": "example.com",
  "username": "user123",
  "password": "your-password"
}``
- **Response:**: A success message confirming the password has been saved.

# Environment Variables
- **MONGO_URI**: The MongoDB connection string.
- **PORT**: The port number on which the backend server runs.

# Dependencies
The backend uses the following npm packages:
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mongodb**: Official MongoDB driver for Node.js.
- **dotenv**: Loads environment variables from a .env file into process.env.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **body**-parser: Middleware to parse incoming request bodies.

# License
This project is licensed under the MIT License. Feel free to modify and use it for your own purposes.

