# Blog Server

Welcome to the Blog Server project! This README will guide you through the setup and usage of the application.

## Project Name
**Blog Server**

## Live URL
[Live Demo](https://blog-server-assignment03.vercel.app/)

## Features
- User authentication and authorization
- Create, read, update, and delete blog posts
- Administrative Power to delete any Blog and Block A User
- Serach Blogs With Query,filter,Sort And etc


## Technology Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/CodeBuddy07/blog-server.git
    ```
2. Navigate to the project directory:
    ```bash
    cd blog-server
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Configuration
1. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

### Running the Application
1. Start the server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`

## Usage
- Register a new account or log in with existing credentials.
- Create, edit, and delete your blog posts.


Thank you for using Blog Server!