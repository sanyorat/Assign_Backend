# Assign_Backend

This project is a simple backend service built with Express, Node.js, MongoDB, and Mongoose. It retrieves the intent from messages received from the frontend and returns random responses from a predefined response stack.

## Features
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Node.js**: JavaScript runtime built on Chrome's V8 engine for server-side development.
- **MongoDB & Mongoose**: MongoDB as the NoSQL database and Mongoose for object data modeling (ODM).
- **Intent Detection**: Extracts user intent from messages sent by the frontend.
- **Random Response Generation**: Responds with random answers from a predefined stack of responses based on the detected intent.

## Tech Stack
- **Express.js**: For handling HTTP requests and routing.
- **Node.js**: For server-side logic and processing.
- **MongoDB**: As the database to store and retrieve message data.
- **Mongoose**: For schema-based interaction with MongoDB.

## API Endpoints
- **POST /api/v1/chat/message**: Receives a message from the frontend, detects the intent, and responds with a random answer from the predefined stack.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Assign_Backend.git
