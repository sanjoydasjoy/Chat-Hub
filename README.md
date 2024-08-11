# ChatFlow

ChatFlow is a real-time chat server built with Express, MongoDB, and a RESTful API, offering seamless and responsive messaging experiences.

## Features

- Real-time messaging
- MongoDB for data storage
- RESTful API for communication

## Requirements

- Node.js (v14 or later recommended)
- MongoDB (v4.0 or later recommended)

## Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure MongoDB:**

   Ensure MongoDB is running on your local machine. The default connection URL is `mongodb://127.0.0.1:27017/whatsapp`. Modify `index.js` if needed to match your MongoDB setup.

## Running the Server

1. **Initialize the database (optional):**

    To populate the database with sample data, run:

    ```bash
    node init.js
    ```

    This step is only needed if you want to set up initial data.

2. **Start the server:**

    ```bash
    npm start
    ```

    The server will start and listen on port 8080 by default.

## Testing the API

- **GET** `/`: Returns a simple greeting message.
  
  Example request:

  ```bash
  curl http://localhost:8080/

